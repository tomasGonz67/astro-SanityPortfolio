import { defineField, defineType } from 'sanity'

export const clientWork = defineType({
  name: 'clientWork',
  title: 'Client Work',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Engagement Title',
      type: 'string',
      description: 'e.g. "Migrating cadooga.com & vanvir.com off Webflow"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description: 'Short description of what was done',
    }),
    defineField({
      name: 'outcome',
      title: 'Outcome / Results',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Concrete results, e.g. "Cut $864/yr in hosting costs", "Delivered in 12 business days"',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. Astro, Sanity, Cloudflare, Migration',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      description: 'Optional',
    }),
    defineField({
      name: 'completedDate',
      title: 'Completed Date',
      type: 'date',
      options: { dateFormat: 'MMM YYYY' },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'clientName',
    },
  },
})
