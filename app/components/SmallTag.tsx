import React from 'react'

interface SmallTagProps {
  text: string;
  variant?: 'white' | 'black' | 'red';
}

const SmallTag = ({ text, variant = 'white' }: SmallTagProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'black':
        return 'bg-black text-white border-black';
      case 'red':
        return 'bg-red-600 text-white border-red-600';
      case 'white':
      default:
        return 'bg-white text-gray-900 border-gray-200';
    }
  };

  const getDotStyles = () => {
    switch (variant) {
      case 'black':
        return 'bg-white';
      case 'red':
        return 'bg-white';
      case 'white':
      default:
        return 'bg-black/10';
    }
  };

  return (
    <div className={`h-fit w-fit px-2 items-center py-1 rounded-full border-[1px] flex flex-row gap-2 ${getVariantStyles()}`}>
        <div className={`rounded-full h-3 w-3 ${getDotStyles()}`}></div>
        <p className="text-xs">{text || 'Test span'}</p>
    </div>
  )
}

export default SmallTag