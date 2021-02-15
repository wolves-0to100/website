<template>
	<nuxt-link class="post" :to="`/blog/${article.slug}/`">
		<card>
			<h3>{{ article.title }}</h3>
			<span class="tag">{{ article.tags }}</span>
			<p>{{ article.description }}</p>
			<p class="date">
				Veröffentlicht am {{ getDate(article.createdAt) }}
			</p>
		</card>
	</nuxt-link>
</template>

<script>
export default {
	name: 'ArticleCard',
	props: {
		article: {
			type: Object,
			default: () => {
				return {
					slug: 'test',
					title: 'Hello World',
					tags: '',
					description: 'Ich sollte hier eigentlich nie auftauchen.',
					createdAt: new Date().toString(),
				}
			},
		},
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
}
</script>

<style lang="scss" scoped>
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

.dark-mode {
	.tag {
		box-shadow: 2px 2px 8px 2px rgba(100, 100, 100, 0.08);
	}
}
</style>
