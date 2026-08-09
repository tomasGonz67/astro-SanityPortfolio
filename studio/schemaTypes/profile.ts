import { defineField, defineType } from 'sanity'

export const profile = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'roles',
      title: 'Roles',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Shown on the homepage as roles: [Full-Stack, Backend, ...]',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
    defineField({
      name: 'skillTiers',
      title: 'Skill Tiers',
      type: 'array',
      description: 'Order matters — first tier is styled as strongest, each one after is progressively more muted.',
      of: [
        {
          type: 'object',
          name: 'skillTier',
          fields: [
            { name: 'label', type: 'string', title: 'Tier Label' },
            { name: 'skills', type: 'array', of: [{ type: 'string' }], title: 'Skills' },
          ],
          preview: {
            select: { title: 'label', subtitle: 'skills' },
            prepare({ title, subtitle }) {
              return { title, subtitle: Array.isArray(subtitle) ? subtitle.join(', ') : '' }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'resumeFile',
      title: 'Resume (PDF)',
      type: 'file',
      options: { accept: '.pdf' },
    }),
  ],
})
