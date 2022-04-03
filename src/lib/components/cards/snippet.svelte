<script>
	import { _ } from '$lib/i18n';
	import Meta from '$lib/components/Meta.svelte';

	export let preview = {
			url: null,
			alt: null
		},
		title = 'TBA',
		description = '',
		url = 'coming-soon',
		tags = [],
		date = 'now';
</script>

<svelte:head>
	<Meta {title} {description} />
</svelte:head>

<div class="card">
	<a href={url} {title}>
		<header>
			{#if preview.url}
				<img src={preview.url} alt={preview.alt} />
			{:else}
				<img src="/assets/img/preview.png" alt="" />
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
