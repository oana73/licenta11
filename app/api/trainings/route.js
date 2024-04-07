import { NextResponse } from "next/server";

export async function POST(request){
try{
    const{title, content} = await request.json();
    const newTraining = { title, content}
    console.log(newTraining);
    return NextResponse.json(newTraining)
} catch(error){
    console.log(error)
    return NextResponse.json({
        message: "Creating Training failed",
    },{status:500})
}
}