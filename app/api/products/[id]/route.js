import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request,{params:{id}}) {
    try {
        const product = await db.product.findUnique({
            where:{
                id
            },
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
export async function PUT(request,{params:{id}}) {

    try{
        const{title, slug, sku, codebar, price, discount, imageUrl, isActive, productStock, qty, description, categoryId, supplierId, tags} = await request.json();
        const existingProduct = await db.product.findUnique({
            where: {
                id,
            }}
        )
        if(!existingProduct){
            return NextResponse.json({
                data:null,
                message: "Product not found",
            },{status:404}
            )
        }
        const updatedProduct = await db.product.update({
            where:{id},
            data: {title, slug, sku, codebar, price, discount, imageUrl, isActive, productStock, qty, description, categoryId, supplierId, tags},
        }) 
        return NextResponse.json(updatedProduct)
    } catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Updating Product failed",
        },{status:500})
    }}