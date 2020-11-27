<template>
	<div>
		<header>
			<div class="wrapper">
				<img :src="logoLink" @click="$router.push('/')" />
				<nav>
					<nuxt-link to="/Blog">Blog</nuxt-link>
					<nuxt-link to="/Projects">Projects</nuxt-link>
					<nuxt-link to="/Cocktails">Cocktails</nuxt-link>
					<button aria-label="Color Mode" @click="toggleColorMode">
						<svg
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							:stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							></path>
						</svg>
					</button>
				</nav>
			</div>
		</header>
		<Nuxt />
	</div>
</template>

<script>
export default {
	computed: {
		currentColor() {
			return this.$colorMode.value === 'light'
				? 'rgba(0, 0, 0, 0.8)'
				: '#ebf4f1'
		},
		logoLink() {
			return this.$colorMode.value === 'light'
				? '/LogoDark.svg'
				: '/Logo.svg'
		},
	},
	methods: {
		toggleColorMode() {
			if (this.$colorMode.value === 'light') {
				this.$colorMode.preference = 'dark'
			} else {
				this.$colorMode.preference = 'light'
			}
		},
	},
}
</script>

<style lang="scss">
html {
	font-family: 'Inter', sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

body {
	transition: all 200ms ease-in-out;
	background-color: #fff;
	color: rgba(0, 0, 0, 0.8);
	a {
		color: rgba(0, 0, 0, 0.8);
		&.nuxt-link-active {
			border-bottom: 1px solid rgba(0, 0, 0, 0.8);
		}
	}
}
.dark-mode body {
	background-color: #1a1a1a;
	color: #ebf4f1;
	a {
		color: #ebf4f1;
		&.nuxt-link-active {
			border-bottom: 1px solid #ebf4f1;
		}
	}
}

a {
	cursor: pointer;
	transition: color 200ms ease-in-out;
	&:hover {
		color: #d90000;
	}
}

button {
	cursor: pointer;
	border: none;
	background-color: transparent;
	outline: none;
}

.dark-mode header {
	background: rgba(26, 26, 26, 0.6);
}

header {
	display: flex;
	justify-content: center;
	position: sticky;
	top: 0;
	width: 100vw;
	font-weight: 600;
	padding: 0 80px;
	height: 100px;
	backdrop-filter: blur(8px);
	background: rgba(255, 255, 255, 0.6);
	z-index: 1;
	perspective: 1000px;

	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		width: 100%;
		max-width: 1200px;
	}

	img {
		cursor: pointer;
		height: 30%;
		width: auto;
	}

	nav a {
		margin: 0 10px;
	}

	a {
		padding: 6px 0;
		text-decoration: none;
	}
	button {
		padding: 0;
		width: 20px;
		height: 20px;
		svg {
			width: 100%;
			height: 100%;
			transition: stroke 200ms ease-in-out;
			&:hover {
				stroke: #d90000;
			}
		}
	}
}

.nuxt-content {
	h2,
	h3 {
		margin-top: 2rem;
	}

	p {
		margin: 1rem 0;
	}
}
</style>
