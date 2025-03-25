'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import logo from '../../public/assets/carfilio-logo-blue.png'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      
      // Make header visible when scrolling up or at the top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    router.push('/')
    // Wait for navigation to complete before scrolling
    setTimeout(() => {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-[1000] xl:hidden flex flex-col items-center justify-center">
          <div className="flex flex-col items-center space-y-8">
            <Link href="/" onClick={handleMenuClose} className="text-gray-600 hover:text-black text-2xl font-medium">About</Link>
            <Link href="#how-it-works" onClick={(e) => handleHashLinkClick(e, '#how-it-works')} className="text-gray-600 hover:text-black text-2xl">How It Works</Link>
            <Link href="#meet-the-team" onClick={(e) => handleHashLinkClick(e, '#meet-the-team')} className="text-gray-600 hover:text-black text-2xl">Team</Link>
            <Link href="#reviews" onClick={(e) => handleHashLinkClick(e, '#reviews')} className="text-gray-600 hover:text-black text-2xl">Reviews</Link>
            <div className="pt-4 flex flex-row gap-4" onClick={handleMenuClose}>
              <InteractiveHoverButton text="Get Started" color="blue" route="/contact"/>
              <InteractiveHoverButton text="Login" color="dark-blue" route="https://app.carfilio.com"/>
            </div>
          </div>
        </div>
      )}

      <div 
        className={`fixed top-0 left-0 right-0 z-[999] transition-transform duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex items-center justify-center py-5">
          <div className="flex w-[90%] xl:w-[65%] flex:row border-black/5 border-[1.5px] shadow-xl rounded-full justify-between py-3 px-4 items-center backdrop-blur-md bg-white/70">
            <Image src={logo} height={30} alt="logo" />
            <div className="hidden xl:flex flex-row gap-12">
              <Link href="/" className="text-gray-400 hover:text-black font-medium text-lg">About</Link>
              <Link href="#how-it-works" onClick={(e) => handleHashLinkClick(e, '#how-it-works')} className="text-gray-400 hover:text-black text-lg">How It Works</Link>
              <Link href="#meet-the-team" onClick={(e) => handleHashLinkClick(e, '#meet-the-team')} className="text-gray-400 hover:text-black text-lg">Team</Link>
              <Link href="#reviews" onClick={(e) => handleHashLinkClick(e, '#reviews')} className="text-gray-400 hover:text-black text-lg">Reviews</Link>
            </div>
            <div className="hidden xl:flex flex-row gap-2">
              <InteractiveHoverButton text="Get Started" color="blue" route="/contact"/>
              <InteractiveHoverButton text="Login" color="dark-blue" route="https://app.carfilio.com"/>
            </div>
            {/* Hamburger Menu Button */}
            <button 
              className="xl:hidden text-gray-400 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header