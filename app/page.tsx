 import AboutSection from '@/components/about-section'
import { HeroSection } from '@/components/hero-section'
import { SkillSection } from '@/components/skill-section'
 
import React from 'react'
 
 const  HomePage = () => {
   return (
       <> 
       <HeroSection/> 
       <SkillSection/>
       <AboutSection/>
       </>
   )
 }
 
 export default  HomePage