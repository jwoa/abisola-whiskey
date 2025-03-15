import { defineType } from 'sanity'

export default defineType({
  name: 'ingredient',
  title: 'Ingredient',
  type: 'object',
  fields: [
    {
      name: 'ingredient',
      title: 'Ingredient',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text',
    },
  ],
})
