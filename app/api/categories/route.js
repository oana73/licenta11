import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
try{
    const{title, slug, imageUrl, description} = await request.json();
    const existingCategory = await db.category.findUnique({
        where: {
            slug,
        }}
    )
    if(existingCategory){
        return NextResponse.json({
            data:null,
            message: "Category already exists",
        },{status:409}
        )
    }
    const newCategory = await db.category.create({
        data: {title, slug, imageUrl, description},
    }) 
    return NextResponse.json(newCategory)
} catch(error){
    console.log(error)
    return NextResponse.json({
        message: "Creating Category failed",
    },{status:500})
}
}

export async function GET(request) {
    try {
        const categories = await db.category.findMany({
            orderBy:{
                createdAt:"desc",
            }})
        return NextResponse.json(categories)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch category",
    },{status:500})
    }
}
