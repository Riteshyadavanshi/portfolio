"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bento-card group flex flex-col gap-6 bg-zinc-900/50 border-zinc-800"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-800">
        <Image 
          src={imageUrl} 
          width={600} 
          height={400} 
          alt={projectName} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className="flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-zinc-300">
              {projectName}
            </h3>
            <Link 
              href={projectUrl} 
              target="_blank"
              className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            href="#" 
            className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-white uppercase tracking-wider transition-colors"
          >
            <Github size={14} />
            Source
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
