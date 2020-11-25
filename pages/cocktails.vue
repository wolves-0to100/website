<template>
	<div class="container">
		<h1>{{ page.title }}</h1>
		<nuxt-content :document="page" />
	</div>
</template>

<script>
export default {
	async asyncData({ $content }) {
		const cocktails = await $content('cocktails', { deep: true }).fetch()

		return {
			cocktails,
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
