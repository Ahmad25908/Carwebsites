"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-800 text-white py-12 shadow-inner">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Logo and Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="mr-3 transform transition-transform duration-500 hover:scale-125 hover:rotate-6">
                <svg
                  className="w-12 h-12 text-yellow-400 hover:text-yellow-500 transition duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 12l6-6 6 6M12 6v12"
                    stroke="gold"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-3xl font-extrabold text-white tracking-wide hover:text-yellow-500 transition duration-300">
                LuxCars
              </span>
            </div>

            {/* Contact Links */}
            <div className="space-y-2">
              <Link href="tel:01244911366" className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300">
                <Phone className="h-4 w-4" />
                03244109392
              </Link>
              <Link href="mailto:hello@luxcars.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300">
                <Mail className="h-4 w-4" />
                hello@luxcars.com
              </Link>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <address className="not-italic hover:text-yellow-400 transition-colors duration-300">
                  10 St. John Street, Chester, CH1 1DA
                </address>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 pt-4">
              <Link href="#" className="hover:text-yellow-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-yellow-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-yellow-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-yellow-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">OUR SERVICES</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-yellow-400 transition-colors duration-300">Ecommerce Solutions</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors duration-300">Website Development</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors duration-300">Car Leasing</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">EXPLORE</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-yellow-400 transition-colors duration-300">Models</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors duration-300">Dealerships</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">LEGAL</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-yellow-400 transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors duration-300">Terms of Service</Link></li>
            </ul>
          </div>
          
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-center md:text-left">
          <span>© LuxCars Ltd 2024. All rights reserved.</span>
          <span className="block md:inline md:ml-6"><Link href="#" className="hover:text-yellow-400 transition-colors duration-300">Web Design by LuxCars</Link></span>
        </div>
      </div>
    </footer>
  );
}
