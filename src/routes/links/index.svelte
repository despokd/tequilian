<script>
	import { _ } from '$lib/i18n';
	import Meta from '$lib/components/Meta.svelte';
	import { LinkPreview } from 'svelte-link-preview';
	import data from './data.json';
</script>

<Meta title={$_('links.title')} />

<div class="content">
	<div class="container">
		<h1>{$_('links.title')}</h1>
		<ul>
			{#each data as link}
				<li>
					<LinkPreview url={link.url} className="link-card" />
				</li>
			{/each}
		</ul>
	</div>
</div>

<style lang="scss">
	ul {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		grid-template-rows: masonry;
		padding: 0;
		margin: 0;
		list-style: none;
	}
</style>
