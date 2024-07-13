"use client"
import Image from 'next/image';
import { useRef, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { RiStarSFill, RiStarSLine } from 'react-icons/ri';
import { LuDollarSign } from "react-icons/lu";
import Link from 'next/link';
const CardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const items = [
        { id: 1, title: 'Card 1', imgSrc: "/assets/products/4.png", price: 78, rating: 5 },
        { id: 2, title: 'Sonnpro', imgSrc: "/assets/products/5.png", price: 23, rating: 3 },
        { id: 3, title: 'Card 3', imgSrc: "/assets/products/6.png", price: 99, rating: 3 },
        { id: 4, title: 'Card 4', imgSrc: "/assets/products/7.png", price: 23, rating: 5 },
        { id: 5, title: 'Card 5', imgSrc: "/assets/products/8.png", price: 23, rating: 3 },
        { id: 6, title: 'Card 6', imgSrc: "/assets/products/9.png", price: 20, rating: 3 },
        { id: 7, title: 'Card 7', imgSrc: "/assets/products/10.png", price: 10, rating: 4 },
        { id: 8, title: 'Card 8', imgSrc: "/assets/products/11.png", price: 13, rating: 3 },
    ];

    /// add five star rating

    const renderStars = (rating) => {
        const totalStars = 5
        const stars = []

        for (let i = 0; i < totalStars; i++) {
            if (i < rating) {
                stars.push(
                    <RiStarSFill className='text-xl text-yellow-400' />
                )

            } else {
                stars.push(
                    <RiStarSLine className='text-xl text-slate-300' />
                );
            }
        }
        return stars
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const onDragStart = (e) => {
        e.preventDefault();
        const initialPosition = e.clientX;

        const onDragMove = (moveEvent) => {
            const currentPosition = moveEvent.clientX;
            if (currentPosition - initialPosition > 100) {
                prevSlide();
                document.removeEventListener('mousemove', onDragMove);
            } else if (currentPosition - initialPosition < -100) {
                nextSlide();
                document.removeEventListener('mousemove', onDragMove);
            }
        };

        const onDragEnd = () => {
            document.removeEventListener('mousemove', onDragMove);
            document.removeEventListener('mouseup', onDragEnd);
        };

        document.addEventListener('mousemove', onDragMove);
        document.addEventListener('mouseup', onDragEnd);
    };

    return (
        <div className="relative sm:w-full w-[95%]">
            <div
                className="flex sm:gap-5 overflow-hidden"
                ref={carouselRef}
                onMouseDown={onDragStart}
            >
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={`sm:w-[250px] shrink-0 flex flex-col gap-3 transition-all  duration-300 transform border rounded-xl p-3 ${index === currentIndex ? 'translate-x-0' : 'translate-x-1'
                            }`}
                        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
                    >
                        <div className="overflow-hidden">
                            <Link href="/">
                                <Image src={item.imgSrc} alt='card img' width={300} height={200} className='w-[330px] rounded-lg h-[250px] cursor-pointer hover:scale-150 transition-all duration-200' />
                            </Link>
                        </div>
                        <div className="flex justify-between px-1 items-center">

                            <h1 className='text-md font-semibold font-sarif'>{item.title}</h1>
                            <p className='flex items-center'>{item.price} <span><LuDollarSign className='text-green-500' /></span></p>
                        </div>

                        <div className="flex justify-between  items-center">
                            <button className='px-4 py-2 w-full text-sm rounded-md bg-black/80 hover:bg-[#222] transition-all text-white border dark:bg-transparent border-white/30'>Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-3 rounded-full text-xl transform -translate-y-1/2 p-2 dark:bg-slate-200 bg-black/80 text-white dark:text-black"
                onClick={prevSlide}
            >
                <GrPrevious />
            </button>
            <button
                className="absolute top-1/2 right-3 rounded-full text-xl  transform -translate-y-1/2 p-2 dark:bg-slate-200 bg-black/80 text-white dark:text-black"
                onClick={nextSlide}
            >
                <GrNext />
            </button>
        </div>
    );
};

export default CardCarousel;
