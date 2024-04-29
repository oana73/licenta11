import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request,{params:{id}}) {
    try {
        const orders = await db.order.findUnique({
            where:{
                id
            },
            include:{
                orderItems:true,
            }
        })
        // const orders = await db.order.findMany({
        //     where:{
        //         userId:id
        //     },
        //     orderBy:{
        //         createdAt:"desc",
        //     },
        //     include:{
        //         orderItems:true,
        //     }
        // })
        return NextResponse.json(orders)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch order",
    },{status:500})
    }
}

export async function DELETE(request,{params:{id}}) {
    try {
        const existingOrder = await db.order.findUnique({
            where:{
                id
            },
        })
        if(!existingOrder){
            return NextResponse.json({
                data: null,
                message:'Order not found',
            },
            {status:404}

            )
        }
        const deletedOrder = await db.order.delete({
            where:{
                id
            } 
        })
        return NextResponse.json(deletedOrder)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to delete order",
    },{status:500})
    }
}
// export async function PUT(request,{params:{id}}) {

//     try{
//         const{title, name, content, slug, imageUrl} = await request.json();
//         const existingTraining = await db.training.findUnique({
//             where: {
//                 id,
//             }}
//         )
//         if(!existingTraining){
//             return NextResponse.json({
//                 data:null,
//                 message: "Training not found",
//             },{status:404}
//             )
//         }
//         const updatedTraining = await db.training.update({
//             where:{id},
//             data: {title, name, content, slug, imageUrl},
//         }) 
//         return NextResponse.json(updatedTraining)
//     } catch(error){
//         console.log(error)
//         return NextResponse.json({
//             message: "Updating Training failed",
//         },{status:500})
//     }}