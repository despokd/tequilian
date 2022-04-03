<script context="module">
	import { _ } from '$lib/i18n';
	import Meta from '$lib/components/Meta.svelte';
	import LottiePlayer from '$lib/components/lottie-player.svelte';
</script>

<Meta title={$_('comingSoon.title')} />

<div class="content">
	<div class="container">
		<div>
			<h1>{$_('comingSoon.title')}</h1>
			<p>
				{@html $_('comingSoon.text')
					.replace(
						'{buttonStart}',
						'<button onclick="window.history.back()" title="Return to latest viewed page">'
					)
					.replace('{buttonEnd}', '</button>')}
			</p>
		</div>
		<div class="lottie">
			<LottiePlayer
				src="https://assets8.lottiefiles.com/packages/lf20_ffdeo4si.json"
				background="transparent"
				controlsLayout={['playpause']}
				speed=".5"
			/>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.lottie {
		padding-inline: 20vw;
		max-width: 800px;
	}
</style>
