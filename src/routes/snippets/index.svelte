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

	export let snippets;
</script>

<svelte:head>
	<title>{$_('snippets.title')} - Tequilian</title>
</svelte:head>

<div class="content">
	<h1>{$_('snippets.title')}</h1>

	<ul>
		{#each snippets as snippet}
			<li>
				<h2>
					<a href={snippet.path}>
						{snippet.meta.title}
					</a>
				</h2>
				Published {snippet.meta.date}
			</li>
		{/each}
	</ul>
</div>
