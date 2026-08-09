// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://tomasgonz67.com',
	integrations: [sitemap()],
	vite: {
		server: {
			watch: {
				ignored: ['**/studio/**'],
			},
		},
	},
});
