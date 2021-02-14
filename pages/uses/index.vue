<template>
	<div class="container">
		<section>
			<h1>/Uses</h1>
		</section>
		<uses-section
			v-for="section in sections"
			:key="section.title"
			:section="section"
		></uses-section>
		<section>
			<div class="content">
				<div class="title">
					<h2>Musik</h2>
				</div>
				<div class="tools">
					<div v-if="acceptCookies">
						<iframe
							allow="autoplay *; encrypted-media *; fullscreen *"
							frameborder="0"
							height="450"
							:style="iframeStyle"
							sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
							src="https://embed.music.apple.com/de/playlist/2020-year-mix/pl.u-oZylKLeCPyDvMN?l=en"
						></iframe>
						<iframe
							allow="autoplay *; encrypted-media *; fullscreen *"
							frameborder="0"
							height="450"
							:style="iframeStyle"
							sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
							src="https://embed.music.apple.com/de/playlist/code/pl.u-xlyNNxdFX7eK1N?l=en"
						></iframe>
						<iframe
							allow="autoplay *; encrypted-media *; fullscreen *"
							frameborder="0"
							height="450"
							:style="iframeStyle"
							sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
							src="https://embed.music.apple.com/de/playlist/remix-zone/pl.u-NpXmY4VCvx7jPr?l=en"
						></iframe>
					</div>
					<div v-else>
						<p>
							Um die Apple Music Playlists zu sehen musst du
							Cookies akzeptieren, da die Apple Music Player
							welche setzen.
						</p>
						<button @click="acceptCookies = true">
							Cookies erlauben
						</button>
					</div>
				</div>
			</div>
		</section>
		<section class="legal">
			<p>
				Die mit Sternchen (*) gekennzeichneten Links sind
				Affiliatelinks/Werbelinks.
			</p>
			<p>
				0to100 ist Teilnehmer des Amazon-Partnerprogramm, das zur
				Bereitstellung eines Mediums für Webseiten konzipiert wurde,
				mittels dessen durch die Platzierung von Partner-Links zu
				Amazon.de Entgelte verdient werden können.
			</p>
		</section>
	</div>
</template>

<script>
import usesSection from '~/components/Uses/usesSection.vue'
export default {
	name: 'Uses',
	components: { usesSection },
	data() {
		return {
			acceptCookies: false,
			sections: [
				{
					title: 'Hardware',
					content: [
						{
							title: 'MacBook Pro 2016',
							details: [
								'15" retina display',
								'2,9 GHz Quad-Core Intel Core i7',
								'16GB RAM',
								'512GB Speicher',
							],
							link: 'https://amzn.to/3qhSYI5',
						},
						{
							title: 'Radeon RX Vega 64 8 GB',
							details: ['im Sonnet eGFX Breakaway Box'],
							link: 'https://amzn.to/3jA5D6E',
						},
						{
							title: 'Keyboard',
							details: ['Apple Magic Keyboard 2', 'Space Grey'],
							link: 'https://amzn.to/36YIMfH',
						},
						{
							title: 'Trackpad',
							details: ['Apple Magic Trackpad 2', 'Space Grey'],
							link: 'https://amzn.to/3aSCIXv',
						},
						{
							title: 'Monitor',
							details: ['LG Ultrawide Display', '27" Diagonale'],
							link: 'https://amzn.to/3a1lU1c',
						},
						{
							title: 'Mikrofone',
							details: ['Rode Podcaster USB Mic'],
							link: 'https://amzn.to/3q8PK9I',
						},
					],
				},
				{
					title: 'Unterwegs',
					content: [
						{
							title: 'iPad Pro 2018',
							details: [
								'12,9" liquid retina display',
								'A12X Bionic Chip',
								'512GB Speicher',
								'Space Grey',
							],
							link: 'https://amzn.to/3q6yUYP',
						},
						{
							title: 'iPhone X',
							details: ['256GB Speicher', 'Space Grey'],
							link: 'https://amzn.to/3jvvcpk',
						},
						{
							title: 'Canon EOS 6D',
							details: [
								'Canon Macro 100mm f2,8',
								'Canon 24-105 f4L',
								'Canon 70-300mm f4-5,6',
							],
							link: 'https://amzn.to/36TTVhJ',
						},
					],
				},
				{
					title: 'Software',
					content: [
						{
							title: 'Visual Studio Code',
							details: ['Theme: Nord', 'Font: JetBrains Mono'],
						},
						{
							title: 'iTerm 2',
							details: ['Theme: Minimal'],
						},
						{
							title: 'ForkLift',
							details: ['FTP Client'],
						},
					],
				},
				{
					title: 'Design',
					content: [
						{
							title: 'Sketch',
							details: ['Eigene Design Arbeiten'],
						},
						{
							title: 'Figma',
							details: ['Design in Teams'],
						},
						{
							title: 'Affinity Suite',
							details: [
								'Bearbeitung von Bildern',
								'Erstellung von Vektorgrafiken',
								'Textarbeiten',
							],
						},
					],
				},
			],
			iframeStyle:
				'width: 100%;max-width: 660px;overflow: hidden;background: transparent;',
		}
	},
	head: {
		title: '0to100 | Uses',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content:
					'Eine Liste von Dinge, welche ich in meinem Alltag benutze.',
			},
		],
	},
}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	padding: 100px 0;
}

h1 {
	font-size: 3.5rem;
}

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

button {
	font-weight: bold;
	background-color: #fff;
	margin: 2em 0;
	padding: 12px 20px;
	border-radius: 4px;
	box-shadow: 1px 2px rgba(0, 0, 0, 0.1);
	transition: box-shadow 0.2s;
	&:hover {
		box-shadow: 0 0 rgba(0, 0, 0, 0.1);
	}
}

.dark-mode {
	button {
		color: #f8f8f8;
		background-color: #292929;
	}
	section:nth-child(even) {
		background-color: #222222;
	}
}

.legal {
	font-size: 0.9em;
	p {
		margin: 1em auto;
	}
}
</style>
