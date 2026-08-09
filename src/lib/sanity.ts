import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { Image } from '@sanity/types'

export const client = createClient({
  projectId: 'k95kevri',
  dataset: 'production',
  apiVersion: '2026-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: Image) {
  return builder.image(source)
}
