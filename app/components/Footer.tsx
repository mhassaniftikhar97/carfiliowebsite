'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8">
      <div className="w-[90%] mx-auto px-6">
        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left side - Logo and contact info */}
          <div className="space-y-6">
            <div>
              <Link href="/">
                <Image 
                  src="/assets/carfilio-logo-blue.png" 
                  alt="Carfilio Logo" 
                  width={150} 
                  height={40} 
                  className="mb-4"
                />
              </Link>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 mb-1">Email</p>
                <a href="mailto:hello@carfilio.com" className="text-gray-900">hello@carfilio.com</a>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Phone Number</p>
                <a href="tel:+12018953801" className="text-gray-900">+1 (201) 895-3801</a>
              </div>
            </div>
          </div>

          {/* Right side - Get started */}
          <div className="space-y-6">
            <div className="text-right">
              <h2 className="text-2xl font-medium mb-3">Reimagining the future of<br />affiliate marketing</h2>
              <div className="flex gap-4 justify-end">
                <InteractiveHoverButton 
                  route="/contact" 
                  text="Sign Up" 
                  color="blue"
                />
                <InteractiveHoverButton text="Login" color="dark-blue" route="https://app.carfilio.com"/>
              </div>
            </div>
          </div>
        </div>

        {/* Separator line */}
        <div className="mt-8 pt-4 border-t border-gray-200">
        </div>
      </div>
    </footer>
  )
}

export default Footer 