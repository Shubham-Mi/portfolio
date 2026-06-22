import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

export function useCountUp(target: number, duration = 1.5) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true })

  useEffect(() => {
    if (!isInView) return

    let frame = 0
    const totalFrames = Math.round(duration * 60)
    const step = target / totalFrames

    const counter = setInterval(() => {
      frame++
      const next = Math.min(Math.round(step * frame), target)
      setCount(next)
      if (frame >= totalFrames) clearInterval(counter)
    }, 1000 / 60)

    return () => clearInterval(counter)
  }, [isInView, target, duration])

  return { count, ref }
}
