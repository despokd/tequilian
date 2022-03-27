import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},

	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			scss: true
		}),
		mdsvex({
			extensions: ['.md'],
			layout: {
				snippets: 'src/routes/snippets/_snippet.svelte'
			}
		})
	]
};

export default config;
