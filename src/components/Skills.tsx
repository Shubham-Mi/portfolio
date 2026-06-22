"use client"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import { skillGroups } from "@/lib/data"

function SkillCategory({ category, skills, index }: { category: string; skills: string[]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <div ref={ref} className="space-y-3">
      <p className="font-mono text-xs text-violet-500 tracking-widest uppercase">{category}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: index * 0.05 + i * 0.05 }}
            className="px-3 py-1.5 rounded-md bg-[#111118] border border-[#1e1e2e] text-slate-300 text-sm font-mono hover:border-violet-500/50 hover:text-violet-300 transition-colors duration-200"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#111118]/50">
      <div className="max-w-6xl mx-auto">
        <FadeInWhenVisible>
          <p className="font-mono text-xs text-violet-500 mb-2 tracking-widest uppercase">
            // 02 skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-100 mb-16">
            What I work with
          </h2>
        </FadeInWhenVisible>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((group, index) => (
            <SkillCategory key={group.category} {...group} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
