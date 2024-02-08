import Image from "next/image";
import Hero from "@components/hero";
import About from "@components/about";
import Experience from "@components/experience";
export default function Home() {
  return (
   
     
 
      <div className="space-y-24">
        <Hero />
       <About/>
       <Experience/>
      </div>

     

  );
}
