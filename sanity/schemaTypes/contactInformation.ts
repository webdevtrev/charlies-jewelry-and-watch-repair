import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactInformation",
  title: "Contact Information",
  type: "document",
  // This is intended to be a singleton (use fixed documentId in structure)
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Contact Information",
      readOnly: true,
      hidden: true,
    }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "address", title: "Address", type: "text" }),
    defineField({ name: "mapLink", title: "Map Link", type: "url" }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "url",
    }),
    defineField({
      name: "facebook",
      title: "Facebook",
      type: "url",
    }),
    defineField({
      name: "hours",
      title: "Hours",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "day", title: "Day", type: "string" }),
            defineField({ name: "open", title: "Open", type: "string" }),
            defineField({ name: "close", title: "Close", type: "string" }),
            defineField({
              name: "closed",
              title: "Closed",
              type: "boolean",
              initialValue: false,
            }),
          ],
        },
      ],
      description:
        "Add one entry per day (e.g., Monday, Tue, ...). Use `closed` for closed days.",
    }),
  ],
});
