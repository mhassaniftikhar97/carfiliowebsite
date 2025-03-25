'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'


interface ButtonProps {
  route: string
  text: string
  variant: string
}

const Button = ({ route, text, variant = 'white' }: ButtonProps) => {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  // Helper function to determine styles based on variant
  const getVariantStyles = () => {
    if (variant === 'white') {
      return 'border-black bg-white'
    } else if (variant === 'blue') {
      return isHovered ? 'border-cfblue bg-cfblue' : 'border-cfblue bg-cfblue'
    } else {
      return isHovered ? 'border-black bg-black' : 'border-white bg-black'
    }
  }

  // Helper function to determine hover background color
  const getHoverBgColor = () => {
    if (variant === 'white') return 'bg-black'
    if (variant === 'blue') return 'bg-white'
    return 'bg-white'
  }

  // Helper function to determine text color
  const getTextColorClass = () => {
    if (variant === 'white') return 'text-black group-hover:text-white'
    if (variant === 'blue') return 'text-white group-hover:text-cfblue'
    return 'text-white group-hover:text-black'
  }

  return (
    <div 
      onClick={() => router.push(route)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`px-4 py-1.5 h-fit w-fit rounded-full border-[1.5px] cursor-pointer relative overflow-hidden group text-base font-normal flex items-center justify-center ${getVariantStyles()}`}
    >
      <div 
        className={`absolute inset-0 transition-all duration-400 ${getHoverBgColor()}`}
        style={{
          clipPath: isHovered ? 'circle(150% at 50% 100%)' : 'circle(10% at 50% 150%)',
          transition: 'clip-path 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />
      <span className={`relative z-10 transition-colors ${getTextColorClass()}`}>
        {text}
      </span>
    </div>
  )
}

export default Button