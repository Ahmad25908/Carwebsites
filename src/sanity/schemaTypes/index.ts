import { type SchemaTypeDefinition } from '@sanity/types';
import { product } from './product';
import { category } from './category';
import { contact } from './contactMessage';
import cars from './cars';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,contact,cars],
};
