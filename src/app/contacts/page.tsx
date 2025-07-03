"use client";

import Link from "next/link";
import { Phone, MapPin, MessageCircle, SendHorizonal } from "lucide-react";
import ContactBanner from "@/components/ContactBanner";

const ContactPage = () => {
  const googleMapEmbed =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27221.27303622582!2d74.31320349999999!3d31.5203691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904d6721b1d63%3A0x29f37f899d32d186!2sCake%20Street!5e0!3m2!1sen!2s!4v1717345135176!5m2!1sen!2s";

  return (
    <div className="bg-gray-900 text-white">
      <ContactBanner />

      {/* MAP + INFO */}
      <section id="contact-details" className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Embedded Map */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-yellow-500">
          <iframe
            src={googleMapEmbed}
            className="w-full h-[300px] md:h-[400px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AutoDrive Location"
            aria-label="Google Map of AutoDrive"
          />
        </div>

        {/* Showroom Info */}
        <div className="space-y-6 self-center">
          <h2 className="text-2xl font-bold text-yellow-400">Visit Our Showroom</h2>
          <div className="flex items-start gap-4">
            <MapPin className="text-yellow-400 mt-1" />
            <p>
              Main Boulevard AutoTown,
              <br /> Lahore, Pakistan
            </p>
          </div>
          <div className="text-sm text-gray-300">
            <p>🕒 Open: Mon–Sat 9 AM – 7 PM</p>
            <p>❌ Sunday: Closed</p>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone Card */}
        <Link
          href="tel:+1256653657"
          className="bg-gray-800 border border-yellow-500 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
          <div className="flex items-center gap-4">
            <Phone className="text-yellow-400" />
            <div>
              <h3 className="font-semibold text-lg">Call Us</h3>
              <p className="text-sm text-gray-300">0324-4109392</p>
            </div>
          </div>
        </Link>

        {/* WhatsApp Card */}
        <Link
          href="https://wa.me/923001234567"
          target="_blank"
          className="bg-gray-800 border border-yellow-500 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
          <div className="flex items-center gap-4">
            <MessageCircle className="text-yellow-400" />
            <div>
              <h3 className="font-semibold text-lg">WhatsApp Us</h3>
              <p className="text-sm text-gray-300">Click to open chat</p>
            </div>
          </div>
        </Link>
      </section>

      {/* Floating WhatsApp Button */}
      <Link
        href="https://wa.me/923001234567"
        target="_blank"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Chat with AutoDrive on WhatsApp"
      >
        <SendHorizonal size={18} /> Chat
      </Link>
    </div>
  );
};

export default ContactPage;
