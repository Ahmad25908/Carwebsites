'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useMemo, useTransition } from 'react';
import { client } from '@/sanity/lib/client';
import { getAllCarsQuery, getAllBrandsQuery } from '@/sanity/lib/queries';
import SearchBar from '@/components/searchbar';
import { Car, Brand } from '@/types';

export default function CarMenuPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [carData, brandData] = await Promise.all([
          client.fetch(getAllCarsQuery),
          client.fetch(getAllBrandsQuery),
        ]);
        setCars(carData);
        setBrands(brandData);
      } catch {
        setError('Failed to load car data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const brandMatch = !selectedBrand || car.brand?.slug?.current === selectedBrand;
      const searchMatch =
        !searchTerm ||
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.description.toLowerCase().includes(searchTerm.toLowerCase());
      return brandMatch && searchMatch;
    });
  }, [cars, selectedBrand, searchTerm]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-yellow-400">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen px-4 pb-16">
      <h1 className="text-center text-4xl font-extrabold text-yellow-500 mb-6">
        Our Premium Cars
      </h1>

      {/* Brand Filters */}
      <div className="flex gap-2 overflow-x-auto py-3 px-4 bg-gray-900 border-b border-yellow-500 shadow-md rounded-md">
        <button
          onClick={() => startTransition(() => setSelectedBrand(null))}
          className={`px-4 py-2 whitespace-nowrap border rounded-full text-sm font-medium transition-all duration-200 ${
            selectedBrand === null
              ? 'bg-yellow-500 text-black border-yellow-500 shadow'
              : 'border-yellow-300 text-yellow-500 hover:bg-yellow-400 hover:text-black'
          }`}
        >
          All
        </button>

        {brands.map((brand) => (
          <button
            key={brand._id}
            onClick={() => startTransition(() => setSelectedBrand(brand.slug.current))}
            className={`px-4 py-2 whitespace-nowrap border rounded-full text-sm font-medium transition-all duration-200 ${
              selectedBrand === brand.slug.current
                ? 'bg-yellow-500 text-black border-yellow-500 shadow'
                : 'border-yellow-300 text-yellow-500 hover:bg-yellow-400 hover:text-black'
            }`}
          >
            {brand.title}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <SearchBar value={searchTerm} onChange={(value) => startTransition(() => setSearchTerm(value))} />

      {/* Car Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {filteredCars.map((car, i) => (
          <Link href={`/car/${car.slug.current}`} key={car._id}>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-md hover:shadow-yellow-500/30 transition-transform transform hover:scale-[1.03] duration-300 ease-in-out overflow-hidden">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={car.mainImage}
                  alt={car.name}
                  fill
                  loading={i < 2 ? 'eager' : 'lazy'}
                  className="object-cover rounded-t-xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 text-white">
                <h3 className="text-lg font-semibold text-yellow-400 truncate">{car.name}</h3>
                <p className="text-sm text-gray-300 line-clamp-2">{car.description}</p>
                <p className="mt-2 text-yellow-300 font-bold text-lg">${car.price}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {car.tags?.map((tag) => (
                    <span key={tag} className="text-xs bg-yellow-200 text-gray-900 px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
