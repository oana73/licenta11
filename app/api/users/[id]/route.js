import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request, {params:{id}}) {
    try {
        const user = await db.user.findUnique({
            where:{
                id,
            },
            select:{
                name:true, 
                email:true,
                id:true,
                role:true,
                createdAt:true,
                profile:true,
            },
            // include:{
            //     profile:true,
            // }
            })
        return NextResponse.json(user)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch user",
    },{status:500})
    }
}