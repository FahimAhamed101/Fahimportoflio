
import { buttonVariants } from "@components/ui/button";
import { Code, MailPlus } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; 
import LaptopSVG from "../../public/fahimgreen.jpg";
export default async function Hero() {
  

  return (
    <section>
      <div className="pt-5 container flex flex-col items-center justify-center gap-4 space-y-4 text-center">
        {/* hero graphic  */}
        <div className="">
        <Image src={ LaptopSVG}    height="250" alt="waving_hand" 
                    width="250"/>
        </div>

        <div className="space-y-2">
          <h1 className="animate-gradient bg-gradient-to-r from-orange-400 via-fuchsia-400 to-blue-400 bg-clip-text text-5xl font-black tracking-tighter text-transparent md:text-6xl lg:text-7xl">
           Fahim Ahmed
          </h1>

          <p className="text-lg text-muted-foreground">
          Software Developer.
            <br />
            Currently focused on Next.js (React) with Typescript.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            className={buttonVariants({ variant: "default", size: "lg" })}
            href="https://github.com/FahimAhamed101"
          >
            <Code className="h-5" /> &nbsp; Github
          </Link>

          <Link
            className={buttonVariants({ variant: "outline", size: "lg" })}
            href="https://www.linkedin.com/in/fahim-ahmed-477836190/"
          >
            <MailPlus className="h-5" /> &nbsp; Contact
          </Link>
        </div>
      </div>
    </section>
  );
}