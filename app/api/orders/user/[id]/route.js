import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request,{params:{id}}) {
    try {
        const order = await db.order.findUnique({
            where:{
                userId: id,
            },
            include:{
                orderItems:true,
            }
        })
        return NextResponse.json(order)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch order",
    },{status:500})
    }
}

