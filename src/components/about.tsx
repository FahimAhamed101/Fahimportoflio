"use client";
import { buttonVariants } from "@components/ui/button";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

const items1: string[] = [
    "Next.js",
    "React",
    "Typescript",
    "TailwindCSS",
    "SQL",
    "Prisma",
    "Python",
    "Django",
    "Framer Motion",
    "Zod",
    "React Hook Form",
  ];
  
  const items2: string[] = [
    "C#",
    "Java",
    "Spring Boot",
    "PL/SQL",
    "Bootstrap",
    "SASS",
  ];
  
  function ItemBtn({ item }: { item: string }) {
    return (
      <p
        className={`motion-safe:fade-up ${buttonVariants({
          variant: "secondary",
          size: "sm",
        })}`}
      >
        {item}
      </p>
    );
  }
export default function About() {


  return (
    <motion.section
   
      className="mb-28 container flex flex-col items-center justify-center gap-4 space-y-4 text-center  text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Mathematics</span>, I decided to pursue my
        passion for programming. I developed my coding skills and learned {""}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
      <div className="space-y-8">
          <div className="space-y-2">
            <p className="font-bold">Languages, libreries or frameworks I've used the most</p>
            <div className="flex flex-wrap gap-4">
              {items1.map((item, idx) => (
                <ItemBtn key={idx} item={item} />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-bold">Used less frequently</p>
            <div className="flex flex-wrap gap-4">
              {items2.map((item, idx) => (
                <ItemBtn key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>

        <hr />
    </motion.section>
  );
}