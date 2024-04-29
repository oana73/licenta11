import db from "@/lib/db";
import { NextResponse } from "next/server";

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { checkoutFormData, orderItems } = await request.json();
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

    // Create orderNumber function
    function generateOrderNumber(length) {
      const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let orderNumber = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        orderNumber += characters.charAt(randomIndex);
      }

      return orderNumber;
    }

    // Use the Prisma transaction
    const result = await db.$transaction(async (prisma) => {
      // Create order and order items within the transaction
      const newOrder = await prisma.order.create({
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
      });

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

      // Calculate total amount for each product and create a sale for each
      const sales = await Promise.all(
        orderItems.map(async (item) => {
          const totalAmount = parseFloat(item.discount) * parseInt(item.qty);

          const newSale = await prisma.sale.create({
            data: {
              orderId: newOrder.id,
              productTitle: item.title,
              productPrice: parseFloat(item.discount),
              productImage: item.imageUrl,
              productQty: parseInt(item.qty),
              productId: item.id,
              vendorId: item.vendorId,
              total: totalAmount,
            },
          });

          return newSale;
        })
      );

      return { newOrder, newOrderItems, sales };
    });

    console.log(result.newOrder, result.newOrderItems, result.sales);

    // Return the response
    return NextResponse.json(result.newOrder)
  } catch (error) {
    console.error(error);
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