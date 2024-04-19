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