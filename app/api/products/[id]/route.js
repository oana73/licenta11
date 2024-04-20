import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request,{params:{id}}) {
    try {
        const product = await db.product.findUnique({
            where:{
                id
            },
            include:{
                products: true
            }
        })
        return NextResponse.json(product)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch product",
    },{status:500})
    }
}

export async function DELETE(request,{params:{id}}) {
    try {
        const existingProduct = await db.product.findUnique({
            where:{
                id
            },
        })
        if(!existingProduct){
            return NextResponse.json({
                data: null,
                message:'Product not found',
            },
            {status:404}

            )
        }
        const deletedProduct = await db.product.delete({
            where:{
                id
            } 
        })
        return NextResponse.json(deletedProduct)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to delete product",
    },{status:500})
    }
}