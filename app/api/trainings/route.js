import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
try{
    const{title, name, content, slug, imageUrl} = await request.json();
    const existingTraining = await db.training.findUnique({
        where: {
            slug
        }}
    )
    if(existingTraining){
        return NextResponse.json({
            data:null,
            message: "Training already exist s",
        },{status:409}
        )
    }
    const newTraining = await db.training.create({
        data:{ title, name, content, slug, imageUrl}
    })
    console.log(newTraining);
    return NextResponse.json(newTraining)
} catch(error){
    console.log(error)
    return NextResponse.json({
        message: "Creating Training failed",
    },{status:500})
}
}
export async function GET(request) {
    try {
        const trainings = await db.training.findMany({
            orderBy:{
                createdAt:"desc",
            }})
        return NextResponse.json(trainings)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch training",
    },{status:500})
    }
}