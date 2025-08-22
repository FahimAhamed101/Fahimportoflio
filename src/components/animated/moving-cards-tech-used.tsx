"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usedTechnologies } from "@/components/animated/tech";

export const InfiniteMovingCardsTechUsed = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: typeof usedTechnologies;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      const durations = {
        fast: isMobile ? "30s" : "20s",
        normal: isMobile ? "60s" : "40s",
        slow: isMobile ? "120s" : "80s",
      };
      containerRef.current.style.setProperty("--animation-duration", durations[speed]);
    }
  }, [speed, isMobile]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      // Clear any existing duplicates
      while (scrollerRef.current.children.length > items.length) {
        scrollerRef.current.removeChild(scrollerRef.current.lastChild!);
      }

      // Add new duplicates for seamless animation
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed, items.length]);

  useEffect(() => {
    addAnimation();
    
    return () => {
      if (scrollerRef.current) {
        while (scrollerRef.current.children.length > items.length) {
          scrollerRef.current.removeChild(scrollerRef.current.lastChild!);
        }
      }
    };
  }, [addAnimation, items.length]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden",
        "max-w-7xl mx-auto",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        "md:[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        "lg:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-3 py-4",
          "md:gap-4",
          start && "animate-scroll-x",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => {
          const isVercel = item.name === "Vercel";
          const isDarkLogo = item.name === "v0 (by Vercel)" || isVercel;
          const isDrizzleORM = item.name === "DrizzleORM";
          const isTwLogo = item.name === "Tailwind CSS";
          const isStorybook = item.name === "Storybook";
          const lightLogo = isStorybook || isTwLogo;
          const isShadcn = item.name === "Shadcn UI";
          const isAceternity = item.name === "Aceternity UI";

          return (
            <li
              key={`${item.name}-${idx}`}
              className={cn(
                "relative group flex items-center justify-center",
                "h-14 w-14 md:h-20 md:w-20 lg:h-24 lg:w-24",
                "transition-all duration-300 hover:scale-110 hover:z-30",
                {
                  "rounded-lg bg-neutral-900 dark:bg-neutral-100 p-2": isDarkLogo,
                  "rounded-lg": isDrizzleORM,
                  "p-1": isVercel,
                  "rounded-lg bg-neutral-300 p-2": isShadcn,
                  "rounded-lg bg-neutral-950 dark:bg-neutral-100 p-2": isAceternity || lightLogo,
                }
              )}
            >
              {/* Background for DrizzleORM */}
              {isDrizzleORM && (
                <div className="absolute inset-0 rounded-lg bg-lime-400" />
              )}
              
              {/* Tooltip on hover */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black text-white text-xs font-medium px-2 py-1 rounded-md whitespace-nowrap">
                  {item.name}
                </div>
                <div className="w-2 h-2 bg-black rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
              </div>

              <Image
                alt={`${item.name} Logo`}
                className={cn(
                  "w-auto h-full object-contain object-center transition-all duration-300",
                  {
                    "invert dark:invert-0": isDarkLogo,
                    "bg-neutral-950 invert-0 dark:bg-neutral-100 dark:invert": isShadcn,
                    "invert-0 dark:invert": isAceternity,
                    "aspect-square": isVercel,
                    "hue-rotate-180 invert dark:hue-rotate-0 dark:invert-0": lightLogo,
                    "z-30 rounded-md": isDrizzleORM,
                    "rounded-lg": !isDrizzleORM,
                  }
                )}
                src={item.icon}
                width={200}
                height={200}
                loading="lazy"
                quality={90}
              />
            </li>
          );
        })}
      </ul>

      <style jsx>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 0.75rem));
          }
        }
        
        .animate-scroll-x {
          animation: scroll-x var(--animation-duration, 40s) linear infinite;
          animation-direction: var(--animation-direction, forwards);
        }
        
        .animate-scroll-x:hover {
          animation-play-state: var(--hover-play-state, running);
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          @keyframes scroll-x {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50% - 0.5rem));
            }
          }
        }
      `}</style>
    </div>
  );
};