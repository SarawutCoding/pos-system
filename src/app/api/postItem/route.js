import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectMongo } from "../../../../lib/mongoConnect";
import Products from "../../../../model/products";
import { storage, ID } from "../../../../lib/appwriteConnect";

export async function POST(req) {
    const formData = await req.formData();
    const productName = formData.get("productName");
    const description = formData.get("description");
    const price = formData.get("price");
    const quantity = formData.get("quantity");
    const fileImge = formData.get("fileImge");
    
    const resAppWrite = await storage.createFile(process.env.BUSKET_ID, ID.unique(), fileImge);
    const fileID = resAppWrite.$id;
    
    
    
    return NextResponse.json({message: "OK"}, { status: 200 });
}