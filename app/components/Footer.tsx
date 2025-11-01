'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-8">
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
              <div className='socialIcon mt-5 flex justify-end'><a href="https://www.instagram.com/carfilio.inc" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" fill="#000" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a></div>
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
            <Link href="/website-terms-of-use" className="text-base text-gray-400 hover:text-gray-900">
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
      {/* Start of HubSpot Embed Code */}
      <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/146414530.js"></script>
      {/* End of HubSpot Embed Code */}
    </footer>
  )
}

export default Footer 
