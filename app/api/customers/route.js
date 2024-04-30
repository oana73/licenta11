import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const customers = await db.user.findMany({
            orderBy:{
                createdAt:"desc",
            },
        where:{
            role:'USER'
        },
        include:{
            profile: true,
        }})
        return NextResponse.json(customers)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch users",
    },{status:500})
    }
}