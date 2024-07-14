import { NextResponse } from "next/server";
import registerModel from "../../../../libs/models/Register";
import bcrypt from "bcrypt"
import { connectDB } from "../../../../libs/config/db";

export async function POST(req) {
    await connectDB()
    const { name, email, password } = await req.json();

    if ([name, email, password].some((field) => field?.trim() === "")) {
        return NextResponse.json({ "success": null, "msg": "All fields are required" });
    }
    // to check the password is not less then 8
    if (password?.length < 8) {
        return NextResponse.json({ "success": null, "msg": "Password must be at least 8 characters long" });
    }

    // to check the email is already exist

    const isUserExist = await registerModel.findOne({ email });
    if (isUserExist) {
        return NextResponse.json({ "success": null, "msg": "User already exists" });
    }

    /// password hashing 

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await registerModel.create({
        name, email, password: hashedPassword
    });

    if (!newUser) {
        return NextResponse.json({ "success": null, "msg": "Error in registering" });
    }

    return NextResponse.json({ "success": true, "msg": "Registered successfully" });
}
