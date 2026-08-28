"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectImage } from "@/components/project-image";

interface ProjectCardProps {
  projectName: string;
  projectUrl: string;
  description: string;
  imageUrl: string;
}

const ProjectCard = ({
  projectName,
  projectUrl,
  description,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bento-card group flex flex-col gap-6 bg-zinc-900/50 border-zinc-800"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800/50">
        <ProjectImage
          src={imageUrl}
          width={600}
          height={400}
          alt={`Screenshot of ${projectName}`}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
      </div>

      <div className="flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-zinc-300">
              {projectName}
            </h3>
            <Link
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${projectName}`}
              className="w-10 h-10 shrink-0 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <Link
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-white uppercase tracking-wider transition-colors w-fit"
        >
          View live site <ArrowUpRight size={14} />
        </Link>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
