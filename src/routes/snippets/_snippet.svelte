<script>
	import { _ } from '$lib/i18n';
	import Meta from '$lib/components/Meta.svelte';

	export let title = 'Snippet';
	export let date = 'tba';
</script>

<Meta {title} />

<div class="content">
	<h1>{title}</h1>

	<p>Published: {date}</p>

	<slot />
</div>

<style lang="scss">
</style>
