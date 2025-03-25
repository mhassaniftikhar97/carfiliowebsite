'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface AnimatedButtonProps {
  route: string
  text: string
  variant?: 'default' | 'white'
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ route, text, variant = 'default' }) => {
  return (
    <Link href={route}>
      <motion.button
        className={`relative px-4 py-1.5 rounded-full text-base overflow-hidden group ${
          variant === 'white' ? 'text-gray-400 border-[1.5px] border-gray-200' : 'text-white'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Static background gradient - different for each variant */}
        <div 
          className={`absolute inset-0 ${
            variant === 'white' 
              ? 'bg-gray-100' 
              : 'bg-gradient-to-r from-blue-800 to-cyan-600'
          }`}
        ></div>
        
        {/* Animated gradient overlay - always animating but only visible on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient"
          style={{
            backgroundImage: variant === 'white'
              ? 'linear-gradient(90deg, #f3f4f6, #ffffff, #f3f4f6)'
              : 'linear-gradient(90deg, #1e40af, #60a5fa, #1e40af)',
            backgroundSize: '200% 100%',
          }}
        ></div>
        
        {/* Button text */}
        <span className={`relative z-10 transition-colors duration-300 ${
          variant === 'white' ? 'group-hover:text-black/60' : ''
        }`}>{text}</span>
        
        {/* CSS animation for gradient movement */}
        <style jsx global>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .animate-gradient {
            animation: gradient 3s linear infinite;
          }
        `}</style>
      </motion.button>
    </Link>
  )
}

export default AnimatedButton