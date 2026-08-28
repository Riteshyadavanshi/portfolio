"use client"
import React from 'react'
import { Briefcase, BookOpen, Clock } from 'lucide-react'

const AboutSection = () => {
  return (
    <div className="bento-card h-full flex flex-col justify-between group overflow-hidden bg-zinc-900/50 border-zinc-800">
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-zinc-400">
          <Briefcase size={18} />
          <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-300">Experience</h3>
        </div>
        
        <div className="space-y-6">
          <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-zinc-800">
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-700 ring-4 ring-zinc-900/50" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white uppercase tracking-tight">Junior Software Developer</h4>
              <p className="text-xs text-zinc-400 font-medium">Dispatch Panda • Jun 2025 - Present</p>
              <p className="text-xs text-zinc-500 leading-relaxed mt-2">
                Engineering real-time shipment tracking with Angular/PrimeNG. Reduced dispatcher response time by 30%.
              </p>
            </div>
          </div>

          <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-zinc-800">
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-700 ring-4 ring-zinc-900/50" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white uppercase tracking-tight">Full-Stack Developer</h4>
              <p className="text-xs text-zinc-400 font-medium">Pawfriend.in (Part-Time) • Jun 2023 - May 2025</p>
              <p className="text-xs text-zinc-500 leading-relaxed mt-2">
                Built Next.js 14 features; improved load times by 25%. Implemented JWT/RBAC security.
              </p>
            </div>
          </div>
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
