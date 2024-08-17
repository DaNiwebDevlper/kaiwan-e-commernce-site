'use client'
import { useAppSelector } from '@/redux/hooks/hooks'

const Payment = () => {
    const orderDetails = useAppSelector(store => store.order.orderDetails)

    if (!orderDetails) {
        return <p>Order not found</p>
    }

    const { orderId, paymentMethod } = orderDetails

    return (
        <div className='w-full min-h-[90vh] flex flex-col justify-center items-center gap-y-9'>
            <h1 className='text-2xl font-bold my-4 font-madimi text-center'>Your Order is placed successfully🎉</h1>
            <div className="border p-5 sm:w-fit rounded-xl border-black/60 dark:border-slate-500 w-[90%]">
                <p className='text-lg mb-5'>Please note down your <b>Order ID: </b> {orderId}</p>
                {paymentMethod === 'Cash on Delivery' ? (
                    <p className='text-lg font-semibold'>Please prepare the exact amount for cash on delivery.</p>
                ) : (
                    <div>
                        <p className='text-lg font-semibold mb-2'>Please transfer the amount to the following bank account:</p>
                        <p className='flex gap-1'><span className='pl-1 font-bold'>Acc Title: </span>KAIWAN</p>
                        <p>Bank Alfalah- Mianwali Branch</p>
                        <p className='flex gap-1'><span className='pl-1 font-bold'>Account Number:</span>01721008945121</p>
                        <p className='flex gap-1'><span className='pl-1 font-bold'>IBAN: </span>PK46ALFH0172001008945121</p>
                        <p className='flex gap-1'><span className='pl-1 font-bold'>Branch Code:</span> 0172</p>
                        <div className='border border-rose-500 p-3 my-5'>
                            <p className='text-xl font-semibold text-rose-500 mb-2'>
                                Note:
                            </p>
                            <p className='text-md text-black/80 dark:text-slate-400'>
                                Add the order ID as a reference number. If you do not add it, the payment will not be accepted.<br />For more details contact us: 0370-4381300
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Payment
