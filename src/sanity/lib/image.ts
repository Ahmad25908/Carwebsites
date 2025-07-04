import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}



// import createImageUrlBuilder from '@sanity/image-url'
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";
// // import type { Image } from 'sanity';
// import {client} from './client'
// // https://www.sanity.io/docs/image-url
// const builder = createImageUrlBuilder( client)

// export const urlFor = (source: SanityImageSource) => {
//   return builder?.image(source)
// }
