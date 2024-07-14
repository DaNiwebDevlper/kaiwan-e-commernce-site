'use client'
import Form from '@/components/login/Form'
import React from 'react'
import { makeToast } from '@/utils/Helper'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

const Login = () => {
    const router = useRouter()

    const formHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })

        const result = await res.json()
        if (result.token) {
            Cookies.set('token', result.token, { expires: 14 }) // Save token for 2 weeks
            Cookies.set('user', JSON.stringify(result.user), { expires: 14 }) // Save user info
            makeToast(result.msg)
            if (result.user.email === "343danish@gmail.com") {
                router.push('/admin/dashboard')
            } else {
                router.push('/')
            }
        } else {
            makeToast(result.msg)
        }
    }

    return (
        <div className="grid min-h-[88vh] place-content-center">
            <Form submitForm={formHandler} />
        </div>
    )
}

export default Login
