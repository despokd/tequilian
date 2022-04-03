<script>
	import { _ } from '$lib/i18n';

	export let description,
		url = 'https://tequilian.de/',
		title,
		imageUrl = 'https://tequilian.de/social-preview.png';

	description = description ? description : $_('general.description');
	title = title ? title + ' - ' + $_('general.title') : $_('general.title');
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="manifest" crossorigin="use-credentials" href="/site.webmanifest" />

	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1d1e20" />
	<meta name="msapplication-TileColor" content="#9f00a7" />
	<meta name="theme-color" content="#1d1e20" />

	<!-- General -->
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Facebook -->
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="tequilian.de" />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
</svelte:head>
