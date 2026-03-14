"use client"
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Code2, 
  Layers, 
  Cpu, 
  Globe, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Smartphone,
  Zap,
  Palette,
  Terminal,
  Server,
  GitBranch,
  Sparkles,
  Layout
} from "lucide-react";

const skills = [
  { name: "Angular", icon: <Layers size={20} className="text-red-500" />, color: "rgba(239, 68, 68, 0.1)" },
  { name: "React.js", icon: <Code2 size={20} className="text-sky-400" />, color: "rgba(56, 189, 248, 0.1)" },
  { name: "Next.js 14", icon: <Zap size={20} className="text-white" />, color: "rgba(255, 255, 255, 0.1)" },
  { name: "TypeScript", icon: <Smartphone size={20} className="text-blue-500" />, color: "rgba(59, 130, 246, 0.1)" },
  { name: "JavaScript", icon: <Code2 size={20} className="text-yellow-400" />, color: "rgba(250, 204, 21, 0.1)" },
  { name: "PrimeNG", icon: <Layout size={20} className="text-red-400" />, color: "rgba(248, 113, 113, 0.1)" },
  { name: "Tailwind", icon: <Palette size={20} className="text-teal-400" />, color: "rgba(45, 212, 191, 0.1)" },
  { name: "Java", icon: <Cpu size={20} className="text-orange-500" />, color: "rgba(249, 115, 22, 0.1)" },
  { name: "GraphQL", icon: <Globe size={20} className="text-pink-500" />, color: "rgba(236, 72, 153, 0.1)" },
  { name: "Node.js", icon: <Terminal size={20} className="text-green-400" />, color: "rgba(74, 222, 128, 0.1)" },
  { name: "Express", icon: <Server size={20} className="text-gray-400" />, color: "rgba(156, 163, 175, 0.1)" },
  { name: "MongoDB", icon: <Database size={20} className="text-green-500" />, color: "rgba(34, 197, 94, 0.1)" },
  { name: "MySQL", icon: <Database size={20} className="text-blue-400" />, color: "rgba(96, 165, 250, 0.1)" },
  { name: "Git", icon: <GitBranch size={20} className="text-orange-600" />, color: "rgba(234, 88, 12, 0.1)" },
  { name: "Prompt Eng", icon: <Sparkles size={20} className="text-purple-400" />, color: "rgba(192, 132, 252, 0.1)" },
];

const SkillCard = ({ skill }: { skill: typeof skills[0] }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-20 w-full cursor-pointer perspective-1000"
    >
      <div 
        style={{ 
          transform: "translateZ(50px)", 
          transformStyle: "preserve-3d",
          backgroundColor: skill.color 
        }}
        className="group flex flex-col items-center justify-center h-full w-full rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-zinc-800/80"
      >
        <div style={{ transform: "translateZ(30px)" }} className="mb-1.5 transition-transform group-hover:scale-110">
          {skill.icon}
        </div>
        <span style={{ transform: "translateZ(20px)" }} className="text-[9px] font-bold uppercase tracking-wider text-zinc-500 group-hover:text-white transition-colors text-center px-1">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
};

export const SkillSection = () => {
  return (
    <div className="bento-card h-full flex flex-col gap-6 group bg-zinc-900/50 border-zinc-800">
      <div className="flex items-center gap-2 text-zinc-400">
        <Cpu size={18} className="group-hover:text-indigo-400 transition-colors animate-pulse" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-300">Expertise</h3>
      </div>
      
      <div className="grid grid-cols-3 gap-3 overflow-y-auto pr-2 custom-scrollbar">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};
