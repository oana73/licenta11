import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
try{
    const{checkoutFormData, orderItems} = await request.json();
    const{
        city,
        country,
        email,
        firstName,
        lastName,
        paymentMethod,
        phone,
        shippingCost,
        streetAddress,
        userId,
        zipCode,
        orderNumber
    } = checkoutFormData
    const newOrder = await db.order.create({
        data:{
            userId,
            firstName ,
            lastName ,
            email  ,
            phone ,
            streetAddress,
            city ,
            country ,
            zipCode ,
            shippingCost:parseFloat(shippingCost),
            paymentMethod,
            orderNumber: generateOrderNumber(8)}
    })
    //create orderNumber
    function generateOrderNumber(length) {
        const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let orderNumber = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          orderNumber += characters.charAt(randomIndex);
        }
      
        return orderNumber;
      }

    //create order Item
    const newOrderItems = await prisma.orderItem.createMany({
        data: orderItems.map((item) => ({
            productId:item.id,
            vendorId:item.id,
            quantity: parseInt(item.qty),
            price: parseFloat(item.discount),
            orderId: newOrder.id,
            imageUrl:item.imageUrl,
            title: item.title,
        })),
      });
      console.log(newOrder,newOrderItems)
  
    console.log(newOrder);
    return NextResponse.json(newOrder)
} catch(error){
    console.log(error)
    return NextResponse.json({
        message: "Creating Order failed",
    },{status:500})
}
}
export async function GET(request) {
    try {
        const orders = await db.order.findMany({
            orderBy:{
                createdAt:"desc",
            },
            include:{
                orderItems:true,
            }
        })
        return NextResponse.json(orders)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Faild to fetch order",
    },{status:500})
    }
}