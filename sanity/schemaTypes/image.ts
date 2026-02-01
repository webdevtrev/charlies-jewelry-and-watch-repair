import { defineType, defineField } from "sanity";
export default defineType({
  name: "imageWithAlt",
  title: "Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: "alt",
      title: "Alternative Text",
      type: "string",
      description:
        "A short description of the image for accessibility purposes.",
      validation: (Rule) =>
        Rule.required().error("Alternative text is required."),
    }),
  ],
});
