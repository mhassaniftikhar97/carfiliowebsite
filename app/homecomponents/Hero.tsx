'use client'

import React, { useEffect, useRef } from 'react'

import { Eye, Zap, MessageCircle } from 'lucide-react'

import { RainbowButton } from '@/components/magicui/rainbow-button'
import { WhiteButton } from '@/components/magicui/white-button'
import { cn } from '@/lib/utils'

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Initialize mouse position variables
    let mouseX = 0
    let mouseY = 0
    
    // Add mouse move event listener
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    
    window.addEventListener('mousemove', handleMouseMove)

    // Grid parameters
    const gridSize = 80
    
    // Define types for particles and trails
    interface Particle {
      x: number
      y: number
      size: number
      speed: number
      direction: 'horizontal' | 'vertical'
      positive: boolean
      color: string
      lastTrailPos: { x: number; y: number }
      trailCounter: number
      interactionCooldown: number
    }

    interface Trail {
      startX: number
      startY: number
      endX: number
      endY: number
      alpha: number
      baseColor: string
      color: string
      width: number
    }

    // Create particles that follow grid lines
    const particles: Particle[] = []
    const particleCount = 15
    
    // Array to store trail segments
    const trails: Trail[] = []
    
    for (let i = 0; i < particleCount; i++) {
      // Randomly place particles anywhere on the grid (not just at the edges)
      const x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize
      const y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
      
      // More vibrant blue color with higher intensity
      const colorIntensity = 0.9 + Math.random() * 0.1 // Higher base opacity (0.9-1.0)
      const r = 120 + Math.floor(Math.random() * 40) // 120-160 for red
      const g = 190 + Math.floor(Math.random() * 40) // 190-230 for green
      const b = 255 // Max blue for intensity
      
      particles.push({
        x,
        y,
        size: 1.5 + Math.random() * 1.5, // Smaller dots (1.5-3px)
        speed: 0.5 + Math.random() * 0.5,
        direction: ['horizontal', 'vertical'][Math.floor(Math.random() * 2)] as 'horizontal' | 'vertical',
        positive: Math.random() > 0.5, // Direction: right/down or left/up
        color: `rgba(${r}, ${g}, ${b}, ${colorIntensity})`, // More vibrant color
        lastTrailPos: { x, y }, // Track position for trail creation
        trailCounter: 0, // Counter for trail segment creation
        interactionCooldown: 0 // Initialize cooldown to 0 to allow immediate interaction
      })
    }
    
    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw trails first (so they appear behind particles)
      trails.forEach((trail, index) => {
        ctx.beginPath()
        ctx.moveTo(trail.startX, trail.startY)
        ctx.lineTo(trail.endX, trail.endY)
        ctx.strokeStyle = trail.color
        ctx.lineWidth = trail.width
        ctx.stroke()
        
        // Fade out trail
        trail.alpha -= 0.01
        if (trail.alpha <= 0) {
          trails.splice(index, 1)
        } else {
          // Update color with new alpha
          const rgbValues = trail.baseColor.match(/\d+/g) || ['0', '0', '0']
          trail.color = `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${trail.alpha})`
        }
      })
      
      // Update and draw particles
      particles.forEach(particle => {
        // Move particle along grid lines
        if (particle.direction === 'horizontal') {
          particle.x += particle.positive ? particle.speed : -particle.speed
          
          // Wrap around when reaching edge
          if (particle.x > canvas.width) particle.x = 0
          if (particle.x < 0) particle.x = canvas.width
        } else {
          particle.y += particle.positive ? particle.speed : -particle.speed
          
          // Wrap around when reaching edge
          if (particle.y > canvas.height) particle.y = 0
          if (particle.y < 0) particle.y = canvas.height
        }
        
        // Check for mouse interaction (if cooldown is 0)
        if (particle.interactionCooldown <= 0) {
          const distToMouse = Math.sqrt(
            Math.pow(particle.x - mouseX, 2) + 
            Math.pow(particle.y - mouseY, 2)
          )
          
          // If mouse is close to particle, change direction
          if (distToMouse < 50) { // 50px interaction radius
            // Change direction (horizontal to vertical or vice versa)
            particle.direction = particle.direction === 'horizontal' ? 'vertical' : 'horizontal'
            
            // Randomly choose new positive/negative direction
            particle.positive = Math.random() > 0.5
            
            // Snap to grid
            particle.x = Math.round(particle.x / gridSize) * gridSize
            particle.y = Math.round(particle.y / gridSize) * gridSize
            
            // Reset trail position after direction change
            particle.lastTrailPos = { x: particle.x, y: particle.y }
            
            // Set cooldown to prevent rapid direction changes
            particle.interactionCooldown = 60 // About 1 second at 60fps
          }
        } else {
          // Decrease cooldown
          particle.interactionCooldown--
        }
        
        // Add trail segment when moved enough distance
        particle.trailCounter++
        if (particle.trailCounter >= 5) { // Create trail every 5 frames
          // Extract RGB values from particle color
          const rgbValues = particle.color.match(/\d+/g) || ['0', '0', '0']
          const baseColor = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`
          
          trails.push({
            startX: particle.lastTrailPos.x,
            startY: particle.lastTrailPos.y,
            endX: particle.x,
            endY: particle.y,
            alpha: 0.6, // Start with moderate opacity
            baseColor: baseColor,
            color: `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, 0.6)`,
            width: particle.size * 0.7 // Slightly thinner than the particle
          })
          
          // Update last trail position
          particle.lastTrailPos = { x: particle.x, y: particle.y }
          particle.trailCounter = 0
        }
        
        // Draw glowing dot
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        
        // Extract RGB values from particle color for gradient
        const rgbValues = particle.color.match(/\d+/g) || ['0', '0', '0']
        
        // Create gradient for glow effect with stronger center and blurrier edges
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3 // Wider gradient for blurrier edges
        )
        gradient.addColorStop(0, particle.color) // Strong center
        gradient.addColorStop(0.3, `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, 0.5)`) // Mid fade
        gradient.addColorStop(1, `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, 0)`) // Completely transparent edge
        
        ctx.fillStyle = gradient
        ctx.shadowColor = `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, 0.8)`
        ctx.shadowBlur = 20 // Increased blur for softer edges
        ctx.fill()
        ctx.shadowBlur = 0
        
        // Randomly change direction at grid intersections (small chance)
        if (Math.random() < 0.005 && 
            Math.abs(particle.x % gridSize) < particle.speed && 
            Math.abs(particle.y % gridSize) < particle.speed) {
          particle.direction = particle.direction === 'horizontal' ? 'vertical' : 'horizontal'
          particle.positive = Math.random() > 0.5
          
          // Snap to grid
          particle.x = Math.round(particle.x / gridSize) * gridSize
          particle.y = Math.round(particle.y / gridSize) * gridSize
          
          // Reset trail position after direction change
          particle.lastTrailPos = { x: particle.x, y: particle.y }
        }
      })
      
      requestAnimationFrame(animate)
    }
    
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleLearnMoreClick = () => {
    const video = videoRef.current;
    if (video) {
      const requestFullScreen = video.requestFullscreen ||
        (video as HTMLIFrameElement & { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen ||
        (video as HTMLIFrameElement & { mozRequestFullScreen?: () => void }).mozRequestFullScreen ||
        (video as HTMLIFrameElement & { msRequestFullscreen?: () => void }).msRequestFullscreen;
      if (requestFullScreen) {
        requestFullScreen.call(video);
      }
    }
  };

  return (
    <div className="relative w-full min-h-[90vh] overflow-hidden bg-white">
      {/* SVG Grid Background - Two layered grids */}
      <div className="absolute inset-0 z-[1]">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Smaller background grid pattern */}
            <pattern
              id="smallGrid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="#e9e9e9"
                strokeWidth="0.5"
              />
            </pattern>
            
            {/* Main grid pattern */}
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="#d0e1f9"
                strokeWidth="0.7"
              />
            </pattern>
          </defs>
          
          {/* Background smaller grid */}
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
          
          {/* Foreground main grid */}
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Canvas for animated particles */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0"
        style={{ 
          backgroundColor: 'transparent', 
          pointerEvents: 'none',
          zIndex: 2
        }}
      />
      
      {/* Bottom fade-out gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-white to-transparent z-[3]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-10 max-w-[80%] mx-auto pt-40">
        <div className="text-center max-w-[900px] ">
          <h1 className="text-[64px] font-medium text-gray-900 leading-[1.1] tracking-tight">
            Empowering <span className="font-semibold text-blue-700">Automotive</span> Companies with{' '}
            <span className="relative inline-flex items-center">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-red-400/90 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 rounded-full bg-purple-400/90 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 rounded-full bg-green-400/90 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </span>{' '}
            <span className="font-semibold text-blue-700">Referral</span> Programs
          </h1>
          
          <p className="mt-6 text-xl text-black tracking-tighter">
            Leverage Carfilio&apos;s referral and rewards platform to drive leads for your dealership, with effortless tracking and management - all in one place.
          </p>
          
          <div className="mt-10 flex flex-row gap-3 justify-center w-full">
            <RainbowButton route="https://calendly.com/carfilio/30min" className="hover:text-xl transition-all duration-500 bg-blue-700" color="blue">
              Book a demo
            </RainbowButton>
            <WhiteButton onClick={handleLearnMoreClick}>
              Learn More
            </WhiteButton>
          </div>
          
          {/* Video showcase section */}
          <div className="mt-12 w-full max-w-[800px] mx-auto relative">
            {/* Neon gradient effect wrapper */}
            <div 
              className="relative z-10 size-full rounded-[20px] overflow-hidden shadow-xl"
              style={{
                '--border-size': '3px',
                '--border-radius': '20px',
                '--neon-first-color': '#2563eb', // Blue-600
                '--neon-second-color': '#60a5fa', // Blue-400
                '--card-content-radius': '17px',
                '--after-blur': '100px',
              } as React.CSSProperties}
            >
              <div
                className={cn(
                  "relative size-full min-h-[inherit] rounded-[var(--card-content-radius)] overflow-hidden",
                  "before:absolute before:-left-[var(--border-size)] before:-top-[var(--border-size)] before:-z-10 before:block",
                  "before:h-[calc(100%+calc(var(--border-size)*2))] before:w-[calc(100%+calc(var(--border-size)*2))] before:rounded-[var(--border-radius)] before:content-['']",
                  "before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:100%_200%]",
                  "before:animate-background-position-spin",
                  "after:absolute after:-left-[var(--border-size)] after:-top-[var(--border-size)] after:-z-10 after:block",
                  "after:h-[calc(100%+calc(var(--border-size)*2))] after:w-[calc(100%+calc(var(--border-size)*2))] after:rounded-[var(--border-radius)] after:blur-[var(--after-blur)] after:content-['']",
                  "after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_200%] after:opacity-80",
                  "after:animate-background-position-spin",
                )}
              > 
                <div className="relative pb-[56.25%] h-0">
                <div className="absolute  bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 blur-[60px] rounded-xl -z-10 opacity-100"></div>
                  <iframe 
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/videoseries?list=UU3AIxGVVCmOSxy9vQFQ_ffg" 
                    title="Carfilio Demo Video"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero