'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

// Define a list of car images for the sliding gallery
const carImages: string[] = [
  '/images/car1.jpg',
  '/images/car2.jpg',
  '/images/car3.jpg',
  '/images/car4.jpg',
  '/images/car5.jpg',
];

export default function CarSlider(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Slide to the next image every 3.5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carImages.length);
    }, 3500);

    return () => clearInterval(slideInterval);
  }, []); // Dependency array is empty as the interval function doesn't depend on state or props

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % carImages.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + carImages.length) % carImages.length);
  };

  return (
    <section className="relative w-full bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 px-4 sm:px-8 mt-16">
      <div className="overflow-hidden relative max-w-full mx-auto">
        {/* Slide Images */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carImages.map((src, index) => (
            <div
              key={index}
              className="min-w-full h-[200px] sm:h-[350px] md:h-[500px] lg:h-[600px] relative"
            >
              <Image
                src={src}
                alt={`Car ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                className="rounded-lg shadow-lg"
                priority={index === 0} // Prioritize the first image
              />
            </div>
          ))}
        </div>

        {/* Previous and Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-gray-700 bg-opacity-60 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-80 transition"
          aria-label="Previous Slide"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-gray-700 bg-opacity-60 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-80 transition"
          aria-label="Next Slide"
        >
          &#10095;
        </button>

        {/* Dots for slide navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-gray-400'
              } transition`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
