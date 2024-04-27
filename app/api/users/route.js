import db from "@/lib/db"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"
import { v4 as uuidv4 } from 'uuid';
import base64url from 'base64url';
import { Resend } from "resend";
import EmailTemplate from "@/components/emailTemplate";
export async function POST(request){
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
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
        // Generate a random UUID (version 4)
        const rawToken = uuidv4();
        console.log(rawToken);
        // Encode the token using Base64 URL-safe format
        const token = base64url.encode(rawToken);
        const newUser = await db.user.create({
            data:{
                name,
                email, 
                password: hasedPassword,
                role,
                verifcationToken: token
            }
        })
        console.log(newUser);
        //Send email if the user is a asupplier
        if(role==='SUPPLIER'){
            //Send an Email with the Token on the link as a search param
            const linkText = "Veify";
            const subject = "Account Verification"
            const description = "Thank you, for Creating annAccount with Us. We request you to click on the link Below in order to verify your Account. Thankyou"
            const userId = newUser.id;
            const redirectUrl = `onboarding/${userId}?token=${token}`;
            const sendMail = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: email,
                subject: subject,
                react: EmailTemplate({name, redirectUrl, linkText,description, subject}),
                html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
              });
            console.log(sendMail)}
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