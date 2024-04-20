import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request,{params:{id}}) {
    try {
        const slider = await db.slider.findUnique({
            where:{
                id
            },
            include:{
                products: true
            }
        })
        return NextResponse.json(slider)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch slider",
    },{status:500})
    }
}

export async function DELETE(request,{params:{id}}) {
    try {
        const existingSlider = await db.slider.findUnique({
            where:{
                id
            },
        })
        if(!existingSlider){
            return NextResponse.json({
                data: null,
                message:'Category not found',
            },
            {status:404}

            )
        }
        const deletedSlider = await db.slider.delete({
            where:{
                id
            } 
        })
        return NextResponse.json(deletedSlider)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to delete slider",
    },{status:500})
    }
}