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
		<ul class="grid">
			{#each data as link}
				<li title={link.url}>
					<LinkPreview url={link.url} className="link-card" />
				</li>
			{/each}
		</ul>
	</div>
</div>

<style lang="scss">
</style>
