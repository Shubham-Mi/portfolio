"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { ChevronDown } from "lucide-react"
import { personalInfo, typedRoles } from "@/lib/data"

const ParticlesBackground = dynamic(
  () => import("@/components/ParticlesBackground"),
  { ssr: false }
)

function useTyped(words: string[], typingSpeed = 90, deletingSpeed = 50, pause = 2200) {
  const [displayText, setDisplayText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]

    if (!isDeleting && displayText === currentWord) {
      const t = setTimeout(() => setIsDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(
      () => {
        setDisplayText(
          isDeleting
            ? currentWord.slice(0, displayText.length - 1)
            : currentWord.slice(0, displayText.length + 1)
        )
      },
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(t)
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return displayText
}

export default function Hero() {
  const typedText = useTyped(typedRoles)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particle mesh */}
      <ParticlesBackground />

      {/* Purple glow orb */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-700/10 blur-[130px] pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-violet-400 text-sm mb-4"
        >
          // hello world
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-slate-100 mb-6 leading-tight"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl md:text-2xl text-slate-400 mb-10 font-mono min-h-[2rem] flex items-center gap-1"
        >
          <span className="text-violet-400">{typedText}</span>
          <span aria-hidden="true" className="inline-block w-0.5 h-6 bg-violet-400 animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-colors duration-200 text-sm"
          >
            View My Work ↓
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-violet-600/50 text-violet-400 hover:border-violet-500 hover:text-violet-300 rounded-lg font-medium transition-colors duration-200 text-sm"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-slate-600" size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
