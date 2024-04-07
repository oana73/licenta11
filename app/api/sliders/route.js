import { NextResponse } from "next/server";

export async function POST(request){
try{
    const{title, imageUrl, link} = await request.json();
    const newSlider = { title, imageUrl, link}
    console.log(newSlider);
    return NextResponse.json(newSlider)
} catch(error){
    console.log(error)
    return NextResponse.json({
        message: "Creating Slider failed",
    },{status:500})
}
}