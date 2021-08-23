<template>
	<div class="container">
		<main>
			<h1>Hey! <span class="plane">✈️</span></h1>
			<p>
				Schön das du hier gelandet bist. Mein Name ist Marcel. 0to100
				ist ein kleines Projekt um meine Ideen, Prozesse und Erlebnisse
				festzuhalten. In unregelmäßigen Abständen schreibe ich ein paar
				Blogposts. Zusätzliche streame ich ab und an mal auf Twitch.
			</p>

			<card @mouseover="animated = true" @mouseleave="animated = false">
				<div>
					<h2>Twitch</h2>
					<p>
						Seit Beginn 2020 baue ich mal Apps, mal Spiele und
						manchmal auch Webseiten. Nur eins ist sicher! Irgendwas
						läuft immer schief. Schau doch gerne mal vorbei.
					</p>
					<p>
						Dabei fangen wir immer bei 0 an und erstellen alles on
						Stream. Egal ob Overlay, Alerts oder eben eins der
						Projekte.
					</p>
					<p>
						Darfür einfach nur hier lang!
						<a href="https://www.twitch.tv/0to100ink">Twitch</a>
					</p>
				</div>
				<memoji class="memoji" :animated="animated" />
			</card>

			<section>
				<h2>Work</h2>
				<div class="links">
					<div>
						<a href="https://whitespace.ink">Whitespace</a>
						<p>
							Whitespace ist eine Idee, welche ich seit vielen
							Jahren verfolge. Folge mir, um auf dem Laufenden zu
							bleiben.
						</p>
					</div>
					<div>
						<a href="https://wolves.ink">Wolves</a>
						<p>
							Wolves ist meine Firma, mit welcher ich meine
							eigenen Ideen verwirklich. Dabei veröffentliche ich
							Anwendungen und Apps.
						</p>
					</div>
					<div>
						<a href="https://herrlich.media">Herrlich Media</a>
						<p>
							Seit Ende 2021 arbeite ich bei Herrlich Media als
							Software-Entwickler. Hier habe ich die Möglickeit,
							an diversen Kundenprojekten zu arbeiten.
						</p>
					</div>
				</div>
			</section>

			<section>
				<h2>Blog</h2>
				<div class="posts">
					<article-card
						v-for="article in articles"
						:key="article.title"
						:article="article"
					/>
				</div>
				<div class="nav">
					<nuxt-link to="/blog">Alle Posts anzeigen -></nuxt-link>
				</div>
			</section>

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
							Hier teile ich ein paar Eindrücke zu meinen
							Projekten und halte euch mit Storys über aktuelle
							Ereignisse auf dem Laufendem.
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
						<a href="https://games.0to100.ink">Streamer Games</a>
						<p>
							Streamer Games erlaubt es dir mit deinem Twitch Chat
							Spiele zu spielen. Wir arbeiten daran immer neue
							Spiele zu entwicklen.
						</p>
					</div>
					<div>
						<a href="https://cocktails.ink">Cocktails</a>
						<p>
							Ab 2021 werde ich wöchentlich Cocktail Rezepte
							posten. Wir werden dafür noch dieses Jahr eine App
							zusammen bauen.
						</p>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script>
import ArticleCard from '~/components/Blog/ArticleCard.vue'
import Memoji from '~/components/General/Memoji.vue'
import Card from '~/components/General/Card.vue'

export default {
	components: { ArticleCard, Card, Memoji },
	async asyncData({ $content }) {
		const articles = await $content('blog')
			.only(['slug', 'title', 'description', 'img', 'createdAt', 'tags'])
			.sortBy('createdAt', 'desc')
			.limit(2)
			.fetch()

		return {
			articles,
		}
	},
	data() {
		return {
			animated: false,
		}
	},
}
</script>

<style lang="scss" scoped>
.card {
	display: flex;
	margin: 4em 0;
	align-items: center;
	justify-content: space-between;
	overflow: hidden;
	.memoji {
		min-width: 32%;
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

.posts {
	display: grid;
	grid-gap: 24px;
	grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
	@media (max-width: 750px) {
		grid-template-columns: 1fr;
	}
}

.nav {
	display: flex;
	justify-content: flex-end;
	a {
		font-size: 14px;
		margin-top: 1em;
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
