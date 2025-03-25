'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const LogoSlider = () => {
  // Logo files as specified in the requirements
  const logos = [
    '/assets/toyota.png',
    '/assets/hyundai.png',
    '/assets/nissan.png',
    '/assets/mazda.png',
    '/assets/ford.png',
    '/assets/subaru.svg',
    '/assets/hyundai.svg',
    '/assets/lexus.svg',
    '/assets/nissan.svg',
  ];

  return (
    <div className="w-full py-8 overflow-hidden bg-white">
      <Marquee
        speed={40}
        gradient={false}
        pauseOnHover={false}
        pauseOnClick={false}
        direction="left"
        loop={0} // Infinite loop
      >
        {logos.map((logo, index) => (
          <div key={index} className="mx-8">
            <Image
              src={logo}
              alt={`Partner logo ${index}`}
              width={90}
              height={45}
              className="h-9 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoSlider;