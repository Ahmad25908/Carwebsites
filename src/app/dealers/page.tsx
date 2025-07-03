"use client";
import Image from 'next/image';
import { useState, ChangeEvent } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Define a TypeScript interface for the car data
interface Car {
  model: string;
  year: number;
  mileage: string;
  price: string;
  image: string;
}

const DealerShips = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all'); // State to manage filter selection

  // Array of cars to display in the "Featured Cars" section
  const cars: Car[] = [
    { model: 'Car A', year: 2022, mileage: '10k miles', price: '$30,000', image: '/images/car1.jpg' },
    { model: 'Car B', year: 2021, mileage: '15k miles', price: '$25,000', image: '/images/car2.jpg' },
    { model: 'Car C', year: 2020, mileage: '20k miles', price: '$20,000', image: '/images/car3.jpg' },
    // Add additional car objects here
  ];

  // Filter handler to update selected filter
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <div className="bg-gray-900 text-white font-sans mt-20">
      {/* Dealer Banner Section */}
      <section className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] bg-cover bg-center transition-all duration-1000 ease-in-out transform" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
  <div className="absolute inset-0 bg-black opacity-60" /> {/* Dark overlay for readability */}
  
  <div className="relative z-10 flex flex-col items-center text-center py-8 sm:py-12 md:py-20 px-4">
    {/* Profile Image with Hover Effect */}
    <Image 
      src="/images/dealer.jpg" 
      alt="Dealer Profile" 
      width={200} 
      height={200} 
      className="w-20 h-20 sm:w-36 sm:h-36 rounded-full border-4 border-gray-800 shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out" 
    />
    
    {/* Dealer's Name */}
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-white sm:text-shadow-md md:text-shadow-lg">
      Dealer-Ahmad Hassan
    </h1>
    
    {/* Dealer's Description */}
    <p className="text-sm sm:text-md md:text-lg mt-2 text-gray-300">
      Luxury & Pre-Owned Car Specialist
    </p>

    {/* Call-to-Action Buttons */}
    <div className="mt-6 justify-center space-x-4 sm:space-x-6 md:space-x-8 md:flex hidden">
      <a href="#contact" className="bg-zinc-500 text-gray-900 px-6 py-2 rounded-full text-lg font-semibold hover:bg-zinc-400 transition-all duration-300">
        Contact Now
      </a>
      <a href="#about" className="bg-transparent border-2 border-zinc-500 text-zinc-500 px-6 py-2 rounded-full text-lg font-semibold hover:bg-zinc-500 hover:text-gray-900 transition-all duration-300">
        Learn More
      </a>
    </div>
  </div>
</section>
  

      {/* Dealer Information and Contact Section */}
      <section className="text-center py-8 sm:py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold">About the Dealer</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
        With over 10 years of experience in the automotive industry, Ahmad Hassan offers an unmatched selection of luxury, sports, and family vehicles. His personalized approach ensures that each customer finds the perfect vehicle to match their needs and lifestyle. Ahmad is dedicated to providing exceptional service, making every step of the car-buying process smooth and hassle-free. Whether you are looking for a high-end luxury car or a reliable pre-owned vehicle, Ahmad Hassan is your trusted expert.


        </p>
        <div className="flex justify-center space-x-4 sm:space-x-6 mt-8">
          <a href="tel:+1234567890" aria-label="Call Dealer" className="text-yellow-400 hover:text-white">
            <FaPhoneAlt size={24} />
          </a>
          <a href="mailto:dealer@example.com" aria-label="Email Dealer" className="text-yellow-400 hover:text-white">
            <FaEnvelope size={24} />
          </a>
          <a href="#" aria-label="Dealer Location" className="text-yellow-400 hover:text-white">
            <FaMapMarkerAlt size={24} />
          </a>
        </div>
        <div className="mt-4 space-x-4">
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
        </div>
      </section>

      {/* Featured Cars by Dealer */}
      <section className="py-8 sm:py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Featured Cars</h2>
        {/* Filter Dropdown */}
        <div className="text-center mt-4 sm:mt-6">
          <select
            onChange={handleFilterChange}
            className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded"
            value={selectedFilter}
          >
            <option value="all">All Cars</option>
            <option value="price">Sort by Price</option>
            <option value="year">Sort by Year</option>
          </select>
        </div>
        {/* Car Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
          {cars.map((car, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
              <Image src={car.image} alt={car.model} width={300} height={200} className="rounded" />
              <h3 className="text-lg sm:text-xl font-bold mt-4">{car.model}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{car.year} - {car.mileage}</p>
              <p className="text-yellow-400 font-bold text-sm sm:text-base">{car.price}</p>
              <div className="mt-4 flex space-x-2 sm:space-x-4">
                <button className="bg-yellow-400 text-gray-900 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm">View Details</button>
                <button className="bg-gray-700 text-gray-400 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm">Compare</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personalized Video Introduction Section */}
      <section className="text-center py-8 sm:py-12 px-4 bg-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold">Meet Your Dealer</h2>
        <p className="mt-2 text-gray-400 text-sm sm:text-base">Watch a quick video to learn more about John’s dedication to top-quality service.</p>
        <div className="relative mt-4 sm:mt-6">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/sample_video" title="Dealer Video" className="mx-auto rounded-lg shadow-lg" allowFullScreen></iframe>
        </div>
      </section>

      {/* Dealer Reviews & Testimonials */}
      <section className="py-8 sm:py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Customer Reviews</h2>
        <div className="mt-6 sm:mt-8 flex space-x-4 sm:space-x-6 overflow-x-auto">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg min-w-[250px] sm:min-w-[300px]">
            <p className="text-gray-300 text-sm sm:text-base">Buying a car from Ahmad Hassan was a great decision. The quality of the car is exceptional, and the attention to detail during the buying process was outstanding. Ahmad ensured everything was taken care of, making the whole experience stress-free. Highly recommend! – Mark T.</p>
            <p className="mt-2 font-bold text-xs sm:text-sm"> – Sarah J.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg min-w-[250px] sm:min-w-[300px]">
            <p className="text-gray-300 text-sm sm:text-base">I recently purchased a car from Ahmad Hassan, and the experience was fantastic. The vehicle is in perfect condition, and the service was incredibly professional. Ahmad made the entire process smooth and easy. I could not have asked for a better experience!</p>
            <p className="mt-2 font-bold text-xs sm:text-sm">- Fatma</p>
          </div>
        </div>
      </section>

      {/* Dealer Services and Benefits Section */}
      <section className="py-8 sm:py-12 px-4 bg-gray-900 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Services Offered</h2>
        <div className="flex flex-wrap justify-center mt-6 sm:mt-8 space-x-4">
          <div className="p-4 bg-gray-800 rounded-lg shadow-md w-36 sm:w-48">
            <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Financing Options</h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-2">Affordable plans tailored to your needs.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md w-36 sm:w-48">
            <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Vehicle Inspections</h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-2">Full inspection with every purchase.</p>
          </div>
          {/* Add more services as needed */}
        </div>
      </section>
    </div>
  );
};

export default DealerShips;