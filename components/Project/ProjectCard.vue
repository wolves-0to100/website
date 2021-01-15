<template>
	<Card class="project">
		<div>
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
			margin-top: 0%;
			margin-bottom: -10%;
		}
	}
	@media (max-width: 1000px) {
		flex-direction: column;
	}
}
div {
	width: 50%;
	margin-right: 10%;
	@media (max-width: 1000px) {
		margin: 0;
		width: 100%;
	}
}

img {
	transition: margin 200ms;
	margin: 10% auto -20%;
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
