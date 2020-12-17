<template>
	<article>
		<img
			class="img"
			:src="require(`~/assets/Blog/${article.img}`)"
			:alt="article.title"
			loading="lazy"
		/>
		<h1>{{ article.title }}</h1>
		<p class="author">{{ article.author }}</p>
		<div class="info">
			<div class="details">
				<div class="description">
					<p><b>Beschreibung</b></p>
					<p>{{ article.description }}</p>
				</div>
				<p>Lesezeit: {{ article.readingTime }} Minuten</p>
			</div>
			<ul class="toc">
				<li v-for="link of article.toc" :key="link.id">
					<NuxtLink
						:to="`#${link.id}`"
						:class="`level-${link.depth}`"
						>{{ link.text }}</NuxtLink
					>
				</li>
			</ul>
		</div>
		<nuxt-content :document="article" />
		<div class="dates">
			<p>Veröffentlicht: {{ formatDate(article.createdAt) }}</p>
			<p>Ak­tu­a­li­sie­ren: {{ formatDate(article.updatedAt) }}</p>
		</div>
	</article>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const article = await $content('blog', params.slug).fetch()

		return { article }
	},
	computed: {
		meta() {
			return {
				type: 'article',
				title: this.article.title,
				description: this.article.description,
				mainImage: require(`~/assets/Blog/${this.article.img}`),
			}
		},
	},
	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			return new Date(date).toLocaleDateString('de', options)
		},
	},
	head() {
		return {
			title: `0to100 | ${this.article.title}`,
			meta: [
				{
					property: 'article:published_time',
					content: this.article.createdAt,
				},
				{
					property: 'article:modified_time',
					content: this.article.updatedAt,
				},
				{
					hid: 'description',
					name: 'description',
					content: this.meta.description,
				},
				{
					hid: 'og:type',
					property: 'og:type',
					content: this.meta.type,
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.meta.title,
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.meta.description,
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: `https://0to100.ink${this.meta.mainImage}`,
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: this.meta.title,
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.meta.description,
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: `https://0to100.ink${this.meta.mainImage}`,
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: `https://0to100.ink${this.$route.fullPath}`,
				},
				{
					hid: 'twitter:url',
					name: 'twitter:url',
					content: `https://0to100.ink${this.$route.fullPath}`,
				},
			],
			link: [
				{
					hid: 'canonical',
					rel: 'canonical',
					href: `https://0to100.ink${this.$route.fullPath}`,
				},
			],
		}
	},
}
</script>

<style lang="scss">
.nuxt-content {
	h2,
	h3,
	h4 {
		margin-top: 2em;
	}

	p,
	ul,
	ol {
		margin: 1rem 0;
	}

	li {
		padding-left: 10px;
	}

	a {
		text-decoration: none;
		font-weight: 600;
	}
}

.nuxt-content-highlight {
	font-size: 0.9rem;
}

code[class*='language-'],
pre[class*='language-'] {
	font-family: 'JetBrains Mono';
}
</style>

<style lang="scss" scoped>
article {
	width: 100%;
	margin: 0 auto;
	padding: 100px 10%;
	max-width: 1080px;
	@media (min-width: 1600px) {
		padding: 100px 160px;
	}
}

.img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: calc(100px + 100px + 100px);
	object-fit: cover;
	pointer-events: none;
	user-select: none;
	opacity: 0.2;
	z-index: -1;
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

.info {
	display: flex;
	margin: 3rem 0 0;
	font-size: 0.9rem;
	@media (max-width: 850px) {
		flex-direction: column;
	}
}

.details {
	width: auto;
	max-width: 60%;
	margin-right: 2rem;
	> * {
		background-color: #f5f5f5;
		border-radius: 12px;
		padding: 1.5rem 2rem;
		margin-bottom: 1rem;
		&:last-child {
			margin-bottom: 0;
		}
	}
	@media (max-width: 850px) {
		max-width: 100%;
		margin-right: 0;
	}
}
.description {
	p {
		margin: 1rem 0;
	}
}

.dark-mode {
	.toc {
		background-color: #111111;
	}
	.details {
		> * {
			background-color: #111111;
		}
	}
}

.toc {
	display: inline-block;
	list-style: none;
	background-color: #f5f5f5;
	border-radius: 12px;
	padding: 1.5rem 2rem;
	min-width: 36%;

	.nuxt-link-active {
		border: none;
	}

	.level-3 {
		padding-left: 0.6em;
	}
	@media (max-width: 850px) {
		margin-top: 1rem;
		max-width: 100%;
	}
}
</style>
