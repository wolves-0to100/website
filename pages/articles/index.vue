<template>
	<div class="container">
		<h1>Posts</h1>
		<a></a>
	</div>
</template>

<script>
export default {
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
