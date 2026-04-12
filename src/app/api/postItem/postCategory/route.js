import { NextResponse } from "next/server";

export async function POST(res) {
    const { categoryName } = await res.json();
    console.log(categoryName);
    return NextResponse.json({ message: "OK" }, { status: 200 })
}