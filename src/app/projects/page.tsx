

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
    <div id="projects" className="projects  bg-[#171717] text-white py-10">
    <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
    <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
      Some of My projects are shown below.
    </p>
    <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
      <button
       
        className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
            <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >No Projects found</div> ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
        }`}
      >
       <a href="/">Home</a> 
      </button>
    
      
    </div>
    <div className="grid grid-cols-3 p-10 justify-center items-center gap-5 lg:grid-cols-3 tl:grid-cols-1  ">
      { <div
        id="text1"
        className="tab-pane  text-center text-white py-5   lg:p-5"
      >No Projects found</div>
        ? allmyproduct.map((product, i) => <ProjectCard key={i} product={product} />)
        : null}
    </div>
  

  </div>
  )
}

export default page