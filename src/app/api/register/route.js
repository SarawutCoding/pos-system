import { connectMongo } from "../../../../lib/mongoConnect";
import User from "../../../../model/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function POST(res) {
    const { userName, email, password } = await res.json();
    const hashPassword = await bcrypt.hash(password, 10);
    await connectMongo();
    await User.create({ username:userName, email, password:hashPassword });
    return NextResponse.json({ message: "API OK" } , { status: 200 })
}