"use client";

import Link from "next/link";
import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
}

const GenericIcon = ({ size = "md" }: { size?: "sm" | "md" | "lg" | "xl" | "hero" }) => {
  const dimensions = {
    sm: { size: 8 },
    md: { size: 10 },
    lg: { size: 12 },
    xl: { size: 16 },
    hero: { size: 20 }
  };
  
  const iconSize = dimensions[size].size;
  
  return (
    <div 
      className={`w-${iconSize} h-${iconSize} bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg flex items-center justify-center`}
      style={{ 
        width: `${iconSize * 4}px`, 
        height: `${iconSize * 4}px` 
      }}
    >
      <div className="w-1/2 h-1/2 bg-white rounded-sm opacity-90"></div>
    </div>
  );
};

export const Logo = ({ className = "", showText = false, size = "md" }: LogoProps) => {
  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
    hero: "text-4xl"
  };
  
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div>
        <GenericIcon size={size} />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span 
            className={`font-bold tracking-tight text-foreground ${textSizes[size]}`}
            style={{ fontFamily: 'monospace, "SF Mono", "Monaco", "Inconsolata", "Fira Code", "Droid Sans Mono", monospace' }}
          >
            Eva Design
          </span>
          {size !== "sm" && (
            <span className="text-xs text-muted-foreground font-medium tracking-wide">
              Modern Business Website
            </span>
          )}
        </div>
      )}
    </div>
  );
};
