import React from 'react'
import Link from 'next/link'
function ProjectCard({product}) {
  return (
    <>
    
      <div className="block  img-box h-[250px] w-[350px] lg2:w-auto mx-20px flex justify-center items-center relative overflow-hidden rounded-3xl">
      <img src={product.images.split(',')[0]} alt="" className='object-scale-down max-h-fit max-width: 20%;' />
              <div className="p absolute top-[-100%] left-0 h-full w-full  text-center bg-[#b004b0b7] p-4 pt-5">
                <h1 className="font-bold text-3xl"><Link href={`/projects/${product.id}`}>{product.title}</Link></h1>
               

 <Link className="font-bold text-black" href={`/projects/${product.id}`}>  View Project  </Link>


              </div>
       
            </div>
      
    </>
  )
}

export default ProjectCard