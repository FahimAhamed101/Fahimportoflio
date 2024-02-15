import React from 'react'
import prisma from "@/app/prismadb"
import ImageGallery from './ImageGallery'

import { getServerSession } from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options"



type Props = {}

export default async function Page({params}:{params:{slug:string}}){
    const productId = params.slug
    const session = await getServerSession(options);
  
    const product = await prisma.product.findFirst({
        where:{
            id:productId
        }
    })
  
    const urlString = product?.images
    return(
        <div className='max-w-[1280px] mx-auto px-5 py-5'>
            <div className='font-semibold text-2xl mb-2'>
                <a href="/">SEINE</a>
            </div>
            <hr />
         
            {product && (
                <div className='grid grid-cols-2 mt-10 gap-14'>
                    {urlString && (
                        <ImageGallery imageUrls = {urlString} />
                    )}
             
                </div>
            )}
            <div className='mb-20 mt-20'>
                <div className='flex items-center space-x-5 mb-10'>
                    <span className='w-[5px] h-[30px] bg-purple-600 rounded-full inline-block'></span>
                    <span className='font-medium text-xl'>Product Description</span>
                </div>
                {product && (
                    <div className='grid grid-cols-2'>
                        <div className='fles flex-col justify-center'>
                            <div className='grid grid-cols-3 gap-5 mb-5'>
                                <div>
                                    <h3 className='font-medium'>Category</h3>
                                    <p className='text-sm text-purple-500'>{product.category}</p>
                                </div>
                             
                            </div>
                          
                        </div>
                        <div className='flex justify-end relative items-center'>
                            <img src={product.images.split(',').pop()} className='max-h-[300px] w-10/12 rounded-lg object-cover' alt="" />
                            <span className='text-sm absolute bottom-2 right-2 text-white font-medium'>{product.title}</span>
                        </div>
                    </div>
                )}
            </div>
            <div className='mt-20 mb-20'>
                <div className='flex items-center space-x-5 mb-10'>
                    <span className='w-[5px] h-[30px] bg-purple-600 rounded-full inline-block'></span>
                    <span className='font-medium text-xl'>Comment & Review Section</span>
                </div>
              
            </div>
        </div>
    )
}