<script>
	import { setupI18n } from '$lib/i18n';
	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	import '../scss/_app.scss';

	setupI18n();
</script>

<Header />

<p class="h0">- - Site preview</p>

<main>
	<slot />
</main>
<Footer />

<style lang="scss">
</style>
