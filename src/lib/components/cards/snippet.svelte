<script>
	import { _ } from '$lib/i18n';

	export let preview = {
			url: null,
			alt: null
		},
		title = 'TBA',
		description = 'TBA',
		url = 'coming-soon',
		tags = [],
		date = 'now';
</script>

<div class="card">
	<a href={url}>
		<header>
			{#if preview.url}
				<img src={preview.url} alt={preview.alt} />
			{:else}
				<img src="/social-preview.png" alt="" />
			{/if}
		</header>
		<main>
			<h2>{title}</h2>
			<p>{description}</p>
		</main>
		<footer>
			<ul>
				<li><time datetime={new Date(date)}>{new Date(date)}</time></li>
				{#each tags as tag}
					<li>{tag}</li>
				{/each}
			</ul>
		</footer>
	</a>
</div>

<style lang="scss">
	.card {
		padding: 1rem;
	}

	img {
		width: 100%;
		object-fit: cover;
	}

	footer {
		ul {
			list-style: none;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			padding-left: 0;
			font-size: 0.85em;
		}

		li {
			padding: 0.25em;
			&:first-of-type {
				padding-left: 0;
			}
		}
	}
</style>
