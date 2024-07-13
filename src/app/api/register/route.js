import "../../../../libs/config/db";
import { NextResponse } from "next/server";
import registerModel from "../../../../libs/models/Register";
import bcrypt from "bcrypt"

export async function POST(req) {
    const { name, email, password } = await req.json();
    if ([name, email, password].some((field) => field?.trim() === "")) {
        return NextResponse.json({ "success": null, "msg": "All fields are require" })
    }

    if (password?.length < 8) {
        return NextResponse.json({ "success": null, "msg": "password aleast 8 characters" })
    }
    const isUserExist = await registerModel.findOne({ email })
    if (isUserExist) {
        return NextResponse.json({ "success": null, "msg": "User already exist" })
    }
    const generatePasswordHashing = await bcrypt.hash(password, 10)
    const registerUser = await registerModel.create({
        name, email, password: generatePasswordHashing
    })
    if (!registerUser) {
        return NextResponse.json({ "success": null, "msg": "error to regoster" })
    }

    return NextResponse.json({ "success": true, "msg": "register sucessfully" })

}