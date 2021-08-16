<template>
	<div class="container">
		<main>
			<h1>Projekte</h1>
			<p class="introduction">
				Hier findest du einige Projekte, welche wir zusammen auf 0to100
				gebaut haben. Zu den meisten Projekten schreibe ich ebenfalls
				einen Blogpost um die unsere Prozesse festzuhalten.
			</p>
			<ProjectCard
				class="project"
				img="streamerGames"
				title="Streamer Games"
			>
				<h2>Streamer Games</h2>
				<p>
					Streamer Games erlaubt es Streamern mit ihren Chat Spiele zu
					spielen. Dabei liegt der aktuelle Fokus auf
					wissensbasierenden Spielen. Zum Beispiel können Länder auf
					einer Weltkarte benannt werden.
				</p>
				<div class="links">
					<h3>Jetzt vorbeischauen:</h3>
					<a href="https://games.0to100.ink">Streamer Games</a>
				</div>
			</ProjectCard>
			<ProjectCard
				class="project"
				img="cocktails"
				title="Minimal Cocktails"
			>
				<h2>Minimal Cocktails</h2>
				<p>
					Minimal Cocktails ist eine App, welche wir on Stream gebaut
					haben. Sie überzeugt durch ein simples Design und
					wöchentlich neue Cocktails. Für die Umsetzung haben wir
					Cockpit CMS und eine Single Codebase benutzt. Mehr über den
					Entwicklungprozess kannst du hier lesen:
					<nuxt-link to="/blog/cocktail-app/">Blogpost</nuxt-link>
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
				</div>
			</ProjectCard>
		</main>
	</div>
</template>

<script>
import ProjectCard from '~/components/Project/ProjectCard'
export default {
	components: {
		ProjectCard,
	},
	head: {
		title: 'Projekte | 0to100',
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
.introduction {
	margin: 1em 0 2em;
}

.project {
	margin: 2rem 0;
	h2 {
		margin: 0 0 1em;
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
