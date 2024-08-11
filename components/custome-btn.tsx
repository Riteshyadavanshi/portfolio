 "use client"
import { cn } from '@/lib/utils'
import React from 'react'

interface ButtonProps{
    children:React.ReactNode,
    onClick ?:()=>void,
    className ?:string
}
export const  Button = ({children,onClick,className}:ButtonProps) => {
  return (
    <button onClick={onClick} className={cn("w-40 bg-indigo-900 text-white p-2 rounded-md",className)}>
           {children}
    </button>
    
  )
}

