"use client";

import { buttonVariants } from "@components/ui/button";
import { Code, Mail, ArrowRight, Download, ChevronDown, MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import LaptopSVG from "../../public/fahimgreen.jpg";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8 lg:p-12">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Minimal geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-10 top-20 w-64 h-64 border border-blue-200/30 rounded-full" />
        <div className="absolute left-10 bottom-32 w-48 h-48 border border-slate-300/20 rounded-lg rotate-45" />
        <div className="absolute right-1/3 top-1/2 w-32 h-32 border border-slate-400/10 rounded-full" />
      </div>

      <div className={`relative z-10 flex h-full max-w-7xl w-full flex-col items-center justify-center gap-12 lg:flex-row lg:justify-between lg:gap-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Text content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-8">
          {/* Professional badge */}
          <div className="inline-flex items-center rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            Available for new projects
          </div>
          
          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-4xl font-light tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-slate-900">Fahim</span>
              <span className="text-blue-600 font-medium"> Ahmed</span>
            </h1>
            
            <div className="h-px w-20 bg-slate-300 mx-auto lg:mx-0"></div>
            
            <p className="text-2xl font-light text-slate-600 md:text-3xl max-w-2xl">
              Full Stack Software Developer
            </p>
          </div>
          
          {/* Description */}
          <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
            Building scalable, high-performance web applications with modern technologies. 
            Specializing in <span className="text-blue-600 font-medium"> Web &</span> <span className="text-blue-600 font-medium">Mobile Technologies</span>, 
          to deliver exceptional digital solutions.
          </p>
          
          {/* Contact info */}
          <div className="flex flex-col gap-3 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Based in Bangladesh</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>1+ years of professional experience</span>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "group gap-3 bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md",
              })}
              href="https://github.com/FahimAhamed101"
              target="_blank"
            >
              <Code className="h-4 w-4" />
              <span>View GitHub</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "group gap-3 border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium py-3 px-6 rounded-lg transition-all duration-300",
              })}
              href="https://www.linkedin.com/in/fahim-ahmed-477836190/"
              target="_blank"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </Link>

            <Link
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "group gap-3 border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium py-3 px-6 rounded-lg transition-all duration-300",
              })}
              href="/resume.pdf"
              target="_blank"
            >
              <Download className="h-4 w-4" />
              <span>Download CV</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center mt-8 p-6 bg-white rounded-lg border border-slate-200 shadow-sm">
            <div>
              <div className="text-2xl font-semibold text-slate-900">50+</div>
              <div className="text-sm text-slate-500 mt-1">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-slate-900">1+</div>
              <div className="text-sm text-slate-500 mt-1">Years Exp</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-slate-900">20+</div>
              <div className="text-sm text-slate-500 mt-1">Clients</div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="relative order-first lg:order-last">
          <div className="relative h-80 w-80 overflow-hidden rounded-2xl border border-slate-200 shadow-lg md:h-96 md:w-96 lg:h-[480px] lg:w-[480px]">
            <Image
              src={LaptopSVG}
              alt="Fahim Ahmed - Full Stack Developer"
              fill
              className="object-cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
          </div>
          
          {/* Professional badges */}
          <div className="absolute -top-2 -right-2 bg-white border border-slate-200 text-slate-700 text-xs font-medium py-2 px-3 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Available
            </div>
          </div>
          
          <div className="absolute -bottom-2 -left-2 bg-blue-600 text-white text-xs font-medium py-2 px-3 rounded-lg shadow-sm">
            Open for Work
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-slate-400 animate-bounce">
          <span className="text-xs mb-2 font-medium">Scroll to explore</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
}