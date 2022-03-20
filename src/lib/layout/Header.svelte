<script>
	import { _ } from '$lib/i18n';
	import { page } from '$app/stores';
	import IoIosHome from 'svelte-icons/io/IoIosHome.svelte';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/" aria-label={$_('header.home')} title={$_('header.home')}
					><div class="icon"><IoIosHome /></div></a
				>
			</li>
			<li class:active={$page.url.pathname == '/snippets' || $page.url.pathname.includes('/snippets/')}>
				<a sveltekit:prefetch href="/snippets" title={$_('header.snippets')}
					>{$_('header.snippets')}</a
				>
			</li>
			<li class:active={$page.url.pathname === '/imprint'}>
				<a sveltekit:prefetch href="/imprint" title={$_('header.imprint')}>{$_('header.imprint')}</a
				>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	nav {
		margin-inline: auto;
		width: max-content;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		padding: 0;
		margin: 0;
	}

	li {
		font-weight: bold;
		font-size: 1.25rem;
		padding: 1rem 0.5rem;
		transition: 0.3s ease-in-out;
		border: 2px solid transparent;

		&.active,
		&:hover {
			border-color: white;
			@media (prefers-color-scheme: dark) {
				border-color: #343434;
			}
		}

		a {
			text-decoration: none;

			&:focus-visible {
				outline: 2px solid black;
				color: black;
				@media (prefers-color-scheme: dark) {
					outline: 2px solid white;
					color: white;
				}
			}
		}
	}

	.icon {
		height: 1em;
	}
</style>
