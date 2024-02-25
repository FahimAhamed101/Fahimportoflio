import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
const inter = Inter({ subsets: ["latin"] });
import { Providers } from "@components/providers";

export const metadata: Metadata = {
  title: "Fahim-Portfolio",
  description: "Full Stack Software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  
        <body className={inter.className}>
      <Providers>
          <Navbar />
          <main className="flex-grow pb-16 pt-8">
          
            {children}
          </main>
       
          <Footer />
        </Providers>
        </body> 
        
  
      
      
     

  
    </html>
  );
}
