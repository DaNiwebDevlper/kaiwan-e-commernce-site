import React from 'react'

const PaymentSuccessPage = () => {
    return (
        <div className='min-h-[85vh] grid place-content-center w-full'>
            <div className="sm:w-[500px] w-[300px] border shadow-lg rounded-xl p-5 min-h-[300px] flex flex-col justify-center items-center">
                <h4 className='sm:text-3xl text-xl flex font-semibold text-center mb-5 text-green-500 '>💝 Congratulations 🎉</h4>
                <p className='text-center'>Your Order is placed successfully. For more details conact us: 0370-4381300</p>
            </div>
        </div>
    )
}

export default PaymentSuccessPage