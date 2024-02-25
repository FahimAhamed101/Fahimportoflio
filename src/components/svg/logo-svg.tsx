import Image from 'next/image'
import LaptopSVG from "./fahim.png";
export default function LogoSVG({ size }: { size: number }) {
    const sizeProp = `m-5 h-17 w-20`;
    return (
      
        <Image className={sizeProp}
      src={ LaptopSVG} 
      
      alt="Picture of the author"
    />
      
    );
  }