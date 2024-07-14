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
        <div className="relative w-full overflow-hidden">
            <div className="overflow-hidden relative sm:h-[90vh] w-full h-[250px] p-5 ">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-transform transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}
                        style={{ transitionDuration: '1000ms' }}
                    >
                        <Image src={image.imgSrc} fill alt={`Slide ${index}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <button
                onClick={prevImage}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 bg-opacity-50 hover:bg-opacity-100 transition-opacity rounded-full"
            >
                <GrPrevious />
            </button>
            <button
                onClick={nextImage}
                className="absolute top-1/2 rounded-full right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 bg-opacity-50 hover:bg-opacity-100 transition-opacity"
            >
                <GrNext />
            </button>
        </div>
    );
};

export default ImageCarousel;
