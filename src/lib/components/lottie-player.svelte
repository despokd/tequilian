<script>
	export let src,
		height,
		width,
		background = 'transparent',
		speed = '1',
		autoplay = true,
		loop = false,
		renderer = 'svg';
</script>

<svelte:head>
	<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</svelte:head>

{#if src}
	<lottie-player {src} {background} {autoplay} {loop} {renderer} {height} {width} {speed} />
{/if}
