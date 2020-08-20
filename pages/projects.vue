<template>
	<div>
		<h1>Projects</h1>
		<p v-for="project in projects" :key="project.path">
			{{ project.title }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'Projects',
	async asyncData({ $content }) {
		const projects = await $content('streams', { deep: true }).fetch()

		return {
			projects,
		}
	},
}
</script>

<style scoped></style>
