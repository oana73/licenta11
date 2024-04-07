import { NextResponse } from "next/server";

export async function POST(request){
try{
    const{title, code, valability} = await request.json();
    const newCoupon = { title, code, valability }
    console.log(newCoupon);
    return NextResponse.json(newCoupon)
} catch(error){
    console.log(error)
    return NextResponse.json({
        message: "Creating coupon failed",
    },{status:500})
}
}