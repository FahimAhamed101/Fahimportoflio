"use client";

import { Badge } from "@/components/ui/badge";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { buttonVariants } from "@components/ui/button";
import Image from "next/image"; 
import LaptopSVG from "/public/fahimred.jpg";
import { useTheme } from "next-themes";

import fiverrimage from "/public/SellerDashboard.png";
 export  const experiencesData = [
    
 
    {
      title: "Full-Stack Developer",
      location: "Kushtia, BD",link: "fiverr",
      description:
        "I'm now a full-stack developer working as a freelancer on Fiverr. My stack includes React, Next.js,Express.js, TypeScript, TailwindCSS, Prisma and MongoDB. I'm open to full-time opportunities.",
      icon: React.createElement(FaReact),
      date: "2022 - present",
    },
  ] as const;



export default function Experience() {

  const { setTheme } = useTheme();
 
  return (






<section
      id="carreer"
      className="border-y bg-muted/70 py-16 dark:bg-muted/20"
    >
      <div className="container space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="heading">Career</h1>
          <div className="flex flex-col items-center justify-center ">
    <Image src={ LaptopSVG} className="rounded-full"    height="250" alt="waving_hand" 
                width="200"/>
    </div>
          <p className="subheading mx-auto max-w-prose">as a Software Developer.</p>
          <a
            href="/jordan-cortes-cv.pdf"
            target="_blank"
            className={buttonVariants({ variant: "default" })}
          >
          Download Resume
          </a>
        </div>

        <ol className="relative max-w-prose space-y-8 before:absolute before:left-4 before:hidden before:h-full before:border-l before:border-border md:mx-auto md:before:block">
          {/* circle of timeline  */}
          <span className="motion-safe:scale-up sticky -left-8 top-1/4 hidden h-8 w-8 items-center justify-center rounded-full bg-primary md:flex"></span>
          {experiencesData.map((item, index) => (
            <li
              key={index}
              className="motion-safe:fade-left space-y-1 rounded-xl border bg-gradient-to-tl from-background/60 from-50% p-6 md:ms-16"
            >
              <time className="motion-safe:fade-left block text-sm leading-none text-muted-foreground">
                {item.date}
              </time>
              <div className="flex flex-col items-center justify-center ">
    <Image src={ fiverrimage} className=""    height="250" alt="fiverr" 
                width="200"/>
                </div>
              <div className="inline-flex items-center gap-2">
                <h2 className="motion-safe:fade-left flex items-center text-lg font-semibold text-foreground">
                  {item.title}
                </h2>

                <Badge className="motion-safe:scale-up">{item.location}</Badge>
              </div>
              <a
            href= {item.link}
            target="_blank"
            className={buttonVariants({ variant: "default" })}
          >
          visit fiverr id
          </a>
              <p className="motion-safe:fade-left mb-4 text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>

     

  
  );
}