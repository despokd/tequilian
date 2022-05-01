<script>
	import { _ } from '$lib/i18n';
	import SiteLogo from '$lib/components/base/site-logo.svelte';
	import Nav from '$lib/components/nav/main.svelte';
</script>

<header>
	<div class="container">
		<SiteLogo />
		<div class="spacer" />
		<Nav />
	</div>
</header>

<style lang="scss">
	@import '../../scss/abstract.scss';
	@import '../../scss/variables.scss';

	header {
		position: sticky;
		top: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 3em;
		background-color: color('background');
		z-index: $level-2;
	}

	.container {
		flex-direction: row;
		align-items: center;
		gap: 1rem;
		width: 100%;
	}

	.spacer {
		margin-inline: auto;
	}
</style>
