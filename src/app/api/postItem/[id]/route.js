import { NextResponse } from "next/server";
import { connectMongo } from "../../../../../lib/mongoConnect";
import Products from "../../../../../model/products";
import Category from "../../../../../model/category";

export async function GET(req, { params }) {
    const { id } = await params;
    await connectMongo();
    const product = await Products.findById(id).populate("category_id");
    return NextResponse.json({ products: product }, { status: 200 })
}