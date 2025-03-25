import LogoSlider from '@/components/LogoSlider'
import React from 'react'

const MarqueeComponent = () => {
  return (
    <div className="flex flex-col gap-5 py-36">
        <h5 className="text-center xl:text-5xl font-semibold tracking-tighter text-black">Trusted by Automotive Dealerships</h5>
        <LogoSlider />
    </div>
  )
}

export default MarqueeComponent