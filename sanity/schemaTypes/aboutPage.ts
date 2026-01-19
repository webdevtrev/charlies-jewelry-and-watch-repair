import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "About",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "heroSection",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        // Use portable text (array of blocks) for rich text editing
        defineField({
          name: "text",
          title: "Text",
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
  ],
});
