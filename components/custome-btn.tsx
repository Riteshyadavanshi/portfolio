"use client"
import { cn } from '@/lib/utils'
import React from 'react'

interface ButtonProps {
    children: React.ReactNode,
    onClick?: () => void,
    disable?: boolean
    className?: string
}

export const Button = ({ children, disable = false, onClick, className }: ButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disable} 
      className={cn(
        "px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  )
}
