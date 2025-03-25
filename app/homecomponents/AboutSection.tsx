'use client'

import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface FeatureCardProps {
  title: string
  description: string
  isActive: boolean
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, isActive }) => {
  return isActive ? (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-md">
      <h3 className="text-3xl text-left mb-3 font-medium tracking-tight">{title}</h3>
      <p className="text-white mt-2 text-left tracking-tight">
        {description}
      </p>
    </div>
  ) : (
    <div className="bg-white p-6 rounded-2xl border-[1.5px] shadow-sm border-gray-200">
      <h3 className="text-3xl font-medium text-left tracking-tight mb-3 text-gray-700">{title}</h3>
      <p className="text-gray-500 tracking-tight text-left">
        {description}
      </p>
    </div>
  )
}

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  
  const features = [
    {
      title: "More Referrals",
      description: "Customers can refer friends with a single tap, increasing the number of leads effortlessly. A streamlined referral process encourages users to participate, boosting engagement and dealership visibility."
    },
    {
      title: "Seamless Tracking",
      description: "Easily track referrals and payouts, ensuring that every lead is accounted for without hassle. The system provides real-time updates, allowing dealerships to monitor progress and identify top referrers."
    },
    {
      title: "Boosted Sales",
      description: "Convert high-quality referrals into actual sales, significantly increasing dealership revenue. Referrals tend to be highly motivated buyers, leading to improved conversion rates and a higher return on investment."
    },
    {
      title: "Less Admin Work",
      description: "Automated tracking and management reduce manual effort, allowing dealerships to focus on selling cars. Carfilio eliminates paperwork, spreadsheets, and manual follow-ups, making operations more efficient."
    },
    {
      title: "Rewards Management",
      description: "A streamlined rewards system ensures that both customers and dealerships benefit from successful referrals. The platform automates reward distribution, keeping customers engaged and motivated to bring in new leads."
    },
    {
      title: "Business Growth",
      description: "More leads, efficient tracking, and increased conversions result in long-term dealership success. By continuously generating new referrals, Carfilio helps dealerships build a strong and loyal customer base, paving the way for sustainable expansion."
    }
  ]

  useEffect(() => {
    if (!sectionRef.current || !cardsContainerRef.current) return
    
    const cardsWrapper = document.querySelector('.cards-wrapper')
    const cardsContainer = cardsContainerRef.current
    let isLocked = false
    let currentX = 0
    
    // Calculate the maximum scroll distance dynamically based on actual content width
    const containerWidth = cardsContainer.scrollWidth
    const visibleWidth = cardsWrapper?.clientWidth || 0
    // Ensure we can scroll through all cards by calculating the exact distance needed
    const maxX = -(containerWidth - visibleWidth + 40) // Add padding to ensure we reach the end
    
    // Function to update active card based on position
    const updateActiveCard = (x: number) => {
      // Calculate which card should be active based on scroll position
      const totalScrollableDistance = Math.abs(maxX)
      const scrollProgress = Math.abs(x) / totalScrollableDistance
      const activeCardIndex = Math.min(
        Math.floor(scrollProgress * features.length),
        features.length - 1
      )
      setActiveIndex(activeCardIndex)
    }
    
    // Function to apply transform to cards
    const moveCards = (x: number) => {
      gsap.to(cardsContainer, { 
        x, 
        duration: 0.5,
        ease: "power2.out",
        onUpdate: () => updateActiveCard(x)
      })
    }
    
    // Handle wheel events
    const handleWheel = (e: WheelEvent) => {
      if (!cardsWrapper) return
      
      // Get the anchor elements
      const scrollUpAnchor = document.getElementById('scroll-up-anchor')
      const scrollDownAnchor = document.getElementById('scroll-down-anchor')
      
      if (!scrollUpAnchor || !scrollDownAnchor) return
      
      const upRect = scrollUpAnchor.getBoundingClientRect()
      const downRect = scrollDownAnchor.getBoundingClientRect()
      
      // Determine which anchor to use based on scroll direction
      const isScrollingDown = e.deltaY > 0
      
      // For scrolling down, check if the down anchor is in view
      // For scrolling up, check if the up anchor is in view
      let isInView = false;
      if (isScrollingDown) {
        isInView = downRect.top >= 0 && downRect.top <= window.innerHeight;
      } else {
        isInView = upRect.top >= 0 && upRect.top <= window.innerHeight;
      }
      
      if (isInView) {
        // Check if we're at the boundaries of horizontal scroll
        const atStart = currentX >= 0 && e.deltaY < 0
        const atEnd = currentX <= maxX && e.deltaY > 0
        
        // If at boundaries, don't prevent default scroll
        if (atStart || atEnd) {
          // If we were locked, unlock
          if (isLocked) {
            document.body.style.overflow = ''
            isLocked = false
          }
          return
        }
        
        // Otherwise, prevent default scroll for horizontal movement
        e.preventDefault()
        
        if (!isLocked) {
          // Lock the page
          document.body.style.overflow = 'hidden'
          isLocked = true
        }
        
        // Calculate new horizontal position with increased sensitivity for faster scrolling
        const delta = e.deltaY > 0 ? 40 : -40
        currentX = Math.max(maxX, Math.min(0, currentX - delta))
        
        // Move cards horizontally
        moveCards(currentX)
      } else if (isLocked) {
        // If we're locked but not in view, unlock
        document.body.style.overflow = ''
        isLocked = false
      }
    }
    
    // Add event listener
    window.addEventListener('wheel', handleWheel, { passive: false })
    
    // Clean up
    return () => {
      window.removeEventListener('wheel', handleWheel)
      document.body.style.overflow = ''
    }
  }, [features.length])

  return (
    <div className="w-full mt-16 py-20 bg-white" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center">
          <h2 className="text-[48px] font-sans font-medium text-gray-900 leading-tight mb-6 tracking-tighter">
            What is Carfilio RMS?
          </h2>
          
          <p className="text-xl text-gray-700 max-w-[80%] text-just mx-auto">
            Carfilio RMS is an affiliate marketing keychain software designed for car dealerships. It streamlines customer referrals, making it easier for dealerships to track, manage, and reward successful leads.
          </p>
          
          {/* Anchor div for scrolling up - positioned above the GIF */}
          <div id="scroll-up-anchor" className="h-[1px] w-full"></div>
          
          {/* GIF animation */}
          <div className="mt-8 flex justify-center">
            <Image 
              src="/assets/anim.gif" 
              alt="Carfilio RMS Animation" 
              className="rounded-lg max-w-full h-auto"
              width={500}
              height={300}
            />
          </div>
          
          {/* Feature cards with horizontal scroll animation */}
          <div className="mt-16 overflow-hidden cards-wrapper">
            <div 
              className="flex flex-row gap-6 w-[2200px]" 
              ref={cardsContainerRef}
            >
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  isActive={activeIndex === index}
                />
              ))}
            </div>
          </div>
          
          {/* Anchor div for scrolling down - positioned below the cards */}
          <div id="scroll-down-anchor" className="h-[1px] w-full"></div>
        </div>
        
        {/* Removing this empty div completely */}
      </div>
    </div>
  )
}

export default AboutSection