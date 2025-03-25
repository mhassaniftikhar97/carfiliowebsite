'use client'

import React from 'react'
import Image from 'next/image'

const Reviews = () => {
  return (
    <div id="reviews" className="flex flex-col items-center justify-center gap-12 py-24">
      <div className="text-center w-[85%]">
        <h3 className="text-5xl text-black font-medium tracking-tighter">What Our Customers Say</h3>
        <p className="text-xl text-black tracking-tighter mt-3">Hear from dealerships who have transformed their sales process with Carfilio.</p>
      </div>
      <div className="flex flex-row gap-8 w-[85%] justify-center">
        <div className="flex flex-col gap-4 p-8 rounded-2xl border-[1px] border-gray-200 w-1/3">
          <div className="flex flex-row gap-4 items-center">
            <Image 
              src="/assets/review1.jpg" 
              alt="Review 1" 
              width={48} 
              height={48} 
              className="rounded-full w-12 h-12 object-cover"
            />
            <div>
              <h4 className="text-lg font-medium">John Smith</h4>
              <p className="text-sm text-gray-500">Sales Manager at AutoMax</p>
            </div>
          </div>
          <p className="text-base text-black">&quot;Carfilio has revolutionized how we handle customer referrals. The automated tracking and instant notifications have helped us close more deals faster.&quot;</p>
        </div>
        <div className="flex flex-col gap-4 p-8 rounded-2xl border-[1px] border-gray-200 w-1/3">
          <div className="flex flex-row gap-4 items-center">
            <Image 
              src="/assets/review2.jpg" 
              alt="Review 2" 
              width={48} 
              height={48} 
              className="rounded-full w-12 h-12 object-cover"
            />
            <div>
              <h4 className="text-lg font-medium">Sarah Johnson</h4>
              <p className="text-sm text-gray-500">Owner at CarWorld</p>
            </div>
          </div>
          <p className="text-base text-black">&quot;The simplicity of tapping a keychain to register customers is genius. Our sales team loves it, and our customers are impressed by the technology.&quot;</p>
        </div>
        <div className="flex flex-col gap-4 p-8 rounded-2xl border-[1px] border-gray-200 w-1/3">
          <div className="flex flex-row gap-4 items-center">
            <Image 
              src="/assets/review3.jpg" 
              alt="Review 3" 
              width={48} 
              height={48} 
              className="rounded-full w-12 h-12 object-cover"
            />
            <div>
              <h4 className="text-lg font-medium">Mike Davis</h4>
              <p className="text-sm text-gray-500">Director at Elite Motors</p>
            </div>
          </div>
          <p className="text-base text-black">&quot;The analytics and tracking features have given us incredible insights into our sales funnel. We&apos;ve seen a 40% increase in referral sales since implementing Carfilio.&quot;</p>
        </div>
      </div>
    </div>
  )
}

export default Reviews
