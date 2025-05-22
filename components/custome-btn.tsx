 "use client"
import { cn } from '@/lib/utils'
import React from 'react'

interface ButtonProps{
    children:React.ReactNode,
    onClick ?:()=>void,
    disable?:boolean
    className ?:string
}
export const  Button = ({children,disable=false,onClick,className}:ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disable} className={cn("w-40 bg-indigo-900 text-white p-2 rounded-md disabled:bg-indigo-400 disabled:cursor-not-allowed",className)}>
           {children}
    </button>
    
  )
}

