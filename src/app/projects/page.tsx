import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ProjectCard from "@/components/ProjectCard"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import { projects } from "@/lib/data"

export const metadata = {
  title: "Projects — Shubham Mittal",
  description: "All projects built by Shubham Mittal.",
}

export default function ProjectsPage() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen">
      <Navbar />

      <section className="py-24 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-violet-400 transition-colors mb-10"
            >
              ← Back
            </Link>
            <p className="font-mono text-xs text-violet-500 mb-2 tracking-widest uppercase">
              // projects
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-100 mb-4">
              Things I&apos;ve built
            </h2>
            <div className="mb-16" />
          </FadeInWhenVisible>

          {projects.length === 0 ? (
            <p className="text-slate-500 text-sm font-mono">
              Projects loading in — check back soon.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <FadeInWhenVisible key={project.name} delay={index * 0.08}>
                  <ProjectCard project={project} />
                </FadeInWhenVisible>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
