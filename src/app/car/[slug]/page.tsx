import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { Car } from '@/types';
import CarUI from '@/components/CarUi';

type Props = {
  params: { slug: string };
};

const getCarDetailsQuery = groq`
  *[_type == "car" && slug.current == $slug][0]{
    _id,
    name,
    description,
    price,
    tags,
    "mainImage": mainImage.asset->url,
    "gallery": gallery[].asset->url,
    brand->{title, slug},
    details,
    reviews
  }
`;

export default async function CarDetailPage({ params }: Props) {
  const car: Car = await client.fetch(getCarDetailsQuery, { slug: params.slug });

  if (!car) {
    return <div className="text-center p-8 text-red-500">Car not found</div>;
  }

  const allImages = car.gallery?.length ? [car.mainImage, ...car.gallery] : [car.mainImage];

  return <CarUI car={car} images={allImages} />;
}
