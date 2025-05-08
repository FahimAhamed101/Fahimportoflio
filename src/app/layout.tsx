import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
const inter = Inter({ subsets: ["latin"] });
import { Providers } from "@components/providers";
import { TechUsedSectionNew } from "@/components/animated/layout_footer";
import { usedTechnologies } from "@/components/animated/tech";
import { memo } from "react";
import deepEqual from "fast-deep-equal";

export const metadata: Metadata = {
  title: "Fahim-Portfolio",
  description: "Full Stack Software developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html
      lang="en"
     
      suppressHydrationWarning
    >
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <Navbar />
          <PageContent innerChildren={children} />
        </Providers>
      </body>
    </html>
  );
}

const PageContent = memo(
  ({ innerChildren }: { innerChildren: React.ReactNode }) => {
    return (
      <>
        <main className="min-h-[90svh] pb-8">{innerChildren}</main>
        <TechUsedSectionNew techUsed={usedTechnologies} />
        <Footer />
      </>
    );
  },
  (prev, next) => deepEqual(prev.innerChildren, next.innerChildren)
);

PageContent.displayName = "PageContent";