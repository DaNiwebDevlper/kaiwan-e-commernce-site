"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'
import { errorToast, makeToast } from '@/utils/Helper';

const LoginForm = () => {
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
            if (result.user.email === "kaiwanpharma@gmail.com") {
                router.push('/admin/dashboard')
            } else {
                router.push('/')
            }
        } else {
            errorToast(result.msg)
        }
    }

    return (
        <form className="sm:w-[350px] w-[300px] dark:bg-black bg-slate-50 border-white/20 shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 border" onSubmit={formHandler}>
            <p className='font-madimi text-2xl font-semibold my-5 text-center'>Login Form</p>

            <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" >
                    email
                </label>
                <input className="appearance-none border dark:border-white/20 rounded-lg w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight text-sm focus:outline outline-white/60" id="email" name='email' type="email" placeholder="email" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" >
                    Password
                </label>
                <input className="appearance-none border dark:border-white/20 rounded-lg w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight text-sm focus:outline outline-white/60" id="password" name='password' type="password" placeholder="password..." />
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-full text-center text-sm font-madimi focus:shadow-outline" type="submit">
                    login
                </button>
            </div>
            <div className="h-[1px] w-full bg-slate-400 mt-4"></div>
            <p className='text-sm my-3'>Don&apos;t have account <Link href="/register" className='underline text-blue-500 font-semibold'>Register</Link></p>
        </form>
    );
}

export default LoginForm;
