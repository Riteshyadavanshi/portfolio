import Link from "next/link";
import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 bg-[#09090b]/80 backdrop-blur-lg py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tighter text-gradient">Ritesh Shrichandra Yadav</h2>
          <p className="text-zinc-500 text-sm max-w-xs font-medium">
            Frontend-focused Full-Stack Developer specializing in high-performance web applications.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex flex-wrap justify-center gap-6">
            <ContactLink href="mailto:riteshyadav4122@gmail.com" icon={<Mail size={18} />} label="Email" />
            <ContactLink href="tel:+918291047365" icon={<Phone size={18} />} label="Call" />
            <ContactLink href="https://linkedin.com/in/Riteshyadavanshi" icon={<Linkedin size={18} />} label="LinkedIn" />
            <ContactLink href="https://github.com/Riteshyadavanshi" icon={<Github size={18} />} label="GitHub" />
          </div>
          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} • Handcrafted in Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
};

const ContactLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <Link 
    href={href} 
    target="_blank"
    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all duration-300 group"
  >
    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-zinc-700 transition-colors shadow-sm">
      {icon}
    </div>
    <span className="text-xs font-bold hidden sm:block uppercase tracking-wider">{label}</span>
  </Link>
);

export default Footer;
