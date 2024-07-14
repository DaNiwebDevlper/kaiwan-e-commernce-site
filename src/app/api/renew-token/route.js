// pages/api/renew-token.js
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function POST(req) {
    const token = req.cookies.get('token')
    const jwtSecret = process.env.JWT_SECRET_KEY

    if (!token) {
        return NextResponse.json({ msg: 'No token provided' }, { status: 400 })
    }

    try {
        const decoded = jwt.verify(token, jwtSecret)
        const newToken = jwt.sign({ userId: decoded.userId }, jwtSecret, { expiresIn: '2w' })
        return NextResponse.json({ token: newToken })
    } catch (err) {
        return NextResponse.json({ msg: 'Invalid token' }, { status: 401 })
    }
}
