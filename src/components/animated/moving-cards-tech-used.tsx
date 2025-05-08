"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Make sure you have this utility
import { usedTechnologies } from "@/components/animated/tech"; // Adjust path as needed

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

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const durations = {
        fast: "20s",
        normal: "40s",
        slow: "80s",
      };
      containerRef.current.style.setProperty("--animation-duration", durations[speed]);
    }
  };

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      // Clear any existing duplicates
      while (scrollerRef.current.children.length > items.length) {
        scrollerRef.current.removeChild(scrollerRef.current.lastChild!);
      }

      // Add new duplicates
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  useEffect(() => {
    addAnimation();
    
    // Cleanup function
    return () => {
      if (scrollerRef.current) {
        while (scrollerRef.current.children.length > items.length) {
          scrollerRef.current.removeChild(scrollerRef.current.lastChild!);
        }
      }
    };
  }, [direction, speed, items.length]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
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
                "relative h-[60px] md:h-[80px]",
                {
                  "rounded-lg bg-neutral-900 dark:bg-neutral-100": isDarkLogo,
                  "inset-0 rounded-lg": isDrizzleORM,
                  "pl-2 pr-1": isVercel,
                  "rounded-lg bg-neutral-300": isShadcn,
                  "rounded-lg bg-neutral-950 dark:bg-neutral-100": isAceternity || lightLogo,
                }
              )}
            >
              {isDrizzleORM && (
                <div className="absolute inset-0 rounded-lg bg-lime-400" />
              )}
              <Image
                alt={`${item.name} Logo`}
                className={cn(
                  "relative h-[60px] w-auto flex-shrink-0 overflow-hidden object-cover object-center md:h-[80px] md:min-h-[80px] md:w-auto",
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
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};