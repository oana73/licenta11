import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
try{
    const {title, slug, sku, codebar, price, discount, imageUrl, isActive, productStock, qty, description, categoryId, supplierId, tags}= await request.json();
    const existingProduct = await db.product.findUnique({
        where: {
            slug
        }}
    )
    //checks if the product exisst in the db
    if(existingProduct){
        return NextResponse.json({
            data:null,
            message: "Product already exist s",
        },{status:409}
        )
    }
    const newProduct = await db.product.create({
        data: {title, slug, sku, codebar, price:parseFloat(price), discount:parseFloat(discount), imageUrl, isActive, productStock:parseInt(productStock), qty: parseInt(qty), description, categoryId, userId: supplierId, tags},
    }) 
    console.log(newProduct);
    return NextResponse.json(newProduct)
} catch(error){
    console.log(error)
    return NextResponse.json({
        message: "Creating Product failed",
    },{status:500})
}
}

export async function GET(request) {
    try {
        const products = await db.product.findMany({
            orderBy:{
                createdAt:"desc",
            }})
        return NextResponse.json(products)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch product",
    },{status:500})
    }
}