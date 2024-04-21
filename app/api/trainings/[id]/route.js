import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request,{params:{id}}) {
    try {
        const training = await db.training.findUnique({
            where:{
                id
            },
        })
        return NextResponse.json(training)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch training",
    },{status:500})
    }
}

export async function DELETE(request,{params:{id}}) {
    try {
        const existingTraining = await db.training.findUnique({
            where:{
                id
            },
        })
        if(!existingTraining){
            return NextResponse.json({
                data: null,
                message:'Training not found',
            },
            {status:404}

            )
        }
        const deletedTraining = await db.training.delete({
            where:{
                id
            } 
        })
        return NextResponse.json(deletedTraining)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to delete training",
    },{status:500})
    }
}
export async function PUT(request,{params:{id}}) {

    try{
        const{title, name, content, slug, imageUrl} = await request.json();
        const existingTraining = await db.training.findUnique({
            where: {
                id,
            }}
        )
        if(!existingTraining){
            return NextResponse.json({
                data:null,
                message: "Training not found",
            },{status:404}
            )
        }
        const updatedTraining = await db.training.update({
            where:{id},
            data: {title, name, content, slug, imageUrl},
        }) 
        return NextResponse.json(updatedTraining)
    } catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Updating Training failed",
        },{status:500})
    }}