export const getAllCarsQuery = `
  *[_type == "car"]{
    _id,
    name,
    slug,
    price,
    description,
    tags,
    "mainImage": mainImage.asset->url,
    "gallery": gallery[].asset->url,
    brand->{
      title,
      slug
    }
  } | order(_createdAt desc)
`;
export const getAllBrandsQuery = `
  *[_type == "brand"]{
    _id,
    title,
    slug
  } | order(title asc)
`;
