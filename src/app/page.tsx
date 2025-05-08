import Image from "next/image";
import Hero from "@components/hero";
import About from "@components/about";
import { getCurrentUser } from './lib/session';

export default async function Home() {
  const user = await getCurrentUser()
  return (
   
     
 
      <div className="space-y-24">
        <Hero />
       <About/>
     
      </div>

     

  );
}
