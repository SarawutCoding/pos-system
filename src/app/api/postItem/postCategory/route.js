import { NextResponse } from "next/server";
import { connectMongo } from "../../../../../lib/mongoConnect";
import Category from "../../../../../model/category";

export async function POST(res) {
    const { categoryName } = await res.json();
    connectMongo();
    await Category.create({ name: categoryName })
    return NextResponse.json({ message: "OK" }, { status: 200 })
}

export async function GET() {
    connectMongo();
    const category = await Category.find({});
    return NextResponse.json({categorys: category}, { message: "OK" }, { status: 200 })
}