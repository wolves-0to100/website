<template>
	<footer>
		<div>
			<h2>Social</h2>
			<a
				href="https://instagram.com/marcelxpfeifer"
				rel="noopener noreferrer"
			>
				Instagram
			</a>
			<a
				href="https://twitter.com/marcelxpfeifer"
				rel="noopener noreferrer"
			>
				Twitter
			</a>
			<a href="https://www.twitch.tv/0to100ink" rel="noopener noreferrer">
				Twitch
			</a>
			<a
				href="https://gitlab.com/marcel.pfeifer"
				rel="noopener noreferrer"
			>
				GitLab
			</a>
			<a
				href="https://linkedin.com/in/marcelxpfeifer"
				rel="noopener noreferrer"
			>
				LinkedIn
			</a>
		</div>
		<div>
			<h2>Seiten</h2>
			<nuxt-link to="/Uses">Uses</nuxt-link>
			<nuxt-link to="/Blog">Blog</nuxt-link>
			<nuxt-link to="/Cocktails">Cocktails</nuxt-link>
		</div>
		<div class="wolves">
			<p>Made by <a href="https://wolves.ink">Wolves</a></p>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
}
</script>

<style lang="scss" scoped>
footer {
	display: grid;
	grid-gap: 24px;
	grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
	margin: 4em auto 2em;
	padding: 0 80px;
	max-width: 1360px;
	h2 {
		margin-bottom: 0.5em;
	}
	a {
		display: block;
		font-weight: 400;
		margin-bottom: 0.2em;
		&:last-child {
			margin: 0;
		}
	}
	div .nuxt-link-active {
		border-bottom: none;
	}
	@media (max-width: 600px) {
		padding: 0 40px;
	}
}

.wolves {
	align-self: flex-end;
	a {
		display: inline;
		font-weight: 600;
	}
}
</style>
