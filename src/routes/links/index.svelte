<script>
	import { _ } from '$lib/i18n';
	import Meta from '$lib/components/Meta.svelte';
	import data from './data.json';
</script>

<Meta title={$_('links.title')} />

<div class="content">
	<div class="container">
		<h1>{$_('links.title')}</h1>
		<ul>
			{#each data as link}
				<li>
					<a href={link.url} target="blank" rel="noreferrer">{link.url} </a>
				</li>
			{/each}
		</ul>
	</div>
</div>
