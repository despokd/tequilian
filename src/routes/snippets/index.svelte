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
</script>

<Meta title={$_('snippets.title')} />

<div class="content">
	<div class="container container-fluid">
		<h1>{$_('snippets.title')}</h1>

		<ul class="grid">
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
	</div>
</div>

<style lang="scss">
</style>
