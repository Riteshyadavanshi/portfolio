"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  ArrowRight,
  MapPin,
  Zap,
  TrendingUp,
  BarChart3,
} from "lucide-react";

const metrics = [
  {
    label: "Response Time",
    value: "-30%",
    icon: <Zap size={14} className="text-yellow-400" />,
  },
  {
    label: "API Performance",
    value: "+35%",
    icon: <BarChart3 size={14} className="text-blue-400" />,
  },
  {
    label: "Page Load",
    value: "-25%",
    icon: <TrendingUp size={14} className="text-green-400" />,
  },
];

export const HeroSection = () => {
  return (
    <div className="bento-card flex flex-col gap-5 sm:gap-8 group overflow-hidden bg-zinc-900/50 border-zinc-800">
      <div className="space-y-5 sm:space-y-8 relative z-10">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-[10px] sm:text-xs font-semibold border border-zinc-700"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Junior Software Developer @ Dispatch Panda
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-1.5 text-zinc-500 text-xs font-medium"
          >
            <MapPin size={14} className="shrink-0" />
            Mumbai, India
          </motion.div>
        </div>

        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white"
          >
            Ritesh <span className="text-zinc-500">Shrichandra</span> <br />
            <span className="text-gradient">Yadav</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-medium"
          >
            Frontend-focused{" "}
            <span className="text-white font-bold">Full-Stack Developer</span>.
            Engineering scalable systems at{" "}
            <span className="text-white font-bold">Dispatch Panda</span> with
            Angular & Java.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="p-4 rounded-2xl bg-zinc-800/30 border border-zinc-700/50 flex flex-col gap-1 hover:border-zinc-500 transition-colors"
            >
              <div className="flex items-center gap-2 text-zinc-500 font-bold text-[10px] uppercase tracking-wider">
                {metric.icon}
                {metric.label}
              </div>
              <div className="text-2xl font-bold text-white tracking-tighter">
                {metric.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex gap-3 w-full sm:flex-wrap sm:gap-4 relative z-10"
      >
        <Link
          href="/projects"
          className="btn-primary group/btn flex-1 sm:flex-none !px-4 sm:!px-8 !py-3 text-xs sm:text-base whitespace-nowrap justify-center min-h-[44px]"
        >
          View Projects
          <ArrowRight
            size={16}
            className="hidden sm:block transition-transform group-hover/btn:translate-x-1 shrink-0"
          />
        </Link>

        <Link
          href="/contact-me"
          className="btn-secondary flex-1 sm:flex-none !px-4 sm:!px-8 !py-3 text-xs sm:text-base whitespace-nowrap justify-center min-h-[44px]"
        >
          <MessageCircle size={16} className="shrink-0" />
          Contact Me
        </Link>
      </motion.div>

      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-zinc-500/5 blur-[100px] rounded-full group-hover:bg-zinc-500/10 transition-colors duration-500" />
    </div>
  );
};
