"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full flex justify-center items-center overflow-hidden">
            <div className="overflow-hidden relative sm:w-[93%] sm:h-[85vh] w-full h-[250px] p-5">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-transform transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}
                        style={{ transitionDuration: '1000ms' }}
                    >
                        <Image src={image.imgSrc} loading='lazy' fill alt={`Slide ${index}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <button
                onClick={prevImage}
                className="absolute top-1/2 left-1"
            >
                <GrPrevious size={40} className='opacity-50  hover:opacity-100 transition-all' />
            </button>
            <button
                onClick={nextImage}
                className="absolute top-1/2 right-1  "
            >
                <GrNext size={40} className='opacity-50  hover:opacity-100 transition-all' />
            </button>
        </div>
    );
};

export default ImageCarousel;
