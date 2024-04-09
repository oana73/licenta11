import { NextResponse } from "next/server";

export async function POST(request){
try{
    const{name,slug, phone, email,address, paymentTerms, notes, profileImage} = await request.json();
    const newSupplier = { name,slug, phone, email,address, paymentTerms, notes,profileImage }
    console.log(newSupplier);
    return NextResponse.json(newSupplier)
} catch(error){
    console.log(error)
    return NextResponse.json({
        message: "Creating coupon failed",
    },{status:500})
}
}