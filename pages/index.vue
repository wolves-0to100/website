<template>
	<div class="container">
		<h1>Hey! <span class="plane">✈️</span></h1>
		<p>
			Schön das du hier gelandet bist. Mein Name ist Marcel. 0to100 ist
			ein kleines Projekt um meine Ideen, Prozesse und Erlebnisse
			festzuhalten. In unregelmäßigen Abständen schreibe ich ein paar
			Blogposts. Zusätzliche streame ich ab und an mal auf Twitch.
		</p>

		<card @mouseover="animated = true" @mouseleave="animated = false">
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
			<memoji class="memoji" :animated="animated" />
		</card>
		<h2>Cocktails</h2>
		<p>
			Ab 2021 werde ich wöchentlich Cocktail Rezepte posten. Schau gerne
			bald wieder vorbei.
		</p>
	</div>
</template>

<script>
import Memoji from '~/components/General/Memoji.vue'
import Card from '~/components/General/Card.vue'

export default {
	components: { Card, Memoji },
	data() {
		return {
			animated: false,
		}
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
}

.card {
	display: flex;
	margin: 4em 0;
	justify-content: space-between;
	overflow: hidden;
	max-height: 420px;
	.memoji {
		min-width: 40%;
		height: 100%;
	}
	@media (max-width: 750px) {
		flex-direction: column;
	}
}

h1,
h2,
p {
	margin-bottom: 1em;
}

.plane {
	display: inline-block;
	margin-left: 0.25em;
	animation: landing 4s;
}

@keyframes landing {
	0% {
		transform: translateX(100vw) translateY(-10vh) rotate(-145deg);
	}
	20% {
		transform: translateX(50vw) translateY(0vh) rotate(-135deg);
	}
	80% {
		transform: translateX(0) translateY(0) rotate(-135deg);
	}
	100% {
		transform: translateX(0) translateY(0) rotate(0);
	}
}
</style>
