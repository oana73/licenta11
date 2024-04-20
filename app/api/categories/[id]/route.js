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