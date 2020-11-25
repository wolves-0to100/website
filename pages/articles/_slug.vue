<template>
	<article>
		<h1>{{ article.title }}</h1>
		<p>{{ article.author }}</p>
		<nuxt-content :document="article" />
		<p>Posted: {{ formatDate(article.createdAt) }}</p>
		<p>Post last updated: {{ formatDate(article.updatedAt) }}</p>
	</article>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const article = await $content('articles', params.slug).fetch()

		return { article }
	},
	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			return new Date(date).toLocaleDateString('de', options)
		},
	},
}
</script>

<style>
.container {
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>
