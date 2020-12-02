<template>
	<div class="container">
		<h1>Posts</h1>
		<nuxt-link
			v-for="article in articles"
			:key="article.title"
			class="post"
			:to="'/Blog/' + article.slug"
		>
			<img
				:src="require(`~/assets/Blog/${article.img}`)"
				:alt="article.title"
			/>
			<div class="postInfo">
				<h2>{{ article.title }}</h2>
				<p>{{ article.author }}</p>
			</div>
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
	head: {
		title: '0to100 | Blog',
	},
}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	margin: 0 auto;
	padding: 100px 10%;
	max-width: 1080px;
}

.post {
	display: block;
	position: relative;
	width: 400px;
	height: 250px;
	overflow: hidden;
	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		object-fit: cover;
	}
	.postInfo {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 80px;
		width: 100%;
		padding: 12px 20px;
		font-weight: 400;
		background-color: rgba(255, 255, 255, 0.8);
	}
}

.dark-mode .post {
	.postInfo {
		background-color: rgba(26, 26, 26, 0.8);
	}
}
</style>
