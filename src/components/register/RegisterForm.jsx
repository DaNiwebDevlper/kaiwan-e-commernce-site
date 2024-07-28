import Link from 'next/link'


const RegisterForm = ({ submitForm }) => {
    return (
        <form className="sm:w-[350px] w-[300px] border my-5 dark:bg-black bg-slate-50 border-white/20 shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 " onSubmit={submitForm}>
            <p className='font-madimi text-2xl font-semibold my-5 text-center'>Registration Form</p>
            <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-500 text-sm font-bold mb-2" >
                    Name
                </label>
                <input className="appearance-none border dark:border-white/20 rounded-lg w-full py-2 px-3 text-gray-700 dark:text-slate-300 leading-tight text-sm focus:outline outline-white/60" id="name" name='name' type="text" placeholder="name" required />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                    email
                </label>
                <input className="appearance-none border dark:border-white/20 rounded-lg w-full py-2 px-3 text-gray-700 dark:text-slate-300 leading-tight text-sm focus:outline outline-white/60" id="email" name='email' type="email" placeholder="email" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Password
                </label>
                <input className="appearance-none border dark:border-white/20 rounded-lg w-full py-2 px-3 text-gray-700 dark:text-slate-300 leading-tight text-sm focus:outline outline-white/60" id="password" name='password' type="password" placeholder="password..." />

            </div>
            <div className="flex items-center justify-between">
                <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-full text-center text-sm font-madimi focus:shadow-outline" type="submit">
                    Register
                </button>
            </div>
            <div className="h-[1px] w-full bg-slate-400 mt-4"></div>
            <p className='text-sm my-3'>Already have account <Link href="/login" className='underline text-blue-500 font-semibold'>Login</Link></p>
        </form>
    )
}

export default RegisterForm