import React from 'react'
import Image from 'next/image'


export default function TrustedBy() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-24 gap-10">
      <h3 className="text-5xl text-black font-medium tracking-tighter">Trusted By</h3>
      <div className="flex flex-wrap items-center justify-center gap-10">
        <Image src="/assets/toyota.svg" alt="Toyota" width={48} height={48} className="h-12 w-auto" />
        <Image src="/assets/lexus.svg" alt="Lexus" width={48} height={48} className="h-12 w-auto" />
        <Image src="/assets/hyundai.svg" alt="Hyundai" width={48} height={48} className="h-12 w-auto" />
        <Image src="/assets/nissan.svg" alt="Nissan" width={48} height={48} className="h-12 w-auto" />
        <Image src="/assets/subaru.svg" alt="Subaru" width={48} height={48} className="h-12 w-auto" />
      </div>
    </div>
  );
}