"use client"
import ProjectCard from "@/components/project-card";
import React from "react";
import { Projects } from "@/lib/projects";
import { motion } from "framer-motion";

const ProjectPage = () => {
  return (
    <div className="pt-28 sm:pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 sm:space-y-16">
      <div className="space-y-4 max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-bold tracking-tighter"
        >
          My <span className="text-zinc-500 italic font-serif">Work</span>.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl leading-relaxed"
        >
          A selection of projects that showcase my passion for building 
          refined and functional digital experiences.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {Projects.map((project, index) => (
          <ProjectCard {...project} key={project.projectName} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectPage;
