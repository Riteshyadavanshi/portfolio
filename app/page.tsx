"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/hero-section'
import { SkillSection } from '@/components/skill-section'
import AboutSection from '@/components/about-section'
import { FeaturedProject } from '@/components/featured-project'
import { ContactCard } from '@/components/contact-card'

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-fr">
        
        {/* Row 1 & 2: Hero & Skills */}
        <div className="md:col-span-6 lg:col-span-8 lg:row-span-2">
          <HeroSection />
        </div>

        <div className="md:col-span-3 lg:col-span-4 lg:row-span-2">
          <SkillSection />
        </div>

        {/* Row 3: About & Connect */}
        <div className="md:col-span-3 lg:col-span-4">
          <AboutSection />
        </div>

        <div className="md:col-span-6 lg:col-span-8">
          <FeaturedProject />
        </div>

        {/* Row 4: Final Connect Card */}
        <div className="md:col-span-3 lg:col-span-4">
          <ContactCard />
        </div>

        {/* Extra Experience Details or Quick Info slot if needed to fill more */}
        <div className="md:col-span-6 lg:col-span-8 bento-card bg-zinc-900/50 border-zinc-800 flex items-center justify-center p-12 text-center group">
           <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tighter uppercase">Currently engineering at Dispatch Panda</h3>
              <p className="text-zinc-500 max-w-lg mx-auto text-sm font-medium">
                Developing high-performance logistics interfaces and optimizing GraphQL APIs 
                to support 500+ daily trucking operations across North America.
              </p>
           </div>
           {/* Decorative corner accent */}
           <div className="absolute top-0 left-0 w-24 h-24 bg-green-500/5 blur-2xl rounded-full -translate-y-1/2 -translate-x-1/2 group-hover:bg-green-500/10 transition-colors" />
        </div>

      </div>
    </div>
  )
}

export default HomePage
