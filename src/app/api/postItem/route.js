import { NextResponse } from "next/server";

export async function POST(req) {
    const formData = await req.formData();
    const productName = formData.get("productName");
    const description = formData.get("description");
    const price = formData.get("price");
    const quantity = formData.get("quantity");
    const fileImge = formData.get("fileImge");
    console.log(productName, description, price, quantity, fileImge);
    
    return NextResponse.json({message: "OK"}, { status: 200 });
}