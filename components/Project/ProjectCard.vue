<template>
	<Card class="project">
		<div class="content">
			<slot></slot>
		</div>
		<nuxt-picture
			sizes="xs:500px sm:600px md:600px lg:600px xl:600px"
			loading="lazy"
			fit="cover"
			:src="getImage(img)"
			:alt="`Bilder von ${title}`"
		/>
	</Card>
</template>

<script>
import Card from '~/components/General/Card'
export default {
	name: 'ProjectCard',
	components: {
		Card,
	},
	props: {
		title: {
			type: String,
			default: '',
		},
		img: {
			type: String,
			default: '',
		},
	},
	methods: {
		getImage(img) {
			return `/Projects/${img}.png`
		},
	},
}
</script>

<style lang="scss" scoped>
.project {
	width: 100%;
	display: flex;
	align-items: center;
	overflow: hidden;
	&:hover {
		img {
			margin-top: 0;
			margin-bottom: 0;
		}
	}
	@media (max-width: 1000px) {
		flex-direction: column;
	}
}
.content {
	padding: 1rem 0;
	width: 50%;
	margin-right: 10%;
	@media (max-width: 1000px) {
		margin: 0;
		width: 100%;
	}
}

picture {
	transition: margin 800ms;
	margin: 12px auto -12px;
	width: 40%;
	max-width: 40%;
	height: 100%;
	@media (max-width: 750px) {
		width: 60%;
		max-width: 60%;
	}
	@media (max-width: 600px) {
		width: 80%;
		max-width: 80%;
	}
}
</style>
