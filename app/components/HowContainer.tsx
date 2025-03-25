'use client'

import React from 'react'


const HowContainer = () => {
  return (
    <div className="flex px-10 xl:px-24   items-center flex-col justify-center">
        <div className="text-center xl:w-[85%]">
          <h3 className="text-5xl text-black font-medium tracking-tighter">How It Works - A Quick Overview</h3>
          <p className="text-xl text-black tracking-tighter mt-3">Transforming every keychain tap into a sales opportunity, Carfilio automates customer registration, lead tracking, and affiliate referrals. Stay connected with real-time notifications and a seamless sales dashboard. </p>
        </div>
        <div className="relative w-full h-[300px] xl:h-[1000px]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'url(/assets/howit_works.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <svg 
              id="Layer_2" 
              data-name="Layer 2" 
              className="w-full h-full"
              viewBox="0 0 1276.16 577.77" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <style>
                  {`
                    .cls-1, .cls-2 {
                      fill: none;
                    }
                    .cls-2 {
                      stroke: #1d4dd8;
                      stroke-miterlimit: 10;
                      stroke-width: 2px;
                      stroke-dasharray: 1000;
                      animation: flow 6s linear infinite;
                    }
                    @keyframes flow {
                      0% {
                        stroke-dashoffset: 1000;
                      }
                      100% {
                        stroke-dashoffset: -1000;
                      }
                    }
                  `}
                </style>
              </defs>
              <g id="Layer_1-2" data-name="Layer 1">
                <rect className="cls-1" width="1276.16" height="577.77"/>
                <path className="cls-2" d="M383,72.8h74.55c9.84,0,17.81,7.97,17.81,17.81V232.98 M544.66,270.5h-51.55c-9.84,0-17.81-7.97-17.81-17.81V110.32 M894.66,72.8h-74.55c-9.84,0-17.81,7.97-17.81,17.81V232.98 M733,270.5h51.55c9.84,0,17.81-7.97,17.81-17.81V110.32 M383,511.5h74.55c9.84,0,17.81-7.97,17.81-17.81v-142.36 M544.66,313.8h-51.55c-9.84,0-17.81,7.97-17.81,17.81v142.36 M894.66,511.5h-74.55c-9.84,0-17.81-7.97-17.81-17.81v-142.36 M733,313.8h51.55c9.84,0,17.81,7.97,17.81,17.81v142.36 M189.32,130.47L189.3,151.42 M189.32,376.47L189.3,398.42 M1081.32,130.47L1081.3,151.42 M1081.32,376.47L1081.3,398.42"/>
              </g>
            </svg>
          </div>
        </div>
    </div>
  )
}

export default HowContainer