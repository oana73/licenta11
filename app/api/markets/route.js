import { NextResponse } from "next/server";

export async function POST(request){
try{
    const{title, slug, imageUrl, description} = await request.json();
    const newMarket = { title, slug, imageUrl, description}
    console.log(newMarket);
    return NextResponse.json(newMarket)
} catch(error){
    console.log(error)
    return NextResponse.json({
        message: "Creating Category failed",
    },{status:500})
}
}