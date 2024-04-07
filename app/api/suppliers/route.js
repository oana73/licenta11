import { NextResponse } from "next/server";

export async function POST(request){
try{
    const{name, phone, email,address, paymentTerms, notes} = await request.json();
    const newSupplier = { name, phone, email,address, paymentTerms, notes }
    console.log(newSupplier);
    return NextResponse.json(newSupplier)
} catch(error){
    console.log(error)
    return NextResponse.json({
        message: "Creating coupon failed",
    },{status:500})
}
}