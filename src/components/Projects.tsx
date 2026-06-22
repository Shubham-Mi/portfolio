"use client"
import { motion } from "framer-motion"
import { GitFork, ExternalLink, Clock } from "lucide-react"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import { projects, type Project } from "@/lib/data"

const PLACEHOLDER_COUNT = 4

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="p-6 rounded-xl bg-[#111118] border border-[#1e1e2e] hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.08)] transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-slate-100 font-bold text-lg">{project.name}</h3>
        <div className="flex items-center gap-3 ml-4 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-violet-400 transition-colors"
              aria-label="GitHub"
            >
              <GitFork size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-violet-400 transition-colors"
              aria-label="Live site"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded text-xs font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function PlaceholderCard() {
  return (
    <div className="p-6 rounded-xl bg-[#111118] border border-dashed border-[#1e1e2e] flex flex-col items-center justify-center gap-3 min-h-[180px] text-center">
      <Clock size={20} className="text-slate-700" />
      <p className="text-slate-600 text-sm font-mono">Coming soon</p>
    </div>
  )
}

export default function Projects() {
  const showPlaceholders = projects.length === 0

  return (
    <section id="projects" className="py-24 px-6 bg-[#111118]/50 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <FadeInWhenVisible>
          <p className="font-mono text-xs text-violet-500 mb-2 tracking-widest uppercase">
            // 04 projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-100 mb-4">
            Things I&apos;ve built
          </h2>
          {showPlaceholders && (
            <p className="text-slate-500 text-sm font-mono mb-16">
              Projects loading in — check back soon.
            </p>
          )}
          {!showPlaceholders && <div className="mb-16" />}
        </FadeInWhenVisible>

        <div className="grid sm:grid-cols-2 gap-6">
          {showPlaceholders
            ? Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
                <FadeInWhenVisible key={i} delay={i * 0.08}>
                  <PlaceholderCard />
                </FadeInWhenVisible>
              ))
            : projects.map((project, index) => (
                <FadeInWhenVisible key={project.name} delay={index * 0.08}>
                  <ProjectCard project={project} index={index} />
                </FadeInWhenVisible>
              ))}
        </div>
      </div>
    </section>
  )
}
