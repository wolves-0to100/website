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
			<article-card
				v-for="article in articles"
				:key="article.title"
				:article="article"
			></article-card>
		</div>
	</div>
</template>

<script>
import ArticleCard from '../../components/Blog/ArticleCard.vue'

export default {
	name: 'Blog',
	components: { ArticleCard },
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

.posts {
	display: grid;
	grid-gap: 24px;
	grid-template-columns: repeat(auto-fill, minmax(460px, 1fr));
	@media (max-width: 750px) {
		grid-template-columns: 1fr;
	}
}
</style>
