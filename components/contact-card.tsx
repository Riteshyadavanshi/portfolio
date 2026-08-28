"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const ContactCard = () => {
  return (
    <div className="bento-card h-full flex flex-col justify-between gap-6 group overflow-hidden bg-zinc-900/50 border-zinc-800">
      <div className="flex items-center gap-2 text-zinc-400">
        <Mail size={18} className="text-white" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-300">
          Connect
        </h3>
      </div>

      <div className="space-y-4">
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">
          Quick Links
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="https://github.com/Riteshyadavanshi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ritesh-shrichandra-yadav-560496247"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:bg-zinc-700 transition-all"
          >
            <Linkedin size={20} />
          </Link>
        </div>
      </div>

      <div className="pt-4 border-t border-zinc-800/50">
        <div className="flex items-center justify-between text-xs">
          <span className="text-zinc-500 font-bold uppercase tracking-widest">
            Email
          </span>
          <Link
            href="mailto:riteshyadav4122@gmail.com"
            className="text-zinc-300 hover:text-white transition-colors"
          >
            riteshyadav4122@gmail.com
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-48 h-48 bg-indigo-500/10 blur-[60px] rounded-full group-hover:bg-indigo-500/20 transition-colors duration-500" />
    </div>
  );
};
