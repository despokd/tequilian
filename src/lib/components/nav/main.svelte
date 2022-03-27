<script>
	import { _ } from '$lib/i18n';
	import { page } from '$app/stores';
	import { showMainNav } from '$lib/components/nav/store.js';
	import Hamburger from '$lib/components/nav/hamburger.svelte';

	let showMainNavValue;

	showMainNav.subscribe((value) => {
		showMainNavValue = value;
	});
</script>

<div class="main-nav">
	<Hamburger />
	<nav class={showMainNavValue ? 'show' : ''}>
		<ul>
			<li
				class:active={$page.url.pathname == '/snippet' || $page.url.pathname.includes('/snippet/')}
			>
				<a sveltekit:prefetch href="/snippet" title={$_('header.snippets')}
					>{$_('header.snippets')}</a
				>
			</li>
			<li class:active={$page.url.pathname === '/imprint'}>
				<a sveltekit:prefetch href="/imprint" title={$_('header.imprint')}>{$_('header.imprint')}</a
				>
			</li>
			<li>
				<a
					href="https://kdomaratius.de"
					target="_blank"
					rel="noreferrer"
					title={$_('header.aboutMe')}>{$_('header.aboutMe')}</a
				>
			</li>
		</ul>
	</nav>
</div>

<style lang="scss">
	nav {
		position: relative;
		overflow: hidden;

		ul {
			list-style: none;
			display: flex;
			flex-direction: row;
			padding: 0;
			margin: 0;
			padding: 0.25em;

			@media (max-width: 50rem) {
				flex-direction: column;
			}
		}

		li {
			padding: 0.25em;
		}

		@media (max-width: 50rem) {
			position: absolute;
			top: 100%;
			right: 0;
			transform: translateX(100%);
			transition: transform 0.3s ease;

			&.show {
				transform: translateX(0%);
			}
		}
	}
</style>
