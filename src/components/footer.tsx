import { Dribbble, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    
    <footer className="mx-4 flex w-auto flex-col gap-10 rounded-t-2xl border-x border-t border-neutral-300 bg-neutral-100 px-4 py-10 dark:border-neutral-700 dark:bg-neutral-900 md:px-6 lg:mx-8 lg:gap-20 lg:py-16">
              <div className="mx-5 flex flex-col items-center justify-center px-8 text-sm">
              <div className="mb-4 mt-4 flex gap-4">
      
       <a href={`mailto:${process.env.EMAIL}`} className="flex rounded-lg p-1 text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-neutral-300">
        <p>{process.env.EMAIL}</p>@copyright Fahim
      </a>
      </div>  <div className="flex gap-8">
        <a
          href="https://github.com/FahimAhamed101"
          className="flex items-center gap-2"
          target="_blank"
        >
          <Github />
          <p>GitHub</p>
        </a>

        <a
          href="https://www.instagram.com/fahim_ahmed2000/"
          className="flex items-center gap-2"
          target="_blank"
        >
          <Instagram />
          <p>find me on Instagram</p>
        </a>
      </div>
      </div>
     
     
     
    </footer>
  );
}