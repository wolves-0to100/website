<template>
	<div class="container">
		<h1>Posts</h1>
		<nuxt-link
			v-for="article in articles"
			:key="article.title"
			:to="'Blog/' + article.slug"
		>
			{{ article.title }}
		</nuxt-link>
	</div>
</template>

<script>
export default {
	name: 'Blog',
	async asyncData({ $content }) {
		const articles = await $content('articles', {
			deep: true,
		}).fetch()

		return {
			articles,
		}
	},
}
</script>

<style></style>
