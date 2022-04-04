<script>
	import { _ } from '$lib/i18n';
	import Meta from '$lib/components/Meta.svelte';

	export let title = 'Snippet';
	export let date = 'now';
	export let tags = [];
	export let preview;

	date = new Date(date);
	let dateFormatted = date.toLocaleDateString($_('id'), {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});

	if (!preview && tags.length > 0) {
		preview = '/thumbnails/tags/' + tags[0].toLowerCase().replace(' ', '-') + '.png';
	}
</script>

<Meta {title} />

<div class="content">
	<div class="container">
		{#if preview}
			<img src={preview} alt="" />
		{/if}

		<h1>{title}</h1>
		<time datetime={date}>{dateFormatted}</time>

		<slot />
	</div>
</div>

<style lang="scss">
</style>
