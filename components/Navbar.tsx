 "use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const Navbar = () => {
   const path=usePathname()
  return (
     <nav className=' flex justify-center text-white p-2'>
        <div className='bg-black flex justify-between w-[80%] md:w-[50%]  gap-4 p-4 rounded-xl'>
              {
                links.map((link)=>
                  (
               <Link href={link.url} className={cn(path==link.url&&"text-red-600 underline")} key={link.url}>{link.label}</Link>
                  )
               )
              } 
        </div>
     </nav>
  )
}

 const links=[
   {
   url:"/",
   label:"Home"
   },
   {
   url:"/projects",
   label:"Projects"
   },
   {
   url:"/contact-me",
   label:"Contact me"
   },
]

 