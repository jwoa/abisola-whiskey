import { defineType, defineField } from 'sanity'
import { PinIcon } from '@sanity/icons'

export default defineType({
  name: 'stockistsPage',
  title: 'Stockists Page',
  type: 'document',
  icon: PinIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Find Abisola Whiskey',
    }),
    defineField({
      name: 'description',
      title: 'Page Description',
      type: 'text',
      initialValue: 'Discover where to find our triple oak aged whiskey at select retailers, bars, and restaurants.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'locations',
      title: 'Stockist Locations',
      type: 'array',
      of: [{ type: 'stockist' }],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'mapSettings',
      title: 'Map Settings',
      type: 'object',
      fields: [
        {
          name: 'centerLat',
          title: 'Center Latitude',
          type: 'number',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'centerLng',
          title: 'Center Longitude',
          type: 'number',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'defaultZoom',
          title: 'Default Zoom Level',
          type: 'number',
          initialValue: 12,
          validation: (Rule: any) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'onlinePurchaseSection',
      title: 'Online Purchase Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Buy Online',
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
        },
        {
          name: 'retailers',
          title: 'Online Retailers',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Retailer Name',
                  type: 'string',
                },
                {
                  name: 'url',
                  title: 'Purchase URL',
                  type: 'url',
                },
                {
                  name: 'logo',
                  title: 'Retailer Logo',
                  type: 'image',
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
        },
        {
          name: 'shareImage',
          title: 'Share Image',
          type: 'image',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'heroImage',
    },
  },
})
