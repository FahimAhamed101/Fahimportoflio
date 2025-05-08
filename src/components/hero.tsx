import { buttonVariants } from "@components/ui/button";
import { Code, MailPlus, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LaptopSVG from "../../public/fahimgreen.jpg";

export default async function Hero() {
  return (
    <section className="relative mx-auto h-screen max-w-7xl px-4 md:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-3xl" />
      </div>

      <div className="flex h-full flex-col items-center justify-center gap-12 lg:flex-row lg:justify-between lg:gap-8">
        {/* Text content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="animate-gradient bg-gradient-to-r from-orange-400 via-fuchsia-400 to-blue-400 bg-clip-text text-4xl font-black tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            Fahim Ahmed
          </h1>
          
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Full Stack Developer specializing in modern web technologies.
            Currently crafting exceptional experiences with Next.js and TypeScript.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "group gap-2",
              })}
              href="https://github.com/FahimAhamed101"
            >
              <Code className="h-5 transition-transform group-hover:rotate-12" />
              <span>View GitHub</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "group gap-2",
              })}
              href="https://www.linkedin.com/in/fahim-ahmed-477836190/"
            >
              <MailPlus className="h-5 transition-transform group-hover:scale-110" />
              <span>Contact Me</span>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-first lg:order-last">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-4 border-white/10 shadow-2xl shadow-blue-400/20 md:h-80 md:w-80 lg:h-96 lg:w-96">
            <Image
              src={LaptopSVG}
              alt="Fahim Ahmed"
              fill
              className="object-cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-64 w-64 rounded-2xl bg-gradient-to-r from-blue-400/30 to-purple-400/30 md:h-80 md:w-80 lg:h-96 lg:w-96" />
        </div>
      </div>
    </section>
  );
}