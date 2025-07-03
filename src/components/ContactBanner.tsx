"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactBanner() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-black overflow-hidden mt-16">
      {/* Optional Background Image */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/images/car-banner.jpg"
          alt="Car background pattern"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-white"
        >
          Contact AutoDrive Showroom
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg sm:text-xl text-gray-300"
        >
          We are here to help you drive your dream. Get in touch today!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-6"
        >
          <Link
            href="#contact-details"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            See Location & Hours
          </Link>
        </motion.div>
      </div>

      {/* Decorative SVG */}
      <div className="absolute bottom-0 w-full">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[50px] text-black"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C480,100 960,0 1440,100 L1440,00 L0,0 Z" />
        </svg>
      </div>
    </section>
  );
}
