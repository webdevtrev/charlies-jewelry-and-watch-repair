import { defineType, defineField } from "sanity";

export default defineType({
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Services",
      readOnly: false,
      hidden: false,
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "heroSection",
    }),
    defineField({
      name: "serviceIntro",
      title: "Services Intro",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "subtitle", title: "Subtitle", type: "text" }),
      ],
    }),
    defineField({
      name: "processesIntro",
      title: "Processes Intro",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "subtitle", title: "Subtitle", type: "text" }),
      ],
    }),
    defineField({
      name: "processSteps",
      title: "Process Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
          ],
        },
      ],
      description:
        "Steps that describe your service process (consultation, assessment, restoration, QA, etc.)",
    }),
    defineField({
      name: "frequentlyAskedQuestions",
      title: "Frequently Asked Questions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
            }),
            defineField({ name: "answer", title: "Answer", type: "text" }),
          ],
        },
      ],
    }),
  ],
});
