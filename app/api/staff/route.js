import { NextResponse } from "next/server";

export async function POST(request){
try{
    const{title, phone, email, password, nin, dob, address, notes } = await request.json();
    const newStaff= {title, phone, email, password, nin, dob, address, notes}
    console.log(newStaff);
    return NextResponse.json(newStaff)
} catch(error){
    console.log(error)
    return NextResponse.json({
        message: "Creating Staff failed",
    },{status:500})
}
}