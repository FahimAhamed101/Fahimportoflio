"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@components/ui/button";

export default function NavLink({
  href,
  children,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link
      {...rest}
      className={`${buttonVariants({ variant: "ghost" })} ${
        pathname === href ? "text-foreground" : "text-muted-foreground"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}