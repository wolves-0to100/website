<template>
	<div class="container">
		<h1>{{ page.title }}</h1>
		<nuxt-content :document="page" />
	</div>
</template>

<script>
export default {
	async asyncData({ $content }) {
		const page = await $content('page').fetch()

		return {
			page,
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
