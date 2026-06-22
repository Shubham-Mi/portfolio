"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { GitFork, ExternalLink } from "lucide-react"
import type { Project } from "@/lib/data"

function Thumbnail({ src, name }: { src?: string; name: string }) {
  if (src) {
    return (
      <img
        src={src}
        alt={`${name} preview`}
        className="w-16 h-16 rounded-lg border border-[#1e1e2e] object-cover flex-shrink-0"
      />
    )
  }
  return (
    <div
      className="w-16 h-16 rounded-lg border border-[#1e1e2e] flex-shrink-0 overflow-hidden relative"
      style={{ background: "linear-gradient(135deg, #0f0820 0%, #1a0a38 100%)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.08) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />
    </div>
  )
}

function DeploymentIcon({ project }: { project: Project }) {
  const href = project.slug
    ? `/project/${project.slug}`
    : (project.live ?? null)

  const icon = <ExternalLink size={16} />

  if (!href) {
    return (
      <span className="text-slate-700 cursor-not-allowed" aria-label="No deployment link">
        {icon}
      </span>
    )
  }

  if (href.startsWith("/")) {
    return (
      <Link
        href={href}
        className="text-slate-500 hover:text-violet-400 transition-colors"
        aria-label="Open project"
      >
        {icon}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-500 hover:text-violet-400 transition-colors"
      aria-label="Open project"
    >
      {icon}
    </a>
  )
}

export default function ProjectCard({ project }: { project: Project }) {
  const isLive = !!(project.slug || project.live)

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="p-6 rounded-xl bg-[#111118] border border-[#1e1e2e] hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.08)] transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-slate-100 font-bold text-lg mb-2">{project.name}</h3>
          <div className="flex items-center gap-3">
            {isLive && (
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono bg-green-500/10 border border-green-500/30 text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                live
              </span>
            )}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-violet-400 transition-colors"
                aria-label="GitHub"
              >
                <GitFork size={16} />
              </a>
            ) : (
              <span className="text-slate-700 cursor-not-allowed" aria-label="No GitHub link">
                <GitFork size={16} />
              </span>
            )}
            <DeploymentIcon project={project} />
          </div>
        </div>
        <Thumbnail src={project.thumbnail} name={project.name} />
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

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
