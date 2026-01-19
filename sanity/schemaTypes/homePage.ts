import { defineType, defineField } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "heroSection",
    }),
    defineField({
      name: "featuredProducts",
      title: "Featured Products",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
      validation: (Rule) => Rule.max(3),
      description: "Select up to 3 products to feature on the homepage",
    }),
    defineField({
      name: "experience",
      title: "Experience Section",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "content",
          title: "Content",
          type: "array",
          of: [{ type: "block" }],
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "awards",
      title: "Awards / Highlights",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: "hero.headline",
      media: "hero.backgroundImage",
    },
  },
});
