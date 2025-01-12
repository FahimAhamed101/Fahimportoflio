import React from 'react'
import prisma from "@/app/prismadb"
import Edit from '../Edit'

type Props = {}

const EditProduct = async ({params}:{ params:Promise<{ slug:string}>}) => {
    const productId = await params.slug

   

    try{
        const product = await prisma.product.findUnique({
            where:{
                id:productId
            }
        })

        if(!product){
            return <div>Product id not fount</div>
        }

        return(
            <div>
                <Edit {...product}/>
            </div>
        )
    }catch(error){
        console.log("Error", error);
        return <div>Error fetching product</div>
    }
}

export default EditProduct