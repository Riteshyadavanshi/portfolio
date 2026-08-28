"use client"
import React from 'react'
import { Briefcase, BookOpen, Clock } from 'lucide-react'

const experiences = [
  {
    title: "Junior Software Developer",
    company: "Dispatch Panda",
    period: "Jun 2025 - Present",
    current: true,
    description:
      "Engineering real-time shipment tracking with Angular/PrimeNG. Reduced dispatcher response time by 30%.",
    tags: ["Angular", "PrimeNG", "Java", "Next.js", "NestJS", "Claude Code", "Agentic Coding"],
  },
  {
    title: "Full-Stack Developer",
    company: "Pawfriend.in (Part-Time)",
    period: "Jun 2023 - May 2025",
    current: false,
    description:
      "Built Next.js 14 features; improved load times by 25%. Implemented JWT/RBAC security.",
    tags: ["Next.js", "NestJS", "Claude Code", "Agentic Coding"],
  },
]

const AboutSection = () => {
  return (
    <div className="bento-card h-full flex flex-col justify-between group overflow-hidden bg-zinc-900/50 border-zinc-800">
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-zinc-400">
          <Briefcase size={18} />
          <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-300">Experience</h3>
        </div>
        
        <div className="space-y-6">
          {experiences.map((role) => (
            <div
              key={`${role.company}-${role.period}`}
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-zinc-800"
            >
              <div className="absolute left-[-5px] top-2 flex h-2.5 w-2.5 items-center justify-center">
                {role.current ? (
                  <>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500 ring-4 ring-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                  </>
                ) : (
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-700 ring-4 ring-zinc-900/50" />
                )}
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white uppercase tracking-tight">{role.title}</h4>
                <p className="text-xs text-zinc-400 font-medium">
                  {role.company} • {role.period}
                </p>
                <p className="text-xs text-zinc-500 leading-relaxed mt-2">{role.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-zinc-800/80 text-[10px] font-semibold text-zinc-400 border border-zinc-700/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-zinc-800/50 flex items-center justify-between text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
        <div className="flex items-center gap-1.5">
          <Clock size={12} />
          2+ Years Total Experience
        </div>
        <div className="flex items-center gap-1.5">
          <BookOpen size={12} />
          B.Sc IT
        </div>
      </div>
    </div>
  )
}

export default AboutSection
