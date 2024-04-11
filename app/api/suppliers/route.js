import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
try{
    //name,slug, phone, email,address, paymentTerms, notes,profileImage, userId
    const supplierData = await request.json();
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
        const profiles = await db.supplierProfile.findMany({
            orderBy:{
                createdAt:"desc",
            }})
        return NextResponse.json(profiles)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch suppliersr",
    },{status:500})
    }
}