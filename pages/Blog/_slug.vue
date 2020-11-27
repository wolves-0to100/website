<template>
	<article>
		<img
			class="img"
			:src="require(`~/assets/Blog/${article.img}`)"
			loading="lazy"
		/>
		<h1>{{ article.title }}</h1>
		<p class="author">{{ article.author }}</p>
		<ul class="toc">
			<li v-for="link of article.toc" :key="link.id">
				<NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
			</li>
		</ul>
		<nuxt-content :document="article" />
		<div class="dates">
			<p>Posted: {{ formatDate(article.createdAt) }}</p>
			<p>Post last updated: {{ formatDate(article.updatedAt) }}</p>
		</div>
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

<style lang="scss" scoped>
article {
	width: 100%;
	margin: 0 auto;
	padding: 100px 10%;
	max-width: 1080px;
}

.img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: calc(100px + 100px + 100px);
	object-fit: cover;
	pointer-events: none;
	user-select: none;
	opacity: 0.2;
}

h1 {
	font-size: 3rem;
	font-weight: 700;
}

.author {
	font-size: 0.8rem;
}

.dates {
	font-size: 0.9rem;
}

.nuxt-content-container {
	margin: 2rem 0;
}
</style>
