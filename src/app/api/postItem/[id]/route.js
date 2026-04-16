import { NextResponse } from "next/server";
import { connectMongo } from "../../../../../lib/mongoConnect";
import Products from "../../../../../model/products";
import Category from "../../../../../model/category";
import { storage } from "../../../../../lib/appwriteConnect";
import { InputFile } from "node-appwrite/file";

export async function GET(req, { params }) {
    const { id } = await params;
    await connectMongo();
    const product = await Products.findById(id).populate("category_id");
    return NextResponse.json({ products: product }, { status: 200 })
}

export async function PUT(req, { params }) {
    const { id } = await params;
    const formData = await req.formData();
    const productName = formData.get("productName");
    const description = formData.get("description");
    const price = formData.get("price");
    const quantity = formData.get("quantity");
    const categoryID = formData.get("categoryID");
    const fileImge = formData.get("fileImge");

    await connectMongo();

    const imgID = await Products.findById(id).select("image_url");
    console.log(imgID);
    
    return NextResponse.json({message: "OK"}, { status: 200 });
}