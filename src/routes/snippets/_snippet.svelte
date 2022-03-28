<script>
	export let title = 'Snippet';
	export let date = 'tba';
</script>

<svelte:head>
	<title>{title} - Tequilian</title>
</svelte:head>

<div class="content">
	<h1>{title}</h1>

	<p>Published: {date}</p>

	<slot />
</div>

<style lang="scss">
</style>
