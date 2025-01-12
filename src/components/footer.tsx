import { Dribbble, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-8 border-t px-4 py-16 text-muted-foreground md:flex-row md:px-8">
      <a href={`mailto:${process.env.EMAIL}`}>
        <p>{process.env.EMAIL}</p>@copyright Fahim
      </a>
      <a
            className="flex gap-8"
            href="https://github.com/FahimAhamed101"
          >
     &nbsp; DResume
          </a>
      <div className="flex gap-8">
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
    </footer>
  );
}