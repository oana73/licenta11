import db from "@/lib/db"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"
export async function POST(request){
    try {
        //extract the credentials from the user request  
        const{name, email, password, role}= await request.json()
        //check if the user already exists in the db
        const existingUser = await db.user.findUnique({
            where:{
                email
            }
        })
        if(existingUser){
            return NextResponse.json({
                data: null,
                message: "User already exists"
            },{status:409})
        }
        //encrypt the password => bcrypt
        const hasedPassword = await bcrypt.hash(password, 10);
        const newUser = await db.user.create({
            data:{
                name,
                email, 
                password: hasedPassword,
                role,
            }
        })
        console.log(newUser);
        return NextResponse.json(
        {
            data: newUser,
            message: "User created"
        },{status: 201});
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:"Server Error: Something went wrong"
        },{status: 500})
    }
}

export async function GET(request) {
    try {
        const users = await db.user.findMany({
            orderBy:{
                createdAt:"desc",
            }})
        return NextResponse.json(users)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch users",
    },{status:500})
    }
}