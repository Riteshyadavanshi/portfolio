"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { motion } from 'framer-motion'

export const Navbar = () => {
  const path = usePathname()
  
  return (
    <header className='fixed top-0 left-0 right-0 z-50 flex justify-center p-4'>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='bg-zinc-900/70 backdrop-blur-md border border-zinc-800 flex justify-between items-center px-6 py-3 rounded-full shadow-2xl'
      >
        <div className='flex gap-8'>
          {links.map((link) => (
            <Link 
              href={link.url} 
              className={cn(
                'relative text-sm font-semibold transition-colors hover:text-white',
                path === link.url ? "text-white" : "text-zinc-500"
              )} 
              key={link.url}
            >
              {link.label}
              {path === link.url && (
                <motion.div 
                  layoutId="active-link"
                  className='absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full'
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </motion.nav>
    </header>
  )
}

const links = [
  { url: "/", label: "Home" },
  { url: "/projects", label: "Projects" },
  { url: "/contact-me", label: "Contact" },
]
