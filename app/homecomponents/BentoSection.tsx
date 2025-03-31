import React from 'react'
import { BentoDemo } from './BentoSectionAgain'

const BentoSection = () => {
  return (
    <div className="px-10 xl:px-[100px] items-center justify-center mt-10 xl:mt-24 flex flex-col gap-12">
      <div className="text-center xl:w-[85%]">
        <h3 className="text-5xl text-black font-medium tracking-tighter">Powered by Sound-Wave Proximity Technology</h3>
        <p className="text-xl text-black tracking-tighter mt-3">Transform your dealership&apos;s growth with our clean, modern, and sounds advanced without revealing the NFC layer.
        </p>
        </div>
      <BentoDemo />
    </div>
  )
}

export default BentoSection