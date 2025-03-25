'use client'

import React, { useRef } from 'react'
import { LuNfc } from 'react-icons/lu'
import { IoPhonePortraitOutline } from 'react-icons/io5'

const HowItWorksDiagram = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const node2Ref = useRef<HTMLDivElement>(null)
  const in1Ref = useRef<HTMLDivElement>(null)
  
  return (
    <div ref={containerRef} className="flex flex-row rounded-3xl gap-16 p-16 w-full border-[1px] border-gray-200 relative">
        <div id="node1" className="w-1/3 flex flex-col rounded-2xl gap-5">
            <div id="node-2" ref={node2Ref} className="w-full bg-stone-100/30 border-[1px] border-gray-200 shadow-sm flex flex-col gap-5 items-center p-6 rounded-2xl">
                <div id="in-1" ref={in1Ref} className="bg-white  w-full overflow flex flex-row gap-3 items-center justify-center p-5 rounded-xl min-h-1/2 border-[1px] border-gray-200 shadow-sm shadow-black/10 shadow-blur-sm">
                    <h5 className="text-2xl text-black font-medium tracking-tighter text-center">Tap the keychain on Customer&apos;s phone</h5>
                    <div className="flex flex-row gap-6">
                    <LuNfc className="text-blue mx-auto mt-2" size={20}/>
                    <IoPhonePortraitOutline className="text-blue mx-auto mt-2 -ml-8" size={36}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorksDiagram