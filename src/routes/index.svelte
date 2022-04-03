<script context="module">
	export const load = async ({ fetch }) => {
		const snippets = await fetch('/api/snippets.json');
		const allSnippets = await snippets.json();

		return {
			props: {
				snippets: allSnippets
			}
		};
	};
</script>

<script>
	import { _ } from '$lib/i18n';
	import Meta from '$lib/components/Meta.svelte';
	import Card from '$lib/components/cards/snippet.svelte';

	export let snippets;

	snippets = snippets.slice(0, 3);
</script>

<Meta />

<div class="content">
	<section class="container">
		<h1>Tequilian</h1>
	</section>
	<section class="container snippets">
		<h2>{$_('snippets.title')}</h2>

		<ul>
			{#each snippets as snippet}
				<li>
					<Card
						title={snippet.meta.title}
						description={snippet.meta.description}
						url={snippet.path}
						tags={snippet.meta.tags}
						date={snippet.meta.date}
					/>
				</li>
			{/each}
		</ul>
	</section>
</div>

<style lang="scss">
	.snippets {
		ul {
			display: grid;
			gap: 1rem;
			grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
			grid-template-rows: masonry;
			padding: 0;
			margin: 0;
			list-style: none;
		}
	}
</style>
