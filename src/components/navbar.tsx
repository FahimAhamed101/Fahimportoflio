import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@components/ui/button";
import NavLink from "@components/nav-link";
import LogoSVG from "@components/svg/logo-svg";

import Link from "next/link";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { MailPlus, Menu } from "lucide-react";
 
export type NavLinks = { label: string; href: string }[];

export default async function Navbar() {


  // get current session of user if logged in


 
const navLinks: NavLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/blog",
      label:"Blog",
    },
  ];

  return (
    <header className="sticky top-0 z-50 flex h-14 w-full items-center justify-between border-b border-border/40 bg-background/60 px-4 backdrop-blur md:px-8">
      <div className="flex gap-4">
        {/* logo  */}
        <Link aria-label="homepage" href="/">
          <LogoSVG size={10} />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4">
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}

         
          </ul>
        </nav>
      </div>

      {/* icons nav  */}
      <nav className="hidden md:block">
        <ul className="flex gap-2">
       

          <li>
            <ThemeToggle />
          </li>
          <li>
            <Link
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              href="/#contact"
            >
              <MailPlus className="h-5" />
            </Link>
          </li>
        </ul>
      </nav>

      {/* mobile nav */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent
            side="top"
            className="grid items-center justify-center rounded-b-xl text-center"
          >
            <ul className="flex flex-col flex-wrap items-center gap-4 px-8 py-16">
              {navLinks.map((item, index) => (
                <li key={index}>
                  {/* SheetClose is used as child to close the nav when the child is clicked */}
                  <SheetClose asChild>
                    <NavLink href={item.href}>{item.label}</NavLink>
                  </SheetClose>
                </li>
              ))}
             
            </ul>

            <ul className="flex items-center justify-center gap-4">
             

              <li>
                <ThemeToggle />
              </li>
              <li>
                <SheetClose asChild>
                  <Link
                    className={buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    })}
                    href={"/#contact"}
                  >
                    <MailPlus className="h-5" />
                  </Link>
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}