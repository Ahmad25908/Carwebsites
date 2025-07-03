'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

// Define a list of logo image paths
const logos: string[] = [
  '/images/logos/1satr.jpeg',
  '/images/logos/Alfa.jpeg',
  '/images/logos/B.jpeg',
  '/images/logos/BMW.jpeg',
  '/images/logos/tiger.jpeg',
  '/images/logos/mercides.jpeg',
  '/images/logos/new.jpeg',
  '/images/logos/ody.jpeg',
  '/images/logos/plus.jpeg',
  '/images/logos/sultant.jpeg',
  '/images/logos/viper.jpeg',
];

export default function LogoSlider(): JSX.Element {
  const [offset, setOffset] = useState<number>(0);

  // Update offset periodically to slide logos
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        // Reset offset when it exceeds the total width of the slider
        const totalWidth = logos.length * 180; // Image width
        return prevOffset >= totalWidth ? 0 : prevOffset + 1;
      });
    }, 30); // Controls sliding speed

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div
        className="flex"
        style={{
          transform: `translateX(-${offset}px)`,
          transition: 'transform 0.03s linear', // Smooth sliding effect
        }}
      >
        {/* Duplicate logos to create infinite scrolling */}
        {logos.concat(logos).map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="min-w-[100px] sm:min-w-[140px] md:min-w-[180px] h-[100px] sm:h-[140px] md:h-[180px] flex items-center justify-center px-2 sm:px-4"
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={180}
              height={180}
              style={{ objectFit: 'contain' }}
              className="bg-gray-900 transform transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
