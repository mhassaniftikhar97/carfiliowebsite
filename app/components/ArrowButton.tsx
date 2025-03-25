'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ArrowButtonProps {
  route: string;
  text: string;
  variant?: 'white' | 'black';
}

const ArrowButton = ({ route, text, variant = 'white' }: ArrowButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [buttonWidth, setButtonWidth] = useState<number | null>(null);

  useEffect(() => {
    // Set initial width after component mounts
    const updateWidth = () => {
      if (buttonRef.current) {
        const width = buttonRef.current.getBoundingClientRect().width;
        setButtonWidth(width);
      }
    };
    
    // Initial measurement
    updateWidth();
    
    // Add resize listener to handle window size changes
    window.addEventListener('resize', updateWidth);
    
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [text]);

  return (
    <div id="buttons container" className="mt-7 flex flex-row">
      <Link href={route}>
        <div
          ref={buttonRef}
          id="button"
          className={`group h-[44px] flex-row font-sans text-md py-[3px] px-[3px] font-regular rounded-full flex items-center justify-between transition-all border-black duration-500 ease-in-out ${
            variant === 'white' 
              ? 'bg-white hover:bg-white text-slate-800' 
              : 'bg-black hover:bg-black text-white'
          }`}
          style={{
            width: buttonWidth ? `${buttonWidth}px` : 'auto',
            minWidth: 'fit-content',
          }}
          onMouseEnter={() => {
            if (buttonRef.current && buttonWidth) {
              buttonRef.current.style.width = `${buttonWidth + 32}px`;
            }
          }}
          onMouseLeave={() => {
            if (buttonRef.current && buttonWidth) {
              buttonRef.current.style.width = `${buttonWidth}px`;
            }
          }}
        >
          <div className="ml-3 mr-3 text-md whitespace-nowrap">
            {text}
          </div>
          <div className={`rounded-full h-[38px] w-[38px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45 ${
            variant === 'white' ? 'bg-black' : 'bg-white'
          }`}>
            <Image 
              src={variant === 'white' ? "/assets/buttonarrowwhite.svg" : "/assets/buttonarrow.svg"}
              alt="Button Arrow"
              width={24}
              height={24}
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ArrowButton