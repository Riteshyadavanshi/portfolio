"use client"
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

export const ContactCard = () => {
  return (
    <div className="bento-card h-full flex flex-col justify-between gap-6 group overflow-hidden bg-zinc-900/50 border-zinc-800">
      <div className="flex items-center gap-2 text-zinc-400">
        <Mail size={18} className="text-white" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-300">Connect</h3>
      </div>

      <div className="space-y-4">
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">Quick Links</p>
        <div className="grid grid-cols-2 gap-3">
          <Link 
            href="https://github.com/Riteshyadavanshi" 
            target="_blank"
            className="p-3 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
          >
            <Github size={20} />
          </Link>
          <Link 
            href="https://linkedin.com/in/Riteshyadavanshi" 
            target="_blank"
            className="p-3 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:bg-zinc-700 transition-all"
          >
            <Linkedin size={20} />
          </Link>
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-zinc-800/50">
        <div className="flex items-center justify-between text-xs">
          <span className="text-zinc-500 font-bold uppercase tracking-widest">Email</span>
          <Link href="mailto:riteshyadav4122@gmail.com" className="text-zinc-300 hover:text-white transition-colors">
            ritesh@example.com
          </Link>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-zinc-500 font-bold uppercase tracking-widest">Phone</span>
          <span className="text-zinc-300">+91 8291047365</span>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-48 h-48 bg-indigo-500/10 blur-[60px] rounded-full group-hover:bg-indigo-500/20 transition-colors duration-500" />
    </div>
  );
};
