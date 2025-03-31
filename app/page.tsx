"use client";
import React from "react";
import Header from "./components/Header";
import Hero from "./homecomponents/Hero";



import MeetTeam from "./homecomponents/MeetTeam";

import MarqueeComponent from "./homecomponents/MarqueeComponent";


import HowContainer from "./components/HowContainer";

import { Separator } from "@/components/ui/separator";
import BentoSection from "./homecomponents/BentoSection";
import { MarqueeDemo } from "./components/MarqueeDemo";
import ContactContainer from "./components/ContactContainer";
import WhyCarfilioSection from "./homecomponents/WhyCarfilioSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MarqueeComponent />
      <div className="w-full pb-5 xl:pt-0 xl:pb-12 flex items-center justify-center text-center">
        <Separator className="w-[90%] py-0"/>
      </div>
      <div id="how-it-works">
      <HowContainer />
      </div>
     <WhyCarfilioSection />
      <div>
        <div className="bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
          <BentoSection />
        </div>
      </div>
      <div id="reviews" className="py-10 xl:py-36 flex flex-col gap-5 items-center justify-center">
        <div className="text-center w-[85%]">
          <h3 className="text-5xl text-black font-medium tracking-tighter">Here&apos;s What Our Clients Say About Us</h3>
          <p className="text-xl text-black tracking-tighter mt-3">Carfilio is transforming the way dealerships connect with customers—seamless, efficient, and built for success. Our clients can&apos;t stop raving about the impact it&apos;s had on their sales and referrals!</p>
          <MarqueeDemo />
        </div>
        
      </div>
      <div id="meet-the-team">
      <MeetTeam />
      </div>
      <ContactContainer />
    </>
  );
}
