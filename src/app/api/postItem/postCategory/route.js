import { NextResponse } from "next/server";
import { connectMongo } from "../../../../../lib/mongoConnect";
import Category from "../../../../../model/category";

export async function POST(res) {
    const { categoryName } = await res.json();
    connectMongo();
    await Category.create({ name: categoryName })
    return NextResponse.json({ message: "OK" }, { status: 200 })
}