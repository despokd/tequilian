<script>
	import { _ } from '$lib/i18n';

	export let preview = null,
		title = 'TBA',
		url = 'coming-soon',
		tags = [],
		date = 'now';

	date = new Date(date);
	let dateFormatted = date.toLocaleDateString($_('id'), {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});

	if (tags.length > 0) {
		preview = '/thumbnails/tags/' + tags[0].toLowerCase().replace(' ', '-') + '.png';
	}
</script>

<div class="card">
	<a href={url}>
		<header>
			<img src={preview ? preview : '/social-preview.png'} alt="" />
		</header>
		<main>
			<h3>{title}</h3>
		</main>
		<footer>
			<ul>
				<li><time datetime={date}>{dateFormatted}</time></li>
				{#each tags as tag}
					<li>{tag}</li>
				{/each}
			</ul>
		</footer>
	</a>
</div>

<style lang="scss">
	a {
		text-decoration: none;
		color: inherit;
		&:hover {
			opacity: 0.5;
		}
	}

	footer,
	main {
		padding-inline: 0.5rem;
	}

	img {
		width: 100%;
		object-fit: cover;
	}

	footer {
		padding-bottom: 0.5rem;
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
