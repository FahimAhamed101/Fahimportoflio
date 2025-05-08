"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import NextThemeHandler from "./handler";

const NextThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >   <SessionProvider>
      <NextThemeHandler>{children}</NextThemeHandler>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default NextThemeWrapper;