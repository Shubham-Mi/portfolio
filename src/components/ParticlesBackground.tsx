"use client"
import { useEffect, useState } from "react"
import Particles from "@tsparticles/react"
import { tsParticles } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"

export default function ParticlesBackground() {
  const [engineReady, setEngineReady] = useState(false)

  useEffect(() => {
    loadSlim(tsParticles).then(() => setEngineReady(true))
  }, [])

  if (!engineReady) return null

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 w-full h-full"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
          },
        },
        particles: {
          number: {
            value: 70,
            density: { enable: true, width: 900, height: 900 },
          },
          color: { value: "#7c3aed" },
          opacity: { value: 0.25 },
          size: { value: { min: 1, max: 2 } },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          links: {
            enable: true,
            distance: 140,
            color: "#7c3aed",
            opacity: 0.12,
            width: 1,
          },
        },
        detectRetina: true,
      }}
    />
  )
}
