import { NextResponse } from "next/server";
import registerModel from "../../../../libs/models/Register";
import bcrypt from "bcrypt";
import { connectDB } from "../../../../libs/config/db";

export async function POST(req) {
    try {
        await connectDB();
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({ success: null, msg: "All fields are required" }, { status: 400 });
        }

        if (password.length < 8) {
            return NextResponse.json({ success: null, msg: "Password must be at least 8 characters long" }, { status: 400 });
        }

        const isUserExist = await registerModel.findOne({ email });
        if (isUserExist) {
            return NextResponse.json({ success: null, msg: "User already exists" }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await registerModel.create({
            name, email, password: hashedPassword
        });

        if (!newUser) {
            return NextResponse.json({ success: null, msg: "Error in registering" }, { status: 500 });
        }

        return NextResponse.json({ success: true, msg: "Registered successfully" }, { status: 201 });
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json({ success: null, msg: "Internal server error" }, { status: 500 });
    }
}
