"use client";

import React from "react";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import { ProjectImage } from "@/components/project-image";
import { featuredProject } from "@/lib/projects";

export const FeaturedProject = () => {
  return (
    <div className="bento-card h-full flex flex-col gap-6 group overflow-hidden bg-zinc-900/50 border-zinc-800">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-zinc-400">
          <Star size={18} className="text-yellow-500 fill-yellow-500/20" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-300">
            Featured Project
          </h3>
        </div>
        <Link
          href={featuredProject.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-zinc-500 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-widest shrink-0"
        >
          Live Demo <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center flex-1">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tighter">
            <span className="text-gradient">{featuredProject.projectName}</span>
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
            {featuredProject.description}
          </p>
          {featuredProject.tags && (
            <div className="flex flex-wrap gap-2">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full bg-zinc-800 text-[10px] text-zinc-500 font-bold uppercase tracking-widest border border-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-800/50 group-hover:scale-[1.02] transition-transform duration-500">
          <ProjectImage
            src={featuredProject.imageUrl}
            alt={`${featuredProject.projectName} preview`}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
