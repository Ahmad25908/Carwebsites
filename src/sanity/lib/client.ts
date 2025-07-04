
// import { createClient } from 'next-sanity';

// export const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', // Ensure fallback for TypeScript
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', // Use env for flexibility
//   apiVersion: '2024-06-05', // Keep this updated
//   token: process.env.SANITY_API_TOKEN, // Server-side only, never expose public tokens
//   useCdn: process.env.NODE_ENV === 'production', // Use CDN only in production for faster read access
// });


import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', // Sanity Project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', // Dataset name
  apiVersion: '2024-06-05', // API version
  token: process.env.SANITY_API_TOKEN, // Token with "create" permission
  useCdn: false, // Disable CDN for fresh data
});
