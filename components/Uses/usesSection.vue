<template>
	<section>
		<div class="content">
			<div class="title">
				<h2>{{ section.title }}</h2>
			</div>
			<div class="tools">
				<div v-for="tool in section.content" :key="tool.title">
					<a v-if="tool.link" :href="tool.link" class="refLink"
						><h3>{{ tool.title }}</h3></a
					>
					<h3 v-else>{{ tool.title }}</h3>
					<ul>
						<li
							v-for="(detail, i) in tool.details"
							:key="`detail-${i}-${detail}`"
						>
							{{ detail }}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'UsesSection',
	props: {
		section: {
			type: Object,
			default: () => {
				return {
					title: '',
					content: [
						{
							title: '',
							details: [],
						},
					],
				}
			},
		},
	},
}
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	@media (max-width: 500px) {
		flex-direction: column;
	}
	.title {
		width: 35%;
		padding-right: 5%;
		@media (max-width: 500px) {
			width: 100%;
			padding: 0;
		}
	}
	h2 {
		position: sticky;
		top: 120px;
		@media (max-width: 500px) {
			position: relative;
			top: 0;
			margin-bottom: 3rem;
		}
	}

	ul {
		margin: 1rem 0 3rem;
	}
	.tools {
		width: 100%;
		iframe {
			margin-bottom: 3rem;
		}
	}
}

section {
	width: 100%;
	padding: 120px 10%;
	> * {
		margin: 0 auto;
		max-width: 1080px;
	}
}

section:nth-child(even) {
	background-color: #f8f8f8;
}

.refLink {
	h3 {
		display: inline-block;
	}
	&::after {
		position: absolute;
		margin-left: 6px;
		content: '*';
		font-size: 0.8em;
	}
}
</style>
