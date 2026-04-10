import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectMongo } from "../../../../lib/mongoConnect";
import Products from "../../../../model/products";

export async function POST(req) {
    const formData = await req.formData();
    const productName = formData.get("productName");
    const description = formData.get("description");
    const price = formData.get("price");
    const quantity = formData.get("quantity");
    const fileImge = formData.get("fileImge");
    
    
    return NextResponse.json({message: "OK"}, { status: 200 });
}