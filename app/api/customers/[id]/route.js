import db from "@/lib/db"
import { NextResponse } from "next/server"
export async function PUT(request,{params:{id}}) {

    try{
        const{title, code, valability} = await request.json();
        const existingUser= await db.coupon.findUnique({
            where: {
                id,
            }}
        )
        if(!existingUser){
            return NextResponse.json({
                data:null,
                message: "Coupon not found",
            },{status:404}
            )
        }
        const updatedUser = await db.userProfile.update({
            where:{id},
            data: {title, code, valability},
        }) 
        return NextResponse.json(updatedCoupon)
    } catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Updating Coupon failed",
        },{status:500})
    }}