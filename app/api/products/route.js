import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
try{
    const {title, slug, sku, codebar, price, discount, isActive, productStock, qty, description, categoryId, supplierId, tags,productImages}= await request.json();
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
        data: {title, slug, sku, codebar, price:parseFloat(price), discount:parseFloat(discount), imageUrl:productImages[0], isActive, productStock:parseInt(productStock), qty: parseInt(qty), description, categoryId, userId: supplierId, tags,productImages},
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
    const categoryId = request.nextUrl.searchParams.get('catId')
    const sortBy =request.nextUrl.searchParams.get('sort')
    const min =request.nextUrl.searchParams.get('min')
    const max =request.nextUrl.searchParams.get('max')
    const searchTerm =request.nextUrl.searchParams.get('search')
    const page =request.nextUrl.searchParams.get('page') || 1
    const pageSize = 3
    let where={
        categoryId
    }
    if(min && max){
        where.discount={
            gte: parseFloat(min),
            lte: parseFloat(max)
        }
    }else if(min){
        where.discount={
            gte: parseFloat(min),
        }
    }else if(max){
        where.discount={
            lte: parseFloat(max),
        }
    }
    let products;
    try {
        if(searchTerm){
            products = await db.product.findMany({
                where: {
                    OR:[
                        {title: {contains:searchTerm, mode:'insensitive'},},
                        {description: {contains:searchTerm, mode:'insensitive'},}
                    ]
                }
                
        })
        }else if(categoryId && sortBy){
            products = await db.product.findMany({
                where,
                orderBy:{
                    discount: sortBy==="asc"?"asc":"desc",
        },})
        } else if(categoryId){
            products = await db.product.findMany({
                where,
                orderBy:{
                    createdAt:"desc",
                },
                
            })
        }else{
            products = await db.product.findMany({
            orderBy:{
                createdAt:"desc"
            },})
        }
        return NextResponse.json(products)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch product",
    },{status:500})
    }
}