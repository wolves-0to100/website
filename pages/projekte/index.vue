<template>
	<div class="container">
		<h1>Projekte</h1>
		<p class="introduction">
			Hier findest du einige Projekte, welche wir zusammen auf 0to100
			gebaut haben. Zu den meisten Projekten schreibe ich ebenfalls einen
			Blogpost um die unsere Prozesse festzuhalten.
		</p>
		<ProjectCard class="project" img="cocktails">
			<h2>Minimal Cocktails</h2>
			<p>
				Minimal Cocktails ist eine App, welche wir on Stream gebaut
				haben. Sie überzeugt durch ein simples Design und wöchentlich
				neue Cocktails. Für die Umsetzung haben wir Cockpit CMS und eine
				Single Codebase benutzt. Mehr über den Entwicklungprozess kannst
				du hier lesen:
				<nuxt-link to="/blog/CocktailApp/">Blogpost</nuxt-link>
			</p>
			<div class="links">
				<h3>Jetzt herunterladen:</h3>
				<a
					href="https://apps.apple.com/us/app/minimal-cocktails/id1546888686"
				>
					AppStore
				</a>
				<a
					href="https://play.google.com/store/apps/details?id=ink.wolves.cocktails"
				>
					PlayStore
				</a>
				<br />
				<a href="https://cocktails.ink">Webseite</a>
			</div>
		</ProjectCard>
	</div>
</template>

<script>
import ProjectCard from '~/components/Project/ProjectCard'
export default {
	components: {
		ProjectCard,
	},
	head: {
		title: '0to100 | Projekte',
		link: [
			{
				hid: 'description',
				name: 'description',
				content:
					'Hier findest du einige Projekte, welche wir zusammen auf 0to100 gebaut haben.',
			},
			{
				hid: 'canonical',
				rel: 'canonical',
				href: `https://0to100.ink/projekte/`,
			},
		],
	},
}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	margin: 0 auto;
	padding: 100px 10%;
	min-height: 100vh;
	max-width: 1080px;
	@media (min-width: 1600px) {
		padding: 100px 160px;
	}
}

.introduction {
	margin: 1em 0 2em;
}

.project {
	margin: 2rem 0;
	h2 {
		margin: 1em 0;
	}
	.links {
		h3 {
			margin: 1em 0 0.5em;
		}
		a {
			display: block;
		}
	}
}
</style>
