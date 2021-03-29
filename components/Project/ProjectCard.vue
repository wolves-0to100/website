<template>
	<Card class="project">
		<div class="content">
			<slot></slot>
		</div>
		<img :src="getImage(img)" :alt="`Bilder von ${title}`" />
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
			return require(`../../assets/Projects/${img}.png`)
		},
	},
}
</script>

<style lang="scss" scoped>
.project {
	width: 100%;
	display: flex;
	overflow: hidden;
	&:hover {
		img {
			margin-top: 5%;
			margin-bottom: -5%;
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

img {
	transition: margin 200ms;
	margin: 10% auto -10%;
	width: 40%;
	height: 100%;
	@media (max-width: 750px) {
		width: 60%;
	}
	@media (max-width: 600px) {
		width: 80%;
	}
}
</style>
