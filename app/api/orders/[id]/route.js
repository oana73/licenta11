import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request,{params:{id}}) {
    try {
        const order = await db.order.findUnique({
            where:{
                id
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

export async function DELETE(request,{params:{id}}) {
    try {
        const existingOrder = await db.order.findUnique({
            where:{
                id
            },
        })
        if(!existingOrder){
            return NextResponse.json({
                data: null,
                message:'Order not found',
            },
            {status:404}

            )
        }
        const deletedOrder = await db.order.delete({
            where:{
                id
            } 
        })
        return NextResponse.json(deletedOrder)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to delete order",
    },{status:500})
    }
}