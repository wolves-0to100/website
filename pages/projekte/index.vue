<template>
	<div class="container">
		<h1>Projekte</h1>
	</div>
</template>

<script>
export default {
	head: {
		title: '0to100 | Projekte',
		link: [
			{
				hid: 'canonical',
				rel: 'canonical',
				href: `https://0to100.ink/projekte`,
			},
		],
	},
}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	margin: 0 auto;
	padding: 100px 10%;
	min-height: 100vh;
	max-width: 1080px;
	@media (min-width: 1600px) {
		padding: 100px 160px;
	}
}
</style>
