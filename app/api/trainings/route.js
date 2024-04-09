import { NextResponse } from "next/server";

export async function POST(request){
try{
    const{title, content, slug} = await request.json();
    const newTraining = { title, content, slug}
    console.log(newTraining);
    return NextResponse.json(newTraining)
} catch(error){
    console.log(error)
    return NextResponse.json({
        message: "Creating Training failed",
    },{status:500})
}
}