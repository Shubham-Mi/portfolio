"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface FadeInWhenVisibleProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: "up" | "left" | "right" | "none"
}

export default function FadeInWhenVisible({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInWhenVisibleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  const initial = {
    opacity: 0,
    y: direction === "up" ? 20 : 0,
    x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
