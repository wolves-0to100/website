<template>
	<div class="container">
		<h1>Blog</h1>
		<p class="introduction">
			Dies ist mein digitales Notizbuch, um einige Gedanken, Ideen und
			coole Dinge mit dem Internet zu teilen. Dabei werde ich Versuchen
			die Artikel in verschiedene Kategorien zu unterteilen. Vermutlich
			werden die Blogposts eher unregelmäßig enstehen.
		</p>
		<h2>Artikel</h2>
		<div class="posts">
			<nuxt-link
				v-for="article in articles"
				:key="article.title"
				class="post"
				:to="'/blog/' + article.slug"
			>
				<card>
					<h3>{{ article.title }}</h3>
					<p>{{ article.description }}</p>
					<p class="date">
						Veröffentlicht am {{ getDate(article.createdAt) }}
					</p>
				</card>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import Card from '~/components/General/Card.vue'

export default {
	name: 'Blog',
	components: { Card },
	async asyncData({ $content }) {
		const articles = await $content('articles', {
			deep: true,
		}).fetch()

		return {
			articles,
		}
	},
	methods: {
		getDate(string) {
			return new Date(string).toLocaleDateString('de-DE', {
				day: '2-digit',
				month: 'long',
				year: 'numeric',
			})
		},
	},
	head: {
		title: '0to100 | Blog',
	},
}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	margin: 0 auto;
	padding: 100px 40px;
	min-height: 100vh;
	max-width: 1080px;
}

.introduction {
	margin: 1em 0 2em;
}

h2 {
	margin: 2em 0 1em;
}

.posts {
	display: grid;
	grid-gap: 24px;
	grid-template-columns: repeat(auto-fill, minmax(460px, 1fr));
	@media (max-width: 750px) {
		grid-template-columns: 1fr;
	}
}

.post {
	h3 {
		margin-bottom: 1em;
	}
	p {
		font-weight: 400;
	}
	.date {
		font-size: 0.8em;
		margin-top: 1em;
	}

	&:hover {
		color: inherit;
	}
}
</style>
