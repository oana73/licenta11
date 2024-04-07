import { NextResponse } from "next/server";

export async function POST(request){
try{
    const productData= await request.json();
    console.log(productData);
    return NextResponse.json(productData)
} catch(error){
    console.log(error)
    return NextResponse.json({
        message: "Creating Product failed",
    },{status:500})
}
}