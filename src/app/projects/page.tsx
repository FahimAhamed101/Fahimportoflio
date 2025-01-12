

import React from "react";
import { getServerSession } from 'next-auth'
import {options} from "@/app/api/auth/[...nextauth]/options"
import Link from 'next/link'
import prisma from "@/app/prismadb"
import DeleteProduct from '@/app/DeleteProduct';
import {signIn, signOut, useSession } from 'next-auth/react'
import ProjectCard from "./ProjectCard";
import "./styles.css";

type Props = {}

const page = async (props: Props) => {
  

  
  
    const allmyproduct = await prisma.product.findMany()
    if(allmyproduct.length === 0) {
        return(
            <div className='relative flex items-center justify-center'>
                <img src="empty.png" alt="" />
                <h1 className='absolute top-[80%] text-2xl text-purple-600'>Empty Projects</h1>
            </div>
        )
    }
  return (

          <section id="projects" className="w-full flex flex-col gap-12 md:px-10 px-5">
  <div className="mx-auto flex max-w-xl flex-col items-center space-y-4">
          <h1 className="text-center text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text font-extrabold text-transparent">
            Projects
            </span>{" "}
     
          </h1>
          <p className="mt-6 text-center text-xl text-zinc-600">
            Discover the Best  projects and website built with diffrent web framworks.
          </p>
         
        </div>
    
      { <div
        id="text1"
        className="tab-pane  text-center text-white py-5   lg:p-5"
      >No Projects found</div>
        ? allmyproduct.map((product, i) => <ProjectCard key={i} product={product} />)
        : null}

  
</section>
 
  )
}

export default page