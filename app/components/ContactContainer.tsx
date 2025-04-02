'use client'

import React from 'react'
import Link from 'next/link'
import { Ripple } from '@/components/magicui/ripple'

const ContactContainer = () => {
  return (
    <div className="m-10 rounded-3xl py-24 relative overflow-hidden bg-blue-600/90">
      {/* Ripple effect background */}
      <Ripple 
        className="z-0 scale-125" 
        mainCircleSize={160}
        mainCircleOpacity={0.4}
        numCircles={18}
      />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side */}
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl text-center xl:text-left font-medium text-white">Join Our Newsletter</h2>
            <p className="text-lg text-center xl:text-left text-white">Stay in the loop with everything you need to know.</p>
          </div>

          {/* Right side */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="min-w-[300px] px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2.5 bg-stone-200 text-black rounded-lg hover:bg-white transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-2 text-sm text-white text-center md:text-right">
          We care about your data in our{' '}
          <Link href="/privacy-policy" className="underline hover:text-[#1E1B4B]">
            privacy policy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactContainer