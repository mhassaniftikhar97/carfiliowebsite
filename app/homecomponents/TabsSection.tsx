import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  // Define tabs array
  const tabs = [
    {
      title: "Dealer&apos;s Dashboard",
      subTabs: ['Dashboard', 'Users/Salesmen', 'Affiliates', 'KeyChains', 'Payouts'],
      images: ['/assets/bentofirst.png', '/assets/bentosecond.png', '/assets/bentothird.png'],
    },
    {
      title: "Salesman&apos;s Dashboard",
      subTabs: ['Dashboard', 'Affiliates', 'Leads', 'Keywords'],
      images: ['/assets/bentofirst.png', '/assets/bentosecond.png', '/assets/bentothird.png'],
    },
    {
      title: "Customer&apos;s Dashboard",
      subTabs: ['Dashboard', 'Leads', ],
      images: ['/assets/bentofirst.png', '/assets/bentosecond.png', '/assets/bentothird.png'],
    },
  ];

  // Initialize tabRefs array
  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, tabs.length);
  }, [tabs.length]);

  // Update indicator position whenever active tab changes
  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const tabElement = tabRefs.current[activeTab];
      const containerElement = tabsContainerRef.current;
      
      if (tabElement && containerElement) {
        // Calculate position relative to the container
        const containerTop = containerElement.getBoundingClientRect().top;
        const tabTop = tabElement.getBoundingClientRect().top;
        const tabHeight = tabElement.offsetHeight;
        
        // Set position relative to container
        const relativePosition = (tabTop - containerTop) + (tabHeight / 2);
        setIndicatorPosition(relativePosition);
      }
    }
  }, [activeTab]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setActiveSubTab(0); // Reset to first subtab
  };

  const handleSubTabClick = (index: number) => {
    setActiveSubTab(index);
  };

  return (
    <div className="p-10">
      <div className="bg-white border-[1.5px] border-gray-200 rounded-2xl p-6">
        <div className="flex ">
          {/* Left section with vertical tabs */}
          <div className="w-2/5 p-8 relative flex flex-col pr-8">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200">
                {indicatorPosition > 0 && (
                  <div 
                    className="absolute w-3 h-3 rounded-full bg-blue-700 transition-all duration-300" 
                    style={{ 
                      top: `${indicatorPosition}px`,
                      left: '0',
                      transform: 'translate(-48%, -48%)'
                    }}
                  ></div>
                )}
              </div>
              <div 
                ref={tabsContainerRef}
                className="flex flex-col space-y-4 pl-4"
              >
                {tabs.map((tab, tabIndex) => (
                  <div key={tabIndex} className="relative">
                    <h3
                      ref={(el: HTMLHeadingElement | null) => {
                        tabRefs.current[tabIndex] = el;
                      }}
                      className={`cursor-pointer font-medium text-4xl transition-colors ${
                        activeTab === tabIndex ? 'text-black' : 'text-gray-400'
                      }`}
                      onClick={() => handleTabClick(tabIndex)}
                    >
                      {tab.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Subtabs section below the line */}
            <div className="mt-12">
              <div className="flex flex-wrap gap-4">
                {tabs[activeTab].subTabs.map((subTab, subTabIndex) => (
                  <motion.div
                    key={subTabIndex}
                    className={`relative overflow-hidden rounded-full cursor-pointer`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSubTabClick(subTabIndex)}
                  >
                    {/* Static background gradient */}
                    <div
                      className={`absolute inset-0 ${
                        activeSubTab === subTabIndex
                          ? 'bg-gradient-to-r from-blue-800 to-cyan-600'
                          : 'bg-gray-100'
                      }`}
                    ></div>
                    
                    {/* Animated gradient overlay */}
                    {activeSubTab === subTabIndex && (
                      <div
                        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 animate-gradient"
                        style={{
                          backgroundImage: 'linear-gradient(90deg, #1e40af, #60a5fa, #1e40af)',
                          backgroundSize: '200% 100%',
                        }}
                      ></div>
                    )}
                    
                    {/* Button text */}
                    <span className={`relative z-10 block px-4 py-1.5 ${
                      activeSubTab === subTabIndex ? 'text-white' : 'text-gray-600'
                    }`}>
                      {subTab}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right section with content only */}
          <div className="w-3/5 p-2">
            <div className="flex justify-center items-center h-full">
              <Image 
                src={tabs[activeTab].images[activeSubTab]} 
                alt={`${tabs[activeTab].title} - ${tabs[activeTab].subTabs[activeSubTab]}`} 
                width={800}
                height={600}
                className="rounded-xl w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS animation for gradient movement */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TabsSection;