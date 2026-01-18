import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtext',
      title: 'Subheadline',
      type: 'text',
    }),
    defineField({
      name: 'backgroundVideo',
      title: 'Background Video',
      type: 'object',
      fields: [
        defineField({
          name: 'video',
          title: 'Video File',
          type: 'file',
          options: {accept: 'video/*'},
        }),
        defineField({
          name: 'poster',
          title: 'Poster Image',
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image (fallback)',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'headline',
      media: 'backgroundImage',
    },
  },
})
