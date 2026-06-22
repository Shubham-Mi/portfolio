"use client"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { IconType } from "react-icons"
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiSpringboot,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiJenkins,
  SiGitlab,
  SiGraphql,
} from "react-icons/si"
import { FaJava, FaAws } from "react-icons/fa6"
import { Globe } from "lucide-react"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import { skillGroups } from "@/lib/data"

const SKILL_ICONS: Record<string, IconType | typeof Globe> = {
  Java: FaJava,
  "C++": SiCplusplus,
  Python: SiPython,
  JavaScript: SiJavascript,
  "Spring Boot": SiSpringboot,
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Redis: SiRedis,
  AWS: FaAws,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Git: SiGit,
  Jenkins: SiJenkins,
  "GitLab CI": SiGitlab,
  REST: Globe,
  GraphQL: SiGraphql,
}

function SkillCategory({ category, skills, index }: { category: string; skills: string[]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <div ref={ref} className="space-y-3">
      <p className="font-mono text-xs text-violet-500 tracking-widest uppercase">{category}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => {
          const Icon = SKILL_ICONS[skill]
          return (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 + i * 0.05 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#111118] border border-[#1e1e2e] text-slate-300 text-sm font-mono hover:border-violet-500/50 hover:text-violet-300 transition-colors duration-200 group"
            >
              {Icon && <Icon size={14} className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />}
              {skill}
            </motion.span>
          )
        })}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#111118]/50 scroll-mt-20">
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
