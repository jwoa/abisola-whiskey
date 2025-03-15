import { defineType } from 'sanity'

export default defineType({
  name: 'stockist',
  title: 'Stockist',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Store Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
      description: 'For map display',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Retail Store', value: 'retail' },
          { title: 'Bar', value: 'bar' },
          { title: 'Restaurant', value: 'restaurant' },
          { title: 'Online', value: 'online' },
        ],
      },
    },
  ],
})
