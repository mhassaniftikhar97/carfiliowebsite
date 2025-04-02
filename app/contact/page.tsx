'use client'

import React, { useState } from 'react'
import Header from '../components/Header'

const Page = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dealerName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    dealerWebsite: '',
    leadsEmail: '',
    creditFinanceUrl: '',
    dealerContactFirstName: '',
    dealerContactLastName: '',
    dealerContactPhone: '',
    dealerContactEmail: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNext = () => {
    setStep(step + 1)
  }

  const handlePrevious = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create URLSearchParams instead of FormData
    const params = new URLSearchParams()
    params.append('entry.210890285', formData.firstName)
    params.append('entry.949082674', formData.lastName)
    params.append('entry.1646445567', formData.dealerName)
    params.append('entry.717705251', formData.streetAddress)
    params.append('entry.1985920442', formData.city)
    params.append('entry.1206533804', formData.state)
    params.append('entry.1956419970', formData.zipCode)
    params.append('entry.1761899044', formData.dealerWebsite)
    params.append('entry.1331474145', formData.leadsEmail)
    params.append('entry.606810967', formData.creditFinanceUrl)
    params.append('entry.713110998', formData.dealerContactFirstName)
    params.append('entry.879856888', formData.dealerContactLastName)
    params.append('entry.520870026', formData.dealerContactPhone)
    params.append('entry.1146624318', formData.dealerContactEmail)

    // Submit the form data
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSc3vGoTkPOVE9MYtTy6Jr8o3aC2TMicb_06zyQDvAbGKRE1qA/formResponse?', {
      method: 'POST',
      mode: 'no-cors', // This is important for CORS
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString()
    })
    .then(() => {
      // Since we're using no-cors, we won't get a response
      alert('Form submitted successfully!')
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        dealerName: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        dealerWebsite: '',
        leadsEmail: '',
        creditFinanceUrl: '',
        dealerContactFirstName: '',
        dealerContactLastName: '',
        dealerContactPhone: '',
        dealerContactEmail: ''
      })
      setStep(1)
    })
    .catch(error => {
      console.error('Error:', error)
      alert('Error submitting form. Please try again.')
    })
  }

  return (
    <>
    <Header />
    <div className="max-w-2xl mt-32 mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Get Started</h1>
      <p className="text-center mb-8">Fill out the form below to get started with Carfilio!</p>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <div className="flex">
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First" 
                  className="border rounded w-full py-2 px-3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last" 
                  className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">Dealer Information</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Dealer Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="dealerName"
                value={formData.dealerName}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Dealer Address <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                placeholder="Street Address" 
                className="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              <div className="flex">
                <input 
                  type="text" 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City" 
                  className="border rounded w-full py-2 px-3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <input 
                  type="text" 
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State" 
                  className="border rounded w-full py-2 px-3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <input 
                  type="text" 
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  placeholder="ZIP Code" 
                  className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Dealer Website <span className="text-red-500">*</span></label>
              <input 
                type="url" 
                name="dealerWebsite"
                value={formData.dealerWebsite}
                onChange={handleInputChange}
                placeholder="https://" 
                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Leads Email address <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                name="leadsEmail"
                value={formData.leadsEmail}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Credit/Finance URL</label>
              <input 
                type="url" 
                name="creditFinanceUrl"
                value={formData.creditFinanceUrl}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
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
                <input 
                  type="text" 
                  name="dealerContactFirstName"
                  value={formData.dealerContactFirstName}
                  onChange={handleInputChange}
                  placeholder="First" 
                  className="border rounded w-full py-2 px-3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <input 
                  type="text" 
                  name="dealerContactLastName"
                  value={formData.dealerContactLastName}
                  onChange={handleInputChange}
                  placeholder="Last" 
                  className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Dealer Contact Phone <span className="text-red-500">*</span></label>
              <input 
                type="tel" 
                name="dealerContactPhone"
                value={formData.dealerContactPhone}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Dealer Contact Email <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                name="dealerContactEmail"
                value={formData.dealerContactEmail}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
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