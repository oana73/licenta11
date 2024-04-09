import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
try{
    const{title, code, valability} = await request.json();
    const newCoupon = await db.coupon.create({
        data: {title, code, valability}
    })
    console.log(newCoupon);
    return NextResponse.json(newCoupon)
} catch(error){
    console.log(error)
    return NextResponse.json({
        message: "Creating coupon failed",
    },{status:500})
}
}

export async function GET(request) {
    try {
        const coupons = await db.coupon.findMany({
            orderBy:{
                createdAt:"desc",
            }})
        return NextResponse.json(coupons)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch coupon",
    },{status:500})
    }
}