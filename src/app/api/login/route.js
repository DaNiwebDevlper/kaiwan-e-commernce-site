import "../../../../libs/config/db";
import { NextResponse } from "next/server";
import registerModel from "../../../../libs/models/Register";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function POST(req) {
    const { email, password } = await req.json();
    if ([email, password].some((field) => field?.trim() === "")) {
        return NextResponse.json({ "msg": "All fields are require" })
    }

    if (password?.length < 8) {
        return NextResponse.json({ "msg": "password aleast 8 characters" })
    }

    const isUserExist = await registerModel.findOne({ email })
    if (!isUserExist) {
        return NextResponse.json({ "msg": "Provide correct credentiall" })
    }

    const comparePassword = await bcrypt.compare(password, isUserExist.password)
    if (!comparePassword) {
        return NextResponse.json({ "msg": "Provide correct credentiall" })
    }
    const jwtSecret = "abcdefgh"
    const generateToken = await jwt.sign(isUserExist._id, jwtSecret)

    return NextResponse.json({ token: generateToken, "msg": "login sucessfully" })

}