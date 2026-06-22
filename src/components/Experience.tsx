"use client"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import { experiences } from "@/lib/data"
import { MapPin } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <FadeInWhenVisible>
          <p className="font-mono text-xs text-violet-500 mb-2 tracking-widest uppercase">
            // 03 experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-100 mb-16">
            Where I&apos;ve worked
          </h2>
        </FadeInWhenVisible>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600 via-violet-600/30 to-transparent ml-[7px] hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <FadeInWhenVisible key={exp.company} delay={index * 0.1} direction="left">
                <div className="md:pl-10 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-violet-600 border-2 border-[#0a0a0f] hidden md:block" />

                  <div className="p-6 rounded-xl bg-[#111118] border border-[#1e1e2e] hover:border-violet-500/30 transition-colors duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-violet-300 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-xs text-slate-500 mt-1 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-violet-400 font-medium text-sm">{exp.company}</span>
                      <span className="text-slate-600">·</span>
                      <span className="flex items-center gap-1 text-slate-500 text-xs font-mono">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                          <span className="text-violet-500 mt-1.5 shrink-0">▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
