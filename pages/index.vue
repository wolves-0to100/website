<template>
	<div class="container">
		<h1>0to100</h1>
		<p>Hey! Mein Name ist Marcel.</p>
		<p>
			Schön das du hier gelandet bist. 0to100 ist ein kleines Projekt von
			mir um meine Ideen, Prozesse und Erlebnisse festzuhalten. In
			unregelmäßigen Abständen schreibe ich ein paar Blogposts.
			Zusätzliche streame ich ab und an mal auf Twitch.
		</p>

		<card>
			<div>
				<h2>Twitch</h2>
				<p>
					Mal baue ich Apps, mal Spiele und manchmal auch Webseiten.
					Nur eins ist sicher! Irgendwas läuft immer schief. Schau
					doch gerne mal vorbei.
				</p>
				<p>
					Darfür einfach nur hier lang!
					<a href="https://www.twitch.tv/0to100ink">Twitch</a>
				</p>
			</div>
			<img
				src="~/assets/Images/twitch.jpg"
				alt="Screenshot der Twitch Webseite"
			/>
		</card>
		<h2>Cocktails</h2>
		<p>
			Ab 2021 werde ich wöchentlich Cocktail Rezepte posten. Schau gerne
			bald wieder vorbei.
		</p>
	</div>
</template>

<script>
import Card from '../components/General/Card.vue'
export default {
	components: { Card },
}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	margin: 0 auto;
	padding: 100px 10%;
	min-height: 100vh;
	max-width: 1080px;
}

.card {
	display: flex;
	margin: 4em 0;
	justify-content: space-between;
	overflow: hidden;
	img {
		width: 50%;
		margin-top: 80px;
		margin-left: 20px;
		margin-bottom: -320px;
		transition: margin 200ms;
	}
	&:hover {
		img {
			margin-top: 0;
			margin-bottom: -240px;
		}
	}
	@media (max-width: 750px) {
		flex-direction: column;
		img {
			margin-left: 0;
			width: auto;
		}
	}
}

h1 {
	margin-bottom: 2em;
}

h2,
p {
	margin-bottom: 1em;
}
</style>
