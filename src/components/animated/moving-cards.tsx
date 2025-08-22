"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const addAnimation = () => {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
        
        // Duplicate items for seamless animation
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        // Set animation properties
        if (containerRef.current) {
          // Direction
          containerRef.current.style.setProperty(
            "--animation-direction",
            direction === "left" ? "forwards" : "reverse"
          );
          
          // Speed
          const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
          containerRef.current.style.setProperty("--animation-duration", duration);
        }
        
        setStart(true);
      }
    };

    addAnimation();
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden",
        "max-w-7xl mx-auto",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll-x",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[300px] max-w-full flex-shrink-0 rounded-2xl border border-gray-700/50 p-6 shadow-lg md:w-[350px]"
            style={{
              background: "linear-gradient(180deg, hsl(240 10% 14%) 0%, hsl(240 10% 12%) 100%)",
              backdropFilter: "blur(10px)",
            }}
            key={`${item.name}-${idx}`}
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            
            {/* Quote icon */}
            <div className="absolute -top-2 -left-2 h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
              <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <blockquote className="relative z-10">
              <span className="relative z-20 text-sm md:text-base font-normal leading-[1.6] text-gray-200">
                {item.quote}
              </span>
              
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {item.title}
                  </span>
                </div>
              </div>
            </blockquote>

            {/* Rating stars */}
            <div className="absolute bottom-4 right-4 flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-3 w-3 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1rem));
          }
        }
        
        .animate-scroll-x {
          animation: scroll-x var(--animation-duration, 40s) linear infinite;
          animation-direction: var(--animation-direction, forwards);
        }
        
        .animate-scroll-x:hover {
          animation-play-state: var(--hover-play-state, running);
        }
        
        @media (max-width: 768px) {
          .scroller {
            mask-image: linear-gradient(to right, transparent, white_5%, white_95%, transparent);
          }
          
          .animate-scroll-x {
            animation-duration: calc(var(--animation-duration, 40s) * 0.8);
          }
        }
        
        @media (max-width: 480px) {
          .animate-scroll-x {
            animation-duration: calc(var(--animation-duration, 40s) * 0.6);
          }
        }
      `}</style>
    </div>
  );
};