import { NextResponse } from "next/server";
import registerModel from "../../../../libs/models/Register";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectDB } from "../../../../libs/config/db";

export async function POST(req) {
    try {
        await connectDB();
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ msg: "All fields are required" }, { status: 400 });
        }

        if (password.length < 8) {
            return NextResponse.json({ msg: "Password must be at least 8 characters" }, { status: 400 });
        }

        const isUserExist = await registerModel.findOne({ email });
        if (!isUserExist) {
            return NextResponse.json({ msg: "Providde credentials are incorrect" }, { status: 401 });
        }

        const comparePassword = await bcrypt.compare(password, isUserExist.password);
        if (!comparePassword) {
            return NextResponse.json({ msg: "Providde credentials are incorrect" }, { status: 401 });
        }
        const jwtSecret = process.env.JWT_SECRET_KEY;
        const generateToken = jwt.sign({ id: isUserExist._id, email: isUserExist.email }, jwtSecret, { expiresIn: '1h' });

        return NextResponse.json({ token: generateToken, msg: "Login successfully", user: { email: isUserExist.email, name: isUserExist.name } }, { status: 200 });
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ msg: "Internal server error" }, { status: 500 });
    }
}
