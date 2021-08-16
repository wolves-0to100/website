<template>
	<div class="container">
		<main>
			<h1>Blog</h1>
			<p class="introduction">
				Dies ist mein digitales Notizbuch, um einige Gedanken, Ideen und
				coole Dinge mit dem Internet zu teilen. Dabei werde ich
				Versuchen die Artikel in verschiedene Kategorien zu unterteilen.
				Vermutlich werden die Blogposts eher unregelmäßig entstehen.
			</p>
			<h2>Artikel</h2>
			<div class="posts">
				<article-card
					v-for="article in articles"
					:key="article.title"
					:article="article"
				/>
			</div>
			<div class="nav">
				<nuxt-link v-if="rootBlog" :to="rootBlog" exact>
					Neuere Posts
				</nuxt-link>
				<nuxt-link
					v-else-if="hasPrev"
					:to="{
						params: { page: ($route.params.page | 0) - 1 },
					}"
				>
					Neuere Posts
				</nuxt-link>
				<nuxt-link
					v-if="hasNext"
					:to="{
						params: { page: ($route.params.page | 0) + 1 },
					}"
				>
					Ältere Posts
				</nuxt-link>
			</div>
		</main>
	</div>
</template>

<script>
import ArticleCard from '~/components/Blog/ArticleCard.vue'

export default {
	name: 'BlogList',
	components: { ArticleCard },
	async asyncData({ $content, params }) {
		const articlesPerPage = 6
		const articlesToSkip = (params.page * articlesPerPage) | 0
		const allArticles = await $content('blog').only('title').fetch()
		const articles = await $content('blog')
			.only(['slug', 'title', 'description', 'img', 'createdAt', 'tags'])
			.sortBy('createdAt', 'desc')
			.skip(articlesToSkip)
			.limit(articlesPerPage)
			.fetch()

		const hasNext = allArticles.length > articlesToSkip + articlesPerPage
		const hasPrev = articlesToSkip > 0
		const rootBlog = params.page === '1' ? '/blog' : null

		return {
			hasNext,
			hasPrev,
			articles,
			rootBlog,
		}
	},
	head: {
		title: 'Blog | 0to100',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content:
					'Dies ist mein digitales Notizbuch, um einige Gedanken, Ideen und coole Dinge mit dem Internet zu teilen.',
			},
		],
	},
}
</script>

<style lang="scss" scoped>
.introduction {
	margin: 1em 0 2em;
}

h2 {
	margin: 2em 0 1em;
}

.posts {
	display: grid;
	grid-gap: 24px;
	grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
	@media (max-width: 750px) {
		grid-template-columns: 1fr;
	}
}

.nav a {
	display: inline-block;
	font-size: 14px;
	margin-top: 1em;
	text-decoration: none;
}
</style>
