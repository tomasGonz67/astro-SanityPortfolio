// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://tomasgonz67.com',
	integrations: [sitemap()],
	// Only links marked data-astro-prefetch are prefetched (the nav), on hover/focus/tap.
	prefetch: true,
	vite: {
		server: {
			watch: {
				ignored: ['**/studio/**'],
			},
		},
	},
});
