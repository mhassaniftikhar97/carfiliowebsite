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
                <a href="mailto:info@carfilio.com" className="text-gray-900">info@carfilio.com</a>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Phone Number</p>
                <a href="tel: +1 (212) 281 3007" className="text-gray-900">+1 (212) 281 3007</a>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Address</p>
                <p className="text-gray-900">320 Northern Blvd Suite 21<br />Great Neck, NY 11021</p>
              </div>
            </div>
          </div>

          {/* Right side - Get started */}
          <div className="space-y-6">
            <div className="text-right">
              <h2 className="text-2xl font-medium mb-3">Reimagining the future of<br />affiliate marketing</h2>
              <div className="flex gap-4 justify-end">
                <InteractiveHoverButton 
                  route="https://calendly.com/carfilio/30min" 
                  text="Get A Demo" 
                  color="blue"
                />
                <InteractiveHoverButton text="Login" color="dark-blue" route="https://app.carfilio.com"/>
              </div>
            </div>
          </div>
        </div>

        {/* Separator line */}
        <div className="mt-8 pt-4 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-400">
              © Carfilio. All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms-of-use" className="text-base text-gray-400 hover:text-gray-900">
               Terms Of Use
              </Link>
              <Link href="/terms" className="text-base text-gray-400 hover:text-gray-900">
                Carfilio Terms
              </Link>
              <Link href="/privacy-policy" className="text-base text-gray-400 hover:text-gray-900">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 