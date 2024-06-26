import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
try{
    //name,slug, phone, email,address, paymentTerms, notes,profileImage, userId
    //update the verification in the user
    const supplierData = await request.json();
    //checks if the supplier exisst
    const existingUser = await db.user.findUnique({
        where:{
            id:supplierData.userId
        }
    })
    if(!existingUser){

        return NextResponse.json({
            data: null,
            message: "No user foun"
        },{status:404})
    }
        //update the user
        const updatedUser = await db.user.update({
            where:{
                id:supplierData.userId
            },
            data:{
                emailVerified:true
            }
        })
    const newSupplierProfile = await db.supplierProfile.create({
        data: {
            name: supplierData.name,
            phone: supplierData.phone, 
            email: supplierData.email,
            address: supplierData.address,  
            profileImage: supplierData.profileImage,
            paymentTerms: supplierData.paymentTerms,
            notes: supplierData.notes,
            userId: supplierData.userId,

        }
    })
    console.log(newSupplierProfile);
    return NextResponse.json(newSupplierProfile)
} catch(error){
    console.log(error)
    return NextResponse.json({
        message: "Creating coupon failed",
    },{status:500})
}
}

export async function GET(request) {
    try {
        const suppliers = await db.user.findMany({
            orderBy:{
                createdAt:"desc",
            },
        where:{
            role:'SUPPLIER'
        },
        include:{
            supplierProfile: true,
        }})
        return NextResponse.json(suppliers)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch suppliersr",
    },{status:500})
    }
}