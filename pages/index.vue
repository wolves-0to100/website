<template>
	<div class="container">
		<h1>Hey! <span class="plane">✈️</span></h1>
		<p>
			Schön das du hier gelandet bist. Mein Name ist Marcel. 0to100 ist
			ein kleines Projekt um meine Ideen, Prozesse und Erlebnisse
			festzuhalten. In unregelmäßigen Abständen schreibe ich ein paar
			Blogposts. Zusätzliche streame ich ab und an mal auf Twitch.
		</p>

		<section>
			<h2>Links</h2>
			<div class="links">
				<div>
					<a
						href="https://instagram.com/marcelxpfeifer"
						rel="noopener noreferrer"
					>
						Instagram
					</a>
					<p>
						Hier teile ich ein paar Eindrücke zu meinen Projekten
						und halte euch mit Storys über aktuelle Ereignisse auf
						dem Laufendem.
					</p>
				</div>
				<div>
					<nuxt-link to="/blog">Blog</nuxt-link>
					<p>
						Mein Blog ist mein digitales Notizbuch, um einige
						Gedanken, Ideen und coole Dinge mit dem Internet zu
						teilen.
					</p>
				</div>
				<div>
					<a href="https://flags.0to100.ink">Twitch Spiele</a>
					<p>
						Aktuell gibt es nur ein Spiel, welches wir zusammen im
						Stream gebaut haben. Bald gibt es hier hoffentlich mehr.
					</p>
				</div>
				<div>
					<nuxt-link to="/cocktails">Cocktails</nuxt-link>
					<p>
						Ab 2021 werde ich wöchentlich Cocktail Rezepte posten.
						Wir werden dafür noch dieses Jahr eine App zusammen
						bauen.
					</p>
				</div>
				<div>
					<a href="https://wolves.ink">Meine Firma</a>
					<p>
						Wolves ist meine Firma über welche ich Anwendungen und
						Apps veröffentliche.
					</p>
				</div>
			</div>
		</section>

		<card @mouseover="animated = true" @mouseleave="animated = false">
			<div>
				<h2>Twitch</h2>
				<p>
					Seit Beginn 2020 baue ich mal Apps, mal Spiele und manchmal
					auch Webseiten. Nur eins ist sicher! Irgendwas läuft immer
					schief. Schau doch gerne mal vorbei.
				</p>
				<p>
					Dabei fangen wir immer bei 0 an und erstellen alles on
					Stream. Egal ob Overlay, Alerts oder eben eins der Projekte.
				</p>
				<p>
					Darfür einfach nur hier lang!
					<a href="https://www.twitch.tv/0to100ink">Twitch</a>
				</p>
			</div>
			<memoji class="memoji" :animated="animated" />
		</card>
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
	@media (min-width: 1600px) {
		padding: 100px 160px;
	}
}

.card {
	display: flex;
	margin: 4em 0;
	justify-content: space-between;
	overflow: hidden;
	.memoji {
		min-width: 40%;
		height: 100%;
		min-height: 180px;
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

section {
	margin: 4em 0 2em;
	h2 {
		font-size: 0.8em;
	}
}

.links {
	display: grid;
	grid-gap: 1em 2em;
	grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
	@media (max-width: 750px) {
		grid-template-columns: 1fr;
	}
	a {
		display: inline-block;
		position: relative;
		margin-bottom: 6px;
		&::after {
			content: '->';
			position: absolute;
			right: -20px;
			letter-spacing: 0;
		}
	}
	p {
		font-size: 0.9em;
		color: rgb(96, 96, 96);
	}
}

.dark-mode {
	.links p {
		color: rgb(146, 146, 146);
	}
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
