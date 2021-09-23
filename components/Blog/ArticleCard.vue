<template>
	<nuxt-link class="post" :to="`/blog/${article.slug}`">
		<card>
			<nuxt-picture
				class="img"
				:src="`/Blog/${article.img}`"
				:alt="article.title"
				sizes="xs:760px sm:760px md:760px lg:760px xl:760px"
				loading="lazy"
				fit="cover"
			/>
			<span class="tag">{{ article.tags }}</span>
			<div class="content">
				<h3>{{ article.title }}</h3>
				<p class="date">
					Veröffentlicht am {{ getDate(article.createdAt) }}
				</p>
				<p>{{ article.description }}</p>
			</div>
		</card>
	</nuxt-link>
</template>

<script>
import Card from '~/components/General/Card.vue'

export default {
	name: 'ArticleCard',
	components: { Card },
	props: {
		article: {
			type: Object,
			default: () => {
				return {
					slug: 'test',
					title: 'Hello World',
					tags: '',
					img: '',
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
		margin-bottom: 0.4em;
	}
	p {
		font-weight: 400;
	}
	.date {
		font-size: 0.8em;
		color: rgb(96, 96, 96);
		margin-bottom: 1em;
	}

	.card {
		padding: 0;
		height: 100%;
	}

	&:hover {
		color: inherit;
	}
}

picture {
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
}

.img {
	width: 100%;
	max-height: 220px;
}

.content {
	padding: 20px 25px;
}

.tag {
	position: absolute;
	top: 20px;
	right: 25px;
	padding: 5px 12px;
	border-radius: 8px;
	background-color: rgba(255, 255, 255, 0.6);
	box-shadow: 2px 2px 8px 2px rgba(165, 165, 165, 0.08);
	display: inline-block;
	font-size: 12px;
	z-index: 6;
}

.dark-mode {
	.tag {
		background-color: rgba(0, 0, 0, 0.6);
		box-shadow: 2px 2px 8px 2px rgba(100, 100, 100, 0.08);
	}
	.date {
		color: rgb(146, 146, 146);
	}
}
</style>
