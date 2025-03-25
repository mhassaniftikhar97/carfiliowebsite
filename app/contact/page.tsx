'use client'

import React, { useState } from 'react'
import Header from '../components/Header'


const Page = () => {
  const [step, setStep] = useState(1)

  const handleNext = () => {
    setStep(step + 1)
  }

  const handlePrevious = () => {
    setStep(step - 1)
  }

  return (
    <>
    <Header />
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Get Started</h1>
      <p className="text-center mb-8">Fill out the form below to get started with Carfilio!</p>
      <form>
        {step === 1 && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <div className="flex">
                <input type="text" placeholder="First" className="border rounded w-full py-2 px-3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Last" className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">Dealer Information</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Dealer Name <span className="text-red-500">*</span></label>
              <input type="text" className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Dealer Address <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Street Address" className="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <div className="flex">
                <input type="text" placeholder="City" className="border rounded w-full py-2 px-3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="State" className="border rounded w-full py-2 px-3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="ZIP Code" className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Dealer Website <span className="text-red-500">*</span></label>
              <input type="url" placeholder="https://" className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Leads Email address <span className="text-red-500">*</span></label>
              <input type="email" className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Credit/Finance URL</label>
              <input type="url" className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Dealer Tax ID <span className="text-red-500">*</span></label>
              <input type="file" className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <p className="text-sm text-gray-500">Max. file size: 256 MB.</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Dealer License <span className="text-red-500">*</span></label>
              <input type="file" className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <p className="text-sm text-gray-500">Max. file size: 256 MB.</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Dealer Logo <span className="text-red-500">*</span></label>
              <input type="file" className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <p className="text-sm text-gray-500">Max. file size: 256 MB.</p>
            </div>
            <button type="button" onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded">Next</button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Dealer Contact <span className="text-red-500">*</span></label>
              <div className="flex">
                <input type="text" placeholder="First" className="border rounded w-full py-2 px-3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Last" className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Dealer Contact Phone <span className="text-red-500">*</span></label>
              <input type="tel" className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Dealer Contact Email <span className="text-red-500">*</span></label>
              <input type="email" className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={handlePrevious} className="border border-gray-300 text-gray-700 py-2 px-4 rounded">Previous</button>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
            </div>
          </>
        )}
      </form>
    </div>
    </>
  )
}

export default Page