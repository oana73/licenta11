import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request,{params:{id}}) {
    try {
        const market = await db.market.findUnique({
            where:{
                id
            },
            include:{
                products: true
            }
        })
        return NextResponse.json(market)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch market",
    },{status:500})
    }
}

export async function DELETE(request,{params:{id}}) {
    try {
        const existingMarket = await db.market.findUnique({
            where:{
                id
            },
        })
        if(!existingMarket){
            return NextResponse.json({
                data: null,
                message:'Market not found',
            },
            {status:404}

            )
        }
        const deletedMarket = await db.market.delete({
            where:{
                id
            } 
        })
        return NextResponse.json(deletedMarket)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to delete market",
    },{status:500})
    }
}