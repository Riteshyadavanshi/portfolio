"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Code2,
  Layers,
  Cpu,
  Globe,
  Database,
  Smartphone,
  Zap,
  Palette,
  Terminal,
  Server,
  GitBranch,
  Sparkles,
  Layout,
} from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  {
    name: "Angular",
    icon: <Layers size={20} className="text-red-500" />,
    color: "rgba(239, 68, 68, 0.12)",
    glow: "239, 68, 68",
  },
  {
    name: "React.js",
    icon: <Code2 size={20} className="text-sky-400" />,
    color: "rgba(56, 189, 248, 0.12)",
    glow: "56, 189, 248",
  },
  {
    name: "Next.js 14",
    icon: <Zap size={20} className="text-white" />,
    color: "rgba(255, 255, 255, 0.08)",
    glow: "255, 255, 255",
  },
  {
    name: "TypeScript",
    icon: <Smartphone size={20} className="text-blue-500" />,
    color: "rgba(59, 130, 246, 0.12)",
    glow: "59, 130, 246",
  },
  {
    name: "JavaScript",
    icon: <Code2 size={20} className="text-yellow-400" />,
    color: "rgba(250, 204, 21, 0.12)",
    glow: "250, 204, 21",
  },
  {
    name: "PrimeNG",
    icon: <Layout size={20} className="text-red-400" />,
    color: "rgba(248, 113, 113, 0.12)",
    glow: "248, 113, 113",
  },
  {
    name: "Tailwind",
    icon: <Palette size={20} className="text-teal-400" />,
    color: "rgba(45, 212, 191, 0.12)",
    glow: "45, 212, 191",
  },
  {
    name: "Java",
    icon: <Cpu size={20} className="text-orange-500" />,
    color: "rgba(249, 115, 22, 0.12)",
    glow: "249, 115, 22",
  },
  {
    name: "GraphQL",
    icon: <Globe size={20} className="text-pink-500" />,
    color: "rgba(236, 72, 153, 0.12)",
    glow: "236, 72, 153",
  },
  {
    name: "Node.js",
    icon: <Terminal size={20} className="text-green-400" />,
    color: "rgba(74, 222, 128, 0.12)",
    glow: "74, 222, 128",
  },
  {
    name: "Express",
    icon: <Server size={20} className="text-gray-400" />,
    color: "rgba(156, 163, 175, 0.12)",
    glow: "156, 163, 175",
  },
  {
    name: "MongoDB",
    icon: <Database size={20} className="text-green-500" />,
    color: "rgba(34, 197, 94, 0.12)",
    glow: "34, 197, 94",
  },
  {
    name: "MySQL",
    icon: <Database size={20} className="text-blue-400" />,
    color: "rgba(96, 165, 250, 0.12)",
    glow: "96, 165, 250",
  },
  {
    name: "Git",
    icon: <GitBranch size={20} className="text-orange-600" />,
    color: "rgba(234, 88, 12, 0.12)",
    glow: "234, 88, 12",
  },
  {
    name: "Prompt Eng",
    icon: <Sparkles size={20} className="text-purple-400" />,
    color: "rgba(192, 132, 252, 0.12)",
    glow: "192, 132, 252",
  },
];

const SkillCard = ({
  skill,
  index,
  spotlightIndex,
  autoPlayEnabled,
}: {
  skill: (typeof skills)[0];
  index: number;
  spotlightIndex: number;
  autoPlayEnabled: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isSpotlight =
    autoPlayEnabled && !isHovered && spotlightIndex === index;
  const isActive = isHovered || isSpotlight;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["16deg", "-16deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-16deg", "16deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        scale: isSpotlight ? 1.06 : isHovered ? 1.04 : 1,
        y: isSpotlight ? -4 : isHovered ? -2 : 0,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="relative h-20 w-full cursor-pointer perspective-1000"
    >
      <motion.div
        animate={
          isSpotlight
            ? {
                boxShadow: [
                  `0 0 0 0 rgba(${skill.glow}, 0)`,
                  `0 0 24px 2px rgba(${skill.glow}, 0.45)`,
                  `0 0 12px 1px rgba(${skill.glow}, 0.25)`,
                ],
              }
            : isHovered
              ? { boxShadow: `0 8px 24px -8px rgba(${skill.glow}, 0.35)` }
              : { boxShadow: "0 0 0 0 rgba(0,0,0,0)" }
        }
        transition={
          isSpotlight
            ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.25 }
        }
        style={{ backgroundColor: skill.color }}
        className={cn(
          "relative flex flex-col items-center justify-center h-full w-full rounded-2xl border backdrop-blur-sm overflow-hidden transition-colors duration-300",
          isActive
            ? "border-white/25 bg-zinc-800/90"
            : "border-white/10 bg-zinc-900/50",
        )}
      >
        {isSpotlight && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
              initial={{ left: "-60%" }}
              animate={{ left: "120%" }}
              transition={{
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.6,
              }}
            />
          </motion.div>
        )}

        <motion.div
          animate={
            isSpotlight
              ? { y: [0, -3, 0], scale: [1, 1.15, 1] }
              : isHovered
                ? { scale: 1.12 }
                : { y: 0, scale: 1 }
          }
          transition={
            isSpotlight
              ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.2 }
          }
          className="mb-1.5 relative z-10"
        >
          {skill.icon}
        </motion.div>

        <motion.span
          animate={{ color: isActive ? "#ffffff" : "#71717a" }}
          transition={{ duration: 0.25 }}
          className="text-[9px] font-bold uppercase tracking-wider text-center px-1 relative z-10"
        >
          {skill.name}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export const SkillSection = () => {
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setAutoPlayEnabled(false);
      return;
    }

    const interval = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % skills.length);
    }, 1400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bento-card flex flex-col gap-4 sm:gap-6 group bg-zinc-900/50 border-zinc-800 overflow-hidden">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-zinc-400">
          <Cpu
            size={18}
            className="group-hover:text-indigo-400 transition-colors"
          />
          <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-300">
            Expertise
          </h3>
        </div>
        {autoPlayEnabled && (
          <motion.div
            className="flex items-center gap-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
              Live
            </span>
          </motion.div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-3 relative">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
            spotlightIndex={spotlightIndex}
            autoPlayEnabled={autoPlayEnabled}
          />
        ))}
      </div>
    </div>
  );
};
