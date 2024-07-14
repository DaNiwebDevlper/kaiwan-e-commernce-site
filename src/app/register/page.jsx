"use client"
import RegisterForm from '@/components/register/RegisterForm'
import { makeToast } from '@/utils/Helper'
import { useRouter } from 'next/navigation'


const RegisterPage = () => {
    const router = useRouter()

    const formHandler = async (e) => {
        e.preventDefault()
        const values = e.currentTarget
        const { name, email, password } = Object.fromEntries(new FormData(values))

        const res = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({ name, email, password })
        })
        console.log('====================================');
        console.log(name, email, password);
        console.log('====================================');
        const result = await res.json()
        if (!result.success) {
            return makeToast(result.msg)
        }
        console.log(result)
        makeToast(result.msg)
        router.push("/login")

    }

    return (
        <>
            <div className="grid place-content-center min-h-[88vh]">

                <RegisterForm submitForm={formHandler} />
            </div>
        </>
    )
}

export default RegisterPage