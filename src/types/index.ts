// export interface Brand {
//   _id: string;
//   title: string;
//   slug: { current: string };
// }

// export type Car = {
//   _id: string;
//   name: string;
//   slug: { current: string };
//   price: number;
//   description: string;
//   tags?: string[];
//   mainImage: string;
//   gallery?: string[];
//   brand?: {
//     title: string;
//     slug: { current: string };
//   };
//   details?: string;
//   reviews?: string;
// };
type Slug = { current: string };

export interface Brand {
  _id: string;
  title: string;
  slug: Slug;
}

export type Car = {
  _id: string;
  name: string;
  slug: Slug;
  price: number;
  description: string;
  tags?: string[];
  mainImage: string;
  gallery?: string[];
  brand?: { title: string; slug: Slug };
  details?: string;
  reviews?: string;
};
