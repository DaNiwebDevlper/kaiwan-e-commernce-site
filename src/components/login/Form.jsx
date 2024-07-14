import Link from 'next/link';
import React from 'react';

const Form = ({ submitForm }) => {
    return (
        <form className="sm:w-[350px] w-[300px] dark:bg-black bg-slate-50 border-white/20 shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 border" onSubmit={submitForm}>
            <p className='font-madimi text-2xl font-semibold my-5 text-center'>Login Form</p>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                    email
                </label>
                <input className="appearance-none border dark:border-white/20 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight text-sm focus:outline outline-white/60" id="email" name='email' type="email" placeholder="email" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Password
                </label>
                <input className="appearance-none border dark:border-white/20 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight text-sm focus:outline outline-white/60" id="password" name='password' type="password" placeholder="password..." />
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

export default Form;
