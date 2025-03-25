'use client';

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  route?: string;
  color?: 'black' | 'blue' | 'dark-blue';
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text, route, color = 'black', className, ...props }, ref) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (route) {
      router.push(route);
    }
    props.onClick?.(e);
  };
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold",
        color === 'dark-blue' ? 'bg-blue-700 text-white' : 'bg-background',
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className={`h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8] ${color === 'blue' ? 'bg-blue-700' : color === 'dark-blue' ? 'bg-white' : 'bg-primary'}`}></div>
        <span className={`inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 ${color === 'dark-blue' ? 'text-white' : ''}`}>
          {text}
        </span>
      </div>
      <div className={`absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 ${color === 'dark-blue' ? 'text-black' : 'text-primary-foreground'}`}>
        <span>{text}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
