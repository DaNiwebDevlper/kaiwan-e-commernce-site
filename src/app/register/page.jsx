"use client"
import RegisterForm from '@/components/register/RegisterForm'
import { makeToast } from '@/utils/Helper'
import axios from 'axios'
import React from 'react'

const page = () => {
    const formHandler = async (e) => {
        e.preventDefault()
        const values = e.currentTarget
        const { name, email, password } = Object.fromEntries(new FormData(values))

        const res = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({ name, email, password })
        })

        const result = await res.json()
        if (!result.success) {
            return makeToast(result.msg)
        }
        makeToast(result.msg)
    }

    return (
        <>
            <RegisterForm submitForm={formHandler} />
        </>
    )
}

export default page