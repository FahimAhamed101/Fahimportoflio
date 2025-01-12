import React from 'react'
import prisma from "@/app/prismadb"
import ImageGallery from './ImageGallery'
import Link from "next/link";
import { getServerSession } from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options"
import {Github,ExternalLink , Menu } from "lucide-react";


type Props = {}

export default async function Page({params}:{params:Promise<{ slug:string}>}){
    const productId = params.slug
    const session = await getServerSession(options);
  
    const product = await prisma.product.findFirst({
        where:{
            id:productId
        }
    })
  
    const urlString = product?.images
    return(
        <div className='max-w-[1280px] mb-5 mr-5 mx-auto items-center grid'>
            
         
            {product && (
                <div className='grid grid-cols-2 items-center mx-auto  gap-10'>
             
                    {urlString && (
                        <ImageGallery imageUrls = {urlString} />
                    )}
            <div className='flex items-end gap-5 '> 
                        <Link href={product.github}><Github />Github</Link>  
              <Link href="/"><ExternalLink />Live</Link>  </div>
                </div>
            )}
           
               
                {product && (
                    <div className='grid grid-cols-1 text-center '>  
                           
                         <div>      <h3 className='font-medium'>Category</h3>
                      <p className='text-sm text-purple-500'>{product.category}</p></div>
               
                         <div className='grid grid-cols-1 items-center  m-10'>   
             
                  
              
                        <div className='flex flex-col items-center'>
                 <span className='text-sm pt-2 text-black font-medium'>Title:- {product.title}</span>
                   
                  
                 
                   <span className=' pt-5 font-medium text-xl'>{product.description}</span>
            </div>
          
                </div>
                    
               
                    </div>
                     
                )}
           
          
        </div>
    )
}