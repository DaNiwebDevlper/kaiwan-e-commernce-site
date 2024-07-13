import { signIn } from 'next-auth/react'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

const Login = () => {
    return (
        <div className='min-h-screen grid place-content-center'>
            <button className='flex gap-2 px-8 py-4 text-md hover:text-white shadow-lg items-center border rounded-xl dark:hover:bg-rose-500 hover:bg-black' onClick={() => signIn("google")}>
                <FaGoogle className='text-2xl' /> Sign In with Google
            </button>

        </div>
    )
}

export default Login