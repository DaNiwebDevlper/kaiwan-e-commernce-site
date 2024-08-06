'use client'
import { useState, useEffect, useCallback } from 'react'
import { MdNavigateNext } from 'react-icons/md'
import { GrFormPrevious } from 'react-icons/gr'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const TestimonialSlider = ({ testimonials }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [animationDirection, setAnimationDirection] = useState(1)

    //// animation
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.8 }
            }
        },
        exit: (direction) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.8 }
            }
        })
    }

    const nextSlide = useCallback(() => {
        setAnimationDirection(1)
        setCurrentSlide(prevSlide => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1))
    }, [testimonials.length])

    const prevSlide = useCallback(() => {
        setAnimationDirection(-1)
        setCurrentSlide(prevSlide => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1))
    }, [testimonials.length])

    /////// auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval)
    }, [nextSlide])

    return (
        <div className='p-9 min-h-screen'>
            <div className='my-9'>
                <h1 className='sm:text-4xl text-3xl font-semibold'>
                    Hear <span className='text-[#AEB2BA]'>What</span> Others Have to Say
                </h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='sm:w-[60%] w-full relative flex items-center justify-center flex-col'>
                    <div className='w-full min-h-[400px] p-5 rounded-xl shadow border flex items-center justify-center flex-col gap-5 overflow-hidden'>
                        <AnimatePresence initial={false} custom={animationDirection}>
                            <motion.div
                                key={currentSlide}
                                custom={animationDirection}
                                variants={variants}
                                initial='enter'
                                animate='center'
                                exit='exit'
                                className='absolute w-full flex items-center justify-center flex-col gap-5'
                            >
                                <p className='text-gray-600 dark:text-gray-400 font-sans text-center sm:w-[550px] w-[270px] text-sm sm:text-lg'>
                                    {testimonials[currentSlide].text}
                                </p>
                                <div className='w-[100px] h-[100px] border-2 rounded-full overflow-hidden'>
                                    <Image
                                        src={testimonials[currentSlide].imgSrc}
                                        alt='testimonial'
                                        width={100}
                                        height={100}
                                        className='object-cover'
                                    />
                                </div>
                                <div className='text-center'>
                                    <h2 className='text-xl font-bold mb-2'>
                                        {testimonials[currentSlide].name}
                                    </h2>

                                    <p className='text-lg text-gray-600 dark:text-gray-400'>
                                        {testimonials[currentSlide].title}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className='absolute inset-y-0 left-0 flex items-center'>
                        <button
                            onClick={prevSlide}
                            className='p-1 text-black dark:text-white rounded-lg bg-slate-300 dark:bg-gray-500 text-3xl'
                        >
                            <GrFormPrevious />
                        </button>
                    </div>
                    <div className='absolute inset-y-0 right-0 flex items-center'>
                        <button
                            onClick={nextSlide}
                            className='p-1 text-black dark:text-white rounded-lg bg-slate-300 dark:bg-gray-500 text-3xl'
                        >
                            <MdNavigateNext />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSlider
