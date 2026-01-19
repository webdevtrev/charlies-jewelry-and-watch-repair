import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Contact",
      readOnly: false,
      hidden: false,
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "heroSection",
    }),
  ],
});
