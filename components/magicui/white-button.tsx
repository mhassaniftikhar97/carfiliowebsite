'use client';

import React from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface WhiteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  route?: string;
}

export const WhiteButton = React.forwardRef<
  HTMLButtonElement,
  WhiteButtonProps
>(({ children, className, route, ...props }, ref) => {
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
      onClick={handleClick}
      className={cn(
        "group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl bg-gray-100/50 border border-gray-200 px-8 py-2 font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});

WhiteButton.displayName = "WhiteButton";