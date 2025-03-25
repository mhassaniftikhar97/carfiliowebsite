'use client'

import React from 'react'
import Link from 'next/link'

const NewsletterSection = () => {
  return (
    <div className="w-full  py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#F8F9FF] rounded-2xl">
          {/* Left side */}
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-medium text-[#1E1B4B]">Join 2,000+ subscribers</h2>
            <p className="text-lg text-[#1E1B4B]/80">Stay in the loop with everything you need to know.</p>
          </div>

          {/* Right side */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="min-w-[300px] px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2.5 bg-[#1E1B4B] text-white rounded-lg hover:bg-[#1E1B4B]/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-2 text-sm text-[#1E1B4B]/60 text-center md:text-right">
          We care about your data in our{' '}
          <Link href="/privacy" className="underline hover:text-[#1E1B4B]">
            privacy policy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewsletterSection 