<template>
	<div class="container">
		<h1>Cocktails</h1>
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
	head: {
		title: '0to100 | Cocktails',
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
</style>
