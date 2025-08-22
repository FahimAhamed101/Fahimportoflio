"use client";

import { buttonVariants } from "@components/ui/button";
import { Code, Mail, ArrowRight, Sparkles, Star, Download, ChevronDown } from "lucide-react";
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
    <section 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center p-4 md:p-8 lg:p-12"
      style={{ 
        backgroundImage: "url('https://dizme.vercel.app/img/slider/1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/50 to-indigo-900/70"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 h-[600px] w-[600px] translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-yellow-500/20 blur-3xl animate-pulse delay-1000" />
        <div className="absolute left-1/2 bottom-1/3 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-r from-green-500/15 to-emerald-500/15 blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className={`relative z-10 flex h-full max-w-7xl w-full flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between lg:gap-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Text content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg transform transition-all duration-500 hover:scale-105">
            <Sparkles className="mr-2 h-4 w-4" />
            Full Stack Developer & UI/UX Designer
          </div>
          
          {/* Main heading with animation */}
          <div className="space-y-4">
            <h1 className="text-5xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-r from-orange-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                Fahim
              </span>
              <span className="text-white"> Ahmed</span>
            </h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto lg:mx-0"></div>
          </div>
          
          {/* Description */}
          <p className="max-w-2xl text-xl text-white/90 md:text-2xl backdrop-blur-sm bg-black/30 rounded-2xl p-6 border border-white/10 transform transition-all duration-700 hover:scale-105">
            Crafting <span className="text-purple-300 font-semibold">exceptional digital experiences</span> with modern technologies. 
            Specializing in <span className="text-blue-300 font-semibold">Next.js</span>, 
            <span className="text-green-300 font-semibold"> TypeScript</span>, and 
            <span className="text-amber-300 font-semibold"> cutting-edge web solutions</span>.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "group gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/40",
              })}
              href="https://github.com/FahimAhamed101"
              target="_blank"
            >
              <Code className="h-5 w-5 transition-transform group-hover:rotate-12" />
              <span>View GitHub</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "group gap-3 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105",
              })}
              href="https://www.linkedin.com/in/fahim-ahmed-477836190/"
              target="_blank"
            >
              <Mail className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span>Contact Me</span>
            </Link>

            <Link
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "group gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/30",
              })}
              href="/resume.pdf"
              target="_blank"
            >
              <Download className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
              <span>Download CV</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 text-center mt-8 p-4 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-white/70 mt-1">Projects</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">3+</div>
              <div className="text-sm text-white/70 mt-1">Years Experience</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-white/70 mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="relative order-first lg:order-last transform transition-all duration-1000 hover:scale-105">
          <div className="relative h-72 w-72 overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl shadow-blue-400/40 md:h-96 md:w-96 lg:h-[500px] lg:w-[500px]">
            <Image
              src={LaptopSVG}
              alt="Fahim Ahmed - Full Stack Developer"
              fill
              className="object-cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />
            
            {/* Glowing effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-70 animate-pulse"></div>
          </div>
          
          {/* Floating badges around image */}
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold py-2 px-4 rounded-full shadow-lg animate-bounce flex items-center">
            <Star className="h-4 w-4 mr-1" />
            Available
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold py-2 px-4 rounded-full shadow-lg animate-bounce delay-1000 flex items-center">
            <Sparkles className="h-4 w-4 mr-1" />
            Freelance
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-purple-500/20 blur-xl animate-pulse"></div>
          <div className="absolute -top-8 -left-8 w-20 h-20 rounded-full bg-blue-500/20 blur-xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white/80 animate-bounce">
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .animate-float {
          animation: float 20s linear infinite;
        }
      `}</style>
    </section>
  );
}