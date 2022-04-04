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
	import links from './links/data.json';
	import { LinkPreview } from 'svelte-link-preview';

	export let snippets;

	snippets = snippets.slice(0, 2);
	let linksLength = Object.entries(links).length;
	let linksLatest = links.slice(linksLength - 1, linksLength - 0)[0];
	let linksFirst = links.slice(0, 1)[0];
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
			<li>
				<a href="/snippets">More snippets</a>
			</li>
		</ul>
	</section>
	<section class="container links">
		<h2>{$_('links.title')}</h2>

		<ul>
			<li>
				<h3>Always first</h3>
				<LinkPreview url={linksFirst.url} className="link-card" />
			</li>
			<li>
				<h3>Newcomer</h3>
				<LinkPreview url={linksLatest.url} className="link-card" />
			</li>
			<li><a href="/links">More usefull pages</a></li>
		</ul>
	</section>
</div>

<style lang="scss">
	.snippets,
	.links {
		ul {
			display: grid;
			gap: 1rem;
			grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
			grid-template-rows: masonry;
			padding: 0;
			margin: 0;
			list-style: none;
		}
	}
</style>
