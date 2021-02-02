<template>
	<div class="container">
		<h1>Blog</h1>
		<p class="introduction">
			Dies ist mein digitales Notizbuch, um einige Gedanken, Ideen und
			coole Dinge mit dem Internet zu teilen. Dabei werde ich Versuchen
			die Artikel in verschiedene Kategorien zu unterteilen. Vermutlich
			werden die Blogposts eher unregelmäßig entstehen.
		</p>
		<h2>Artikel</h2>
		<div class="posts">
			<nuxt-link
				v-for="article in articles"
				:key="article.title"
				class="post"
				:to="`/blog/${article.slug}/`"
			>
				<card>
					<h3>{{ article.title }}</h3>
					<span class="tag">{{ article.tags }}</span>
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
		const articles = await $content('blog', {
			deep: true,
		})
			.sortBy('createdAt', 'desc')
			.fetch()

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
		meta: [
			{
				hid: 'description',
				name: 'description',
				content:
					'Dies ist mein digitales Notizbuch, um einige Gedanken, Ideen und coole Dinge mit dem Internet zu teilen.',
			},
		],
		link: [
			{
				hid: 'canonical',
				rel: 'canonical',
				href: `https://0to100.ink/blog/`,
			},
		],
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

.tag {
	position: absolute;
	top: 20px;
	right: 25px;
	padding: 5px 12px;
	border-radius: 8px;
	box-shadow: 2px 2px 8px 2px rgba(165, 165, 165, 0.08);
	display: inline-block;
	font-size: 12px;
	z-index: -1;
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
	position: relative;
	h3 {
		margin-right: 50px;
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

.dark-mode {
	.tag {
		box-shadow: 2px 2px 8px 2px rgba(100, 100, 100, 0.08);
	}
}
</style>
