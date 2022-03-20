<script>
	import { _ } from '$lib/i18n';
	import SiteLogo from '$lib/components/base/site-logo.svelte';
	import Nav from '$lib/components/nav/main.svelte';
</script>

<header class="container">
	<SiteLogo />
	<div class="spacer" />
	<Nav />
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		padding: 0.25em;
	}

	.container {
		flex-direction: row;
		align-items: center;
		gap: 1rem;
	}
	.spacer {
		margin-inline: auto;
	}
</style>
