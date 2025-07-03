
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { Car } from '@/types';
// import { useCart } from '@/context/CartContext';
// // import toast from 'react-hot-toast';
// import { toast } from 'sonner'; // ✅ Add this at the top

// export default function CarUI({ car, images }: { car: Car; images: string[] }) {
//   const [selectedImage, setSelectedImage] = useState(images[0]);
//   const [quantity, setQuantity] = useState(1);
//   const [tab, setTab] = useState<'description' | 'details' | 'reviews'>('description');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const { addToCart } = useCart();

//   const totalPrice = (car.price * quantity).toFixed(2);

//   const handleAddToCart = () => {
//     addToCart(car, quantity);
//     toast.success(`${car.name} added to cart!`);
//   };

//   return (
//     <>
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 z-[100] bg-black bg-opacity-80 flex items-center justify-center"
//           onClick={() => setIsModalOpen(false)}
//         >
//           <div className="relative w-[90vw] max-w-4xl h-[80vh]">
//             <Image
//               src={selectedImage}
//               alt="Full Car View"
//               fill
//               className="object-contain rounded-lg"
//               priority
//             />
//           </div>
//         </div>
//       )}

//       <main className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen px-4 pb-16 pt-[96px] text-white">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
//           {/* Image Section */}
//           <div className="flex flex-col gap-4">
//             <div
//               className="relative w-full aspect-video bg-gray-950 rounded-lg overflow-hidden shadow-lg flex items-center justify-center cursor-zoom-in"
//               onClick={() => setIsModalOpen(true)}
//             >
//               <Image
//                 src={selectedImage}
//                 alt={car.name}
//                 width={800}
//                 height={450}
//                 className="object-contain w-full h-full"
//                 priority
//               />
//             </div>

//             <div className="flex gap-2 overflow-x-auto">
//               {images.map((url, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setSelectedImage(url)}
//                   className={`w-16 h-16 rounded border-2 transition ${
//                     selectedImage === url
//                       ? 'border-yellow-500'
//                       : 'border-gray-600 hover:border-yellow-400'
//                   }`}
//                 >
//                   <Image
//                     src={url}
//                     alt={`Thumb ${i}`}
//                     width={64}
//                     height={64}
//                     className="object-cover w-full h-full rounded"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Car Info Section */}
//           <div className="space-y-6">
//             <h1 className="text-2xl sm:text-3xl font-bold text-yellow-400">{car.name}</h1>

//             <div className="text-xl font-semibold text-yellow-300">${totalPrice}</div>

//             {car.brand?.title && (
//               <p className="text-sm text-gray-300">
//                 Brand: <span className="font-semibold text-white">{car.brand.title}</span>
//               </p>
//             )}

//             {/* Quantity Selector */}
//             <div className="flex items-center gap-4">
//               <label className="text-sm font-medium text-yellow-300">Quantity:</label>
//               <div className="flex items-center border border-yellow-500 rounded overflow-hidden">
//                 <button
//                   onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                   className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-lg font-bold"
//                 >
//                   −
//                 </button>
//                 <span className="px-4">{quantity}</span>
//                 <button
//                   onClick={() => setQuantity((q) => q + 1)}
//                   className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-lg font-bold"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             {/* Tags */}
//             {Array.isArray(car.tags) && car.tags.length > 0 && (
//               <div className="flex flex-wrap gap-2">
//                 {car.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="text-xs bg-yellow-200 text-gray-900 px-2 py-1 rounded-full"
//                   >
//                     #{tag}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* Add to Cart Button */}
//             <button
//               onClick={handleAddToCart}
//               className="w-full px-6 py-3 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition font-semibold shadow-lg"
//             >
//               🛒 Add to Cart
//             </button>

//             {/* Tabs */}
//             <div className="mt-8">
//               <div className="flex gap-6 border-b border-yellow-600 text-sm font-medium">
//                 {['description', 'details', 'reviews'].map((label) => (
//                   <button
//                     key={label}
//                     onClick={() => setTab(label as typeof tab)}
//                     className={`pb-2 capitalize ${
//                       tab === label
//                         ? 'text-yellow-400 border-b-2 border-yellow-400'
//                         : 'text-gray-400 hover:text-yellow-300'
//                     }`}
//                   >
//                     {label}
//                   </button>
//                 ))}
//               </div>

//               <div className="mt-4 text-sm text-gray-300 bg-gray-800 p-4 rounded-lg shadow-inner leading-relaxed">
//                 {tab === 'description' && car.description}
//                 {tab === 'details' && (car.details || 'No details available.')}
//                 {tab === 'reviews' && (car.reviews || 'No reviews yet.')}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }



'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Car } from '@/types';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

export default function CarUI({ car, images }: { car: Car; images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState<'description' | 'details' | 'reviews'>('description');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const totalPrice = (car.price * quantity).toFixed(2);

  const handleAddToCart = () => {
    addToCart(car, quantity);
    toast.success(`${car.name} added to cart! ✅`);
  };

  return (
    <>
      {/* 🔍 Full Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative w-[90vw] max-w-4xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Full Car View"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      )}

      {/* 📄 Main Car Page */}
      <main className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen px-4 pb-16 pt-[96px] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* 🖼️ Image Section */}
          <div className="flex flex-col gap-4">
            <div
              className="relative w-full aspect-video bg-gray-950 rounded-lg overflow-hidden shadow-lg flex items-center justify-center cursor-zoom-in"
              onClick={() => setIsModalOpen(true)}
            >
              <Image
                src={selectedImage}
                alt={car.name}
                width={800}
                height={450}
                className="object-contain w-full h-full"
                priority
              />
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {images.map((url, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(url)}
                  className={`w-16 h-16 rounded border-2 transition ${
                    selectedImage === url
                      ? 'border-yellow-500'
                      : 'border-gray-600 hover:border-yellow-400'
                  }`}
                >
                  <Image
                    src={url}
                    alt={`Thumb ${i}`}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full rounded"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* 📋 Car Info Section */}
          <div className="space-y-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-yellow-400">{car.name}</h1>

            <div className="text-xl font-semibold text-yellow-300">${totalPrice}</div>

            {car.brand?.title && (
              <p className="text-sm text-gray-300">
                Brand: <span className="font-semibold text-white">{car.brand.title}</span>
              </p>
            )}

            {/* 🔢 Quantity Selector */}
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-yellow-300">Quantity:</label>
              <div className="flex items-center border border-yellow-500 rounded overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-lg font-bold"
                >
                  −
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-lg font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* 🏷️ Tags */}
            {Array.isArray(car.tags) && car.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {(car.tags ?? []).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-yellow-200 text-gray-900 px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* 🛒 Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full px-6 py-3 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition font-semibold shadow-lg"
            >
              🛒 Add to Cart
            </button>

            {/* 🧾 Tabs */}
            <div className="mt-8">
              <div className="flex gap-6 border-b border-yellow-600 text-sm font-medium">
                {['description', 'details', 'reviews'].map((label) => (
                  <button
                    key={label}
                    onClick={() => setTab(label as typeof tab)}
                    className={`pb-2 capitalize ${
                      tab === label
                        ? 'text-yellow-400 border-b-2 border-yellow-400'
                        : 'text-gray-400 hover:text-yellow-300'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="mt-4 text-sm text-gray-300 bg-gray-800 p-4 rounded-lg shadow-inner leading-relaxed">
                {tab === 'description' && car.description}
                {tab === 'details' && (car.details || 'No details available.')}
                {tab === 'reviews' && (car.reviews || 'No reviews yet.')}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
