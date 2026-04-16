import { NextResponse } from "next/server";
import { connectMongo } from "../../../../../lib/mongoConnect";
import Products from "../../../../../model/products";
import Category from "../../../../../model/category";
import { storage, ID } from "../../../../lib/appwriteConnect";
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

    const bufferFile = Buffer.from(await fileImge.arrayBuffer());
    
    const resAppWrite = await storage.createFile(process.env.BUSKET_ID, ID.unique(),InputFile.fromBuffer(bufferFile, fileImge.name));
    
    await connectMongo();
    await Products.create({
        name: productName,
        description: description,
        price: price,
        quantity: quantity,
        category_id: categoryID,
        image_url: resAppWrite.$id
    });
    
    return NextResponse.json({message: "OK"}, { status: 200 });
}