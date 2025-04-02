'use client'

import React, { useState } from 'react'
import Header from '../components/Header'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import { WhiteButton } from '@/components/magicui/white-button'
import { RainbowButton } from '@/components/magicui/rainbow-button'
import Link from 'next/link'

const Page = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dealerName: '',
    dealerAddress: '',
    city: '',
    state: '',
    zipCode: '',
    dealerWebsite: '',
    leadsEmail: '',
    creditFinanceUrl: '',
    dealerTaxId: '',
    dealerLicense: '',
    dealerLogo: '',
    dealerContactFirstName: '',
    dealerContactLastName: '',
    dealerContactPhone: '',
    dealerContactEmail: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNext = () => {
    setStep(2)
  }

  const handlePrevious = () => {
    setStep(1)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submitForm()
  }

  const submitForm = async () => {
    try {
      const params = new URLSearchParams()
      Object.entries(formData).forEach(([key, value]) => {
        if (value) {
          params.append(key, value)
        }
      })

      const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSc3vGoTkPOVE9MYtTy6Jr8o3aC2TMicb_06zyQDvAbGKRE1qA/formResponse?' + params.toString(), {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })

      // Since we're using no-cors mode, we can't check the response
      alert('Form submitted successfully!')
      setFormData({
        firstName: '',
        lastName: '',
        dealerName: '',
        dealerAddress: '',
        city: '',
        state: '',
        zipCode: '',
        dealerWebsite: '',
        leadsEmail: '',
        creditFinanceUrl: '',
        dealerTaxId: '',
        dealerLicense: '',
        dealerLogo: '',
        dealerContactFirstName: '',
        dealerContactLastName: '',
        dealerContactPhone: '',
        dealerContactEmail: '',
      })
      setStep(1)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting the form. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Fill out the form below to get started with Carfilio&apos;s referral marketing software.
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-8">
          {step === 1 ? (
            <>
              <div className="space-y-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="entry.210890285"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="entry.949082674"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="dealerName" className="block text-sm font-medium text-gray-700">
                    Dealer Name
                  </label>
                  <input
                    type="text"
                    id="dealerName"
                    name="entry.1646445567"
                    value={formData.dealerName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="dealerAddress" className="block text-sm font-medium text-gray-700">
                    Dealer Address
                  </label>
                  <input
                    type="text"
                    id="dealerAddress"
                    name="entry.717705251"
                    value={formData.dealerAddress}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="entry.1985920442"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="entry.1206533804"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="entry.1956419970"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="dealerWebsite" className="block text-sm font-medium text-gray-700">
                    Dealer Website
                  </label>
                  <input
                    type="url"
                    id="dealerWebsite"
                    name="entry.1761899044"
                    value={formData.dealerWebsite}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="leadsEmail" className="block text-sm font-medium text-gray-700">
                    Leads Email address
                  </label>
                  <input
                    type="email"
                    id="leadsEmail"
                    name="entry.1331474145"
                    value={formData.leadsEmail}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="creditFinanceUrl" className="block text-sm font-medium text-gray-700">
                    Credit/Finance URL
                  </label>
                  <input
                    type="url"
                    id="creditFinanceUrl"
                    name="entry.606810967"
                    value={formData.creditFinanceUrl}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <InteractiveHoverButton
                  onClick={handleNext}
                  color="blue"
                  text="Next"
                />
              </div>
            </>
          ) : (
            <>
              <div className="space-y-6">
                <div>
                  <label htmlFor="dealerTaxId" className="block text-sm font-medium text-gray-700">
                    Dealer Tax ID
                  </label>
                  <input
                    type="file"
                    id="dealerTaxId"
                    name="entry.879856888"
                    onChange={handleInputChange}
                    className="mt-1 block w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="dealerLicense" className="block text-sm font-medium text-gray-700">
                    Dealer License
                  </label>
                  <input
                    type="file"
                    id="dealerLicense"
                    name="entry.520870026"
                    onChange={handleInputChange}
                    className="mt-1 block w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="dealerLogo" className="block text-sm font-medium text-gray-700">
                    Dealer Logo
                  </label>
                  <input
                    type="file"
                    id="dealerLogo"
                    name="entry.1146624318"
                    onChange={handleInputChange}
                    className="mt-1 block w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="dealerContactFirstName" className="block text-sm font-medium text-gray-700">
                    Dealer Contact First Name
                  </label>
                  <input
                    type="text"
                    id="dealerContactFirstName"
                    name="entry.713110998"
                    value={formData.dealerContactFirstName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="dealerContactLastName" className="block text-sm font-medium text-gray-700">
                    Dealer Contact Last Name
                  </label>
                  <input
                    type="text"
                    id="dealerContactLastName"
                    name="entry.879856888"
                    value={formData.dealerContactLastName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="dealerContactPhone" className="block text-sm font-medium text-gray-700">
                    Dealer Contact Phone
                  </label>
                  <input
                    type="tel"
                    id="dealerContactPhone"
                    name="entry.520870026"
                    value={formData.dealerContactPhone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="dealerContactEmail" className="block text-sm font-medium text-gray-700">
                    Dealer Contact Email
                  </label>
                  <input
                    type="email"
                    id="dealerContactEmail"
                    name="entry.1146624318"
                    value={formData.dealerContactEmail}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <InteractiveHoverButton
                  onClick={handlePrevious}
                  text="Previous"
                />
                <InteractiveHoverButton
                  onClick={handleFormSubmit}
                  color="blue"
                  text="Submit"
                />
              </div>
            </>
          )}
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            By submitting this form, you agree to our{' '}
            <Link href="/terms-and-conditions" className="text-blue-600 hover:text-blue-800">
              Terms and Conditions
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page