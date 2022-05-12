<script>
	import { _ } from '$lib/i18n';
	import { showMainNav } from '$lib/components/nav/store.js';

	const toggleMainNav = (event) => {
		showMainNav.set(event.target.checked);
	};
</script>

<div class="hamburger-button">
	<input type="checkbox" id="toggle-menu" class="toggle-menu" on:change={toggleMainNav} />
	<label for="toggle-menu" class="toggle-handle hamburger hamburger--spring">
		<span class="hamburger-box">
			<span class="hamburger-inner" />
		</span>
	</label>
</div>

<style lang="scss">
	@import '../../../scss/abstract.scss';

	$color: color('text');

	.hamburger-button {
		@media (min-width: 50rem) {
			display: none;
		}

		&:hover {
			opacity: 0.85;
		}
	}

	#toggle-menu {
		display: none;
	}

	.toggle-handle {
		display: flex;
		align-items: center;
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
	}

	.hamburger {
		padding: 9px 1.5rem;
		cursor: pointer;
		transition: opacity, filter 150ms linear;
		text-transform: none;
		background-color: transparent;
		border: 0;
		margin: 0;
		overflow: visible;

		&-box {
			width: 28px;
			height: 18px;
			display: inline-block;
			position: relative;
		}

		&--spring .hamburger-inner {
			top: 1px;
			transition: background-color 0s linear 0.15s;
			&:before {
				top: 8px;
				transition: top 0.12s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.3s,
					transform 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),
					-webkit-transform 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19);
			}
			&:after {
				top: 16px;
				transition: top 0.3s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.3s,
					transform 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),
					-webkit-transform 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19);
			}
		}

		&-inner {
			display: block;
			top: 50%;
			margin-top: -1px;
			width: 28px;
			height: 2px;
			background-color: $color;
			border-radius: 0;
			position: absolute;
			transition: transform 0.15s ease;

			&:after,
			&:before {
				content: '';
				display: block;
				width: 28px;
				height: 2px;
				background-color: $color;
				border-radius: 0;
				position: absolute;
				top: -8px;
				transition: transform 0.15s ease;
			}
		}
	}

	#toggle-menu:checked ~ .hamburger--spring {
		.hamburger-inner {
			transition-delay: 0.32s;
			background-color: transparent;

			&:before {
				top: 0;
				transition: top 0.12s cubic-bezier(0.33333, 0, 0.66667, 0.33333) 0.18s,
					transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0.32s,
					-webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0.32s;
				-webkit-transform: translate3d(0, 8px, 0) rotate(45deg);
				transform: translate3d(0, 8px, 0) rotate(45deg);
			}
			&:after {
				top: 0;
				transition: top 0.3s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
					transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0.32s,
					-webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0.32s;
				transform: translate3d(0, 8px, 0) rotate(-45deg);
			}
		}
	}
</style>
