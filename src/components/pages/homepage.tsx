'use client';

import { Image as IImage } from 'sanity';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Define TypeScript interface for product data structure
interface IProduct {
  title: string;
  slug: string;
  _id: string;
  description: string;
  price: string;
  image: IImage;
  category: { name: string; _id: string };
  rating: number;
}

export default function Home() {
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await client.fetch(`*[_type == "product"]{
        price,
        _id,
        title,
        image,
        category->{
          name,
          _id
        },
        description,
        rating
      }`);
      setData(res);
    };
    fetchData();
  }, []);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-yellow-500 ${i < rating ? 'text-yellow-500' : 'text-gray-500'}`}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <h2 className="text-center text-4xl font-extrabold text-yellow-500 mb-12">Our Premium Products</h2>

      {/* Responsive grid layout for product cards */}
      <div className="grid gap-10 px-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => (
          <Link href={`/product/${item.slug}`} key={item._id} passHref>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-pointer max-w-sm mx-auto">
              
              {/* Smaller Image Container */}
              <div className="w-full h-48 overflow-hidden rounded-t-xl relative">
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Product Details */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                
                {/* Product rating */}
                <div className="flex justify-center mb-2">{renderStars(item.rating)}</div>

                {/* Product price */}
                <p className="text-yellow-500 font-bold text-xl mb-2">${item.price}</p>

                {/* Product category */}
                <p className="text-gray-400 text-sm mb-4">{item.category.name}</p>

                {/* Product description */}
                <p className="text-gray-300 text-sm mb-2 h-16 overflow-hidden">
                  {item.description.length > 80 ? `${item.description.substring(0, 80)}...` : item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
