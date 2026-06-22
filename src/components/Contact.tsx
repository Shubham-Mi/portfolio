"use client"
import { GitFork, Link, Mail } from "lucide-react"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import { personalInfo } from "@/lib/data"

const socialLinks = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: GitFork,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: Link,
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeInWhenVisible>
          <p className="font-mono text-xs text-violet-500 mb-2 tracking-widest uppercase">
            // 05 contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-100 mb-6">
            Let&apos;s build something.
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            I&apos;m open to Backend Engineering roles and interesting projects. Drop me a line — I&apos;ll get back to you.
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-block px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-colors duration-200 mb-12"
          >
            {personalInfo.email}
          </a>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.15}>
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-12 h-12 rounded-lg bg-[#111118] border border-[#1e1e2e] flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-500/50 transition-all duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
