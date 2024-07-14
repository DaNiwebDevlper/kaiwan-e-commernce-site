import { NextResponse } from "next/server";
import registerModel from "../../../../libs/models/Register";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectDB } from "../../../../libs/config/db";

export async function POST(req) {
    await connectDB
    const { email, password } = await req.json();
    if ([email, password].some((field) => field?.trim() === "")) {
        return NextResponse.json({ "msg": "All fields are required" });
    }

    if (password?.length < 8) {
        return NextResponse.json({ "msg": "Password must be at least 8 characters" });
    }

    const isUserExist = await registerModel.findOne({ email });
    if (!isUserExist) {
        return NextResponse.json({ "msg": "Provide correct credentials" });
    }

    const comparePassword = await bcrypt.compare(password, isUserExist.password);
    if (!comparePassword) {
        return NextResponse.json({ "msg": "Provide correct credentials" });
    }

    const jwtSecret = process.env.JWT_SECRET_KEY;
    const generateToken = await jwt.sign({ id: isUserExist._id, email: isUserExist.email }, jwtSecret);

    return NextResponse.json({ token: generateToken, "msg": "Login successfully", user: { email: isUserExist.email, name: isUserExist.name } });
}
