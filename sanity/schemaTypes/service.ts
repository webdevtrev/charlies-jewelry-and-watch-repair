import { defineType, defineField } from "sanity";

export default defineType({
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      description: "A brief summary displayed in lists and cards",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "string",
          title: "Feature Name",
        },
      ],
      description: "List of detailed features offered under this main service",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      description: "If blank it will show as 'Custom quote' on the page",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Numeric order for sorting services in lists",
    }),
  ],
  orderings: [
    {
      title: "Order, name",
      name: "orderAscNameAsc",
      by: [
        { field: "order", direction: "asc" },
        { field: "name", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
});
