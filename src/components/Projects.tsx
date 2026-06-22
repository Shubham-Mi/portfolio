"use client"
import Link from "next/link"
import { Clock } from "lucide-react"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/lib/data"

const PLACEHOLDER_COUNT = 4

function PlaceholderCard() {
  return (
    <div className="p-6 rounded-xl bg-[#111118] border border-dashed border-[#1e1e2e] flex flex-col items-center justify-center gap-3 min-h-[180px] text-center">
      <Clock size={20} className="text-slate-700" />
      <p className="text-slate-600 text-sm font-mono">Coming soon</p>
    </div>
  )
}

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6)
  const showPlaceholders = featuredProjects.length === 0

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
            : featuredProjects.map((project, index) => (
                <FadeInWhenVisible key={project.name} delay={index * 0.08}>
                  <ProjectCard project={project} />
                </FadeInWhenVisible>
              ))}
        </div>

        <FadeInWhenVisible>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-mono text-violet-400 hover:text-violet-300 transition-colors border border-violet-500/30 hover:border-violet-500/60 px-5 py-2.5 rounded-lg hover:bg-violet-500/5"
            >
              View all projects →
            </Link>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
