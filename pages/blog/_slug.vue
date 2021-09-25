<template>
	<div class="container">
		<nuxt-picture
			class="img"
			:src="`/Blog/${article.img}`"
			:alt="article.title"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
			loading="eager"
			height="400"
			fit="cover"
		/>
		<article>
			<div class="title">
				<h1>{{ article.title }}</h1>
				<p class="author">{{ article.author }}</p>
			</div>
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
	</div>
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
				mainImage: `/Blog/${this.article.img}`,
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
			title: `${this.article.title} | 0to100`,
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

<style lang="scss" scoped>
.container {
	width: 100%;
	padding: 0 0 100px;
	margin: 0 auto;
	min-height: 100vh;
	max-width: 1200px;
	@media (max-width: 1360px) {
		padding: 0 80px 100px;
		max-width: unset;
	}
	@media (max-width: 600px) {
		padding: 0 20px 80px;
	}
}

article {
	max-width: 760px;
}

.img {
	display: flex;
	justify-content: center;
	align-items: center;
	max-height: 400px;
	width: 100%;
	pointer-events: none;
	user-select: none;
	z-index: -1;
}

.title {
	position: relative;
	margin-top: -6rem;
	padding: 2rem 3rem 0 0;
	min-width: 50%;
	width: fit-content;
	z-index: 12;
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: white;
		z-index: -1;
	}
	&::before {
		content: '';
		position: absolute;
		top: -12px;
		left: 12px;
		right: -12px;
		bottom: 12px;
		background-color: #d90000;
		z-index: -2;
	}
	@media (max-width: 600px) {
		margin-top: -4rem;
	}
}

h1 {
	font-size: 3rem;
	font-weight: 700;
	@media (max-width: 600px) {
		font-size: 2.2rem;
	}
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
	.title::after {
		background-color: #1a1a1a;
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
	table {
		margin: 1em 0;
	}
	th {
		text-align: left;
	}
	tr {
		height: 1em;
	}
	td {
		vertical-align: top;
		padding: 0.2em 2em 0.2em 0;
	}

	a.nuxt-link-active {
		border-bottom: none;
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
