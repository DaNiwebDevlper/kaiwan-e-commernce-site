import React from 'react'
import { CardCarousel } from '.'

const FeaturedProducts = () => {
    return (
        <div className='min-h-screen flex flex-col gap-y-5 justify-center items-center'>
            <h1 className='text-3xl font-semibold font-madimi text-center my-5'>Featured Products</h1>

            <CardCarousel />
        </div>
    )
}

export default FeaturedProducts