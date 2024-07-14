import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function middleware(req) {
    const token = req.cookies.get('token')
    const jwtSecret = process.env.JWT_SECRET_KEY

    if (!token) {
        return NextResponse.redirect('/login')
    }

    try {
        const verified = jwt.verify(token, jwtSecret)
        if (!verified) {
            return NextResponse.redirect('/login')
        }
    } catch (err) {
        return NextResponse.redirect('/login')
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/dashboard', '/admin/addProducts'], // add the routes you want to protect
}
