import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request,{params:{id}}) {
    try {
        const supplier = await db.supplierProfile.findUnique({
            where:{
                id
            },
            include:{
                products: true
            }
        })
        return NextResponse.json(supplier)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch supplier",
    },{status:500})
    }
}

export async function DELETE(request,{params:{id}}) {
    try {
        const existingSupplier = await db.supplierProfile.findUnique({
            where:{
                id
            },
        })
        if(!existingSupplier){
            return NextResponse.json({
                data: null,
                message:'Supplier not found',
            },
            {status:404}

            )
        }
        const deletedSupplier = await db.supplierProfile.delete({
            where:{
                id
            } 
        })
        return NextResponse.json(deletedSupplier)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to delete supplier",
    },{status:500})
    }
}