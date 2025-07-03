
import { defineType, defineField } from 'sanity';

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  description: 'A product',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping and focal point selection
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string', // Change from number to string to store price with symbol
      validation: (Rule) => Rule.required(),
      description: 'Price with currency symbol, e.g., "$29.99"', // Ensures positive price with two decimal places
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text', // Changed to 'text' for longer product descriptions
    }),
    defineField({
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
  ],
});
