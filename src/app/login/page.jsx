'use client'
import Form from '@/components/login/Form'
import React from 'react'

const Login = () => {
    const formHandler = (e) => {
        e.preventDefault()
        // const value = e.target.value
        const formData = new FormData(e.currentTarget)
        console.log(formData);
    }

    return (
        <>
            <Form submitForm={formHandler} />
        </>
    )
}

export default Login