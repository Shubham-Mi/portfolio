"use client"

import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import { useCountUp } from "@/lib/useCountUp"
import { personalInfo, stats } from "@/lib/data"

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value)

  return (
    <div className="text-center md:text-left">
      <p
        ref={ref as React.RefObject<HTMLParagraphElement>}
        className="text-4xl font-bold font-display text-violet-400"
      >
        {count}
        {suffix}
      </p>
      <p className="text-sm text-slate-500 mt-1 font-mono">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <FadeInWhenVisible>
          <p className="font-mono text-xs text-violet-500 mb-2 tracking-widest uppercase">
            // 01 about
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-100 mb-16">
            Who I am
          </h2>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <FadeInWhenVisible delay={0.1} direction="left">
            <p className="text-slate-400 leading-relaxed text-lg">
              {personalInfo.bio}
            </p>
            <p className="text-slate-400 leading-relaxed text-lg mt-4">
              Outside of work I enjoy competitive programming and exploring new tech. Currently based in{" "}
              <span className="text-violet-400">{personalInfo.location}</span>.
            </p>
          </FadeInWhenVisible>

          {/* Stats */}
          <FadeInWhenVisible delay={0.2} direction="right">
            <div className="grid grid-cols-3 gap-8 p-8 rounded-xl bg-[#111118] border border-[#1e1e2e]">
              {stats.map((stat) => (
                <StatCounter key={stat.label} {...stat} />
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}
