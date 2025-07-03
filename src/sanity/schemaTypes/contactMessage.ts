import { defineField, defineType } from 'sanity'

export const contact = defineType({
  name: 'contactMessage',
  title: 'Contact Message',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField( { name: 'email', title: 'Email', type: 'string' },),
    defineField( { name: 'message', title: 'Message', type: 'text' },),
  ],
})

// export default contact
