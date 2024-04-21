import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request,{params:{id}}) {
    try {
        const category = await db.category.findUnique({
            where:{
                id
            },
            include:{
                products: true
            }
        })
        return NextResponse.json(category)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch category",
    },{status:500})
    }
}

export async function DELETE(request,{params:{id}}) {
    try {
        const existingCategory = await db.category.findUnique({
            where:{
                id
            },
        })
        if(!existingCategory){
            return NextResponse.json({
                data: null,
                message:'Category not found',
            },
            {status:404}

            )
        }
        const deletedCategory = await db.category.delete({
            where:{
                id
            } 
        })
        return NextResponse.json(deletedCategory)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to delete category",
    },{status:500})
    }
}

export async function PUT(request,{params:{id}}) {

    try{
        const{title, slug, imageUrl, description} = await request.json();
        const existingCategory = await db.category.findUnique({
            where: {
                id,
            }}
        )
        if(!existingCategory){
            return NextResponse.json({
                data:null,
                message: "Category not found",
            },{status:404}
            )
        }
        const updatedCategory = await db.category.update({
            where:{id},
            data: {title, slug, imageUrl, description},
        }) 
        return NextResponse.json(updatedCategory)
    } catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Updating Category failed",
        },{status:500})
    }}