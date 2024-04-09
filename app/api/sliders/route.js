import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
try{
    const{title, link, imageUrl} = await request.json();
    const newSlider = await db.slider.create({
        data: {title, link, imageUrl}
    })
    console.log(newSlider);
    return NextResponse.json(newSlider)
} catch(error){
    console.log(error)
    return NextResponse.json({
        error: "Creating Slider failed",
    },{status:500})
}
}
export async function GET(request) {
    try {
        const sliders = await db.slider.findMany({
            orderBy:{
                createdAt:"desc",
            }
        })
        return NextResponse.json(sliders)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch slider",
    },{status:500})
    }
}