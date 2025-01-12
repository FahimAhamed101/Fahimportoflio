import React from 'react'
import Link from 'next/link'
function ProjectCard({product}) {
  return (
    <>
     
     <div className="flex w-full  md:justify-center items-start md:gap-6 gap-3 flex-wrap">


      <div className="w-full grid   lg:justify-center lg:grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8 md:mt-8">

        <div className='text-center'>

        <img src={product.images.split(',')[0]} alt="" className='rounded-t-lg w-full h-[400px] overflow-hidden object-scale-down max-h-[400px] ' />
    
                 
                      <h1 className="font-bold text-black text-3xl ">
                  
                  <Link href={`/projects/${product.id}`}>{product.title}</Link></h1>
               

 <Link className="font-bold text-black" href={`/projects/${product.id}`}>  View Project  </Link>
</div>
     

         
       
            </div>
      </div>
      
    
    </>
  )
}

export default ProjectCard