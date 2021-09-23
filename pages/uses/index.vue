<template>
	<div class="wrapper">
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
							src="https://embed.music.apple.com/de/playlist/2021-year-mix/pl.u-jV89aBkCbe3oZA?l=en"
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
							src="https://embed.music.apple.com/de/playlist/modern-rock/pl.u-8aAVz7qHNer7gM?l=en"
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
					title: 'Entwicklung',
					content: [
						{
							title: 'MacBook Pro 2016',
							details: [
								'15" retina display',
								'2,9 GHz Quad-Core Intel Core i7',
								'16GB RAM',
								'512GB Speicher',
							],
							link: 'https://www.amazon.de/Apple-MacBook-Core-i7-Prozessor-8-Generation/dp/B07FL1M4LQ?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=MacBook+Pro&qid=1614241250&quartzVehicle=184-492&replacementKeywords=macbook&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUkxZUFJUMFUyN0lWJmVuY3J5cHRlZElkPUEwOTcyMzY2MlE2SVZKVzY5NFIxWiZlbmNyeXB0ZWRBZElkPUEwODkyNDEwUlFDVk9JR1lHSVdXJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ%3D%3D&linkCode=ll1&tag=0to1000a-21&linkId=acf3afb1bd4cafd083404e9ca44f330d&language=de_DE&ref_=as_li_ss_tl',
						},
						{
							title: 'Keyboard',
							details: ['Apple Magic Keyboard 2', 'Space Grey'],
							link: 'https://www.amazon.de/Apple-Magic-Keyboard-Ziffernblock-Deutsch/dp/B07BR1FNCV?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=Apple+Magic+Keyboard+2&qid=1614241332&quartzVehicle=72-810&replacementKeywords=apple+magic+keyboard&sr=8-2&linkCode=ll1&tag=0to1000a-21&linkId=4339ffca15bf885c1e8873cf9fb776fd&language=de_DE&ref_=as_li_ss_tl',
						},
						{
							title: 'Trackpad',
							details: ['Apple Magic Trackpad 2', 'Space Grey'],
							link: 'https://www.amazon.de/Magic-Trackpad-2-Space-Grey/dp/B07BS1RQ4N?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=Apple+Magic+Trackpad+2&qid=1614241356&quartzVehicle=72-810&replacementKeywords=apple+magic+trackpad&sr=8-1&linkCode=ll1&tag=0to1000a-21&linkId=1d684640b8467480df634551bedd1415&language=de_DE&ref_=as_li_ss_tl',
						},
						{
							title: 'Monitor',
							details: ['LG Ultrawide Display', '27" Diagonale'],
							link: 'https://www.amazon.de/LG-29WL50S-B-Zoll-UltraWideTM-Maxxaudio/dp/B07XTW5FPH?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=LG+Ultrawide+Display+27+zoll&qid=1614241410&sr=8-3&linkCode=ll1&tag=0to1000a-21&linkId=afcfc156d7ccd62a66358cd841cc1b1d&language=de_DE&ref_=as_li_ss_tl',
						},
					],
				},
				{
					title: 'Gaming',
					content: [
						{
							title: 'AMD Ryzen 7 5800X',
							details: ['8x 3.80GHz'],
							link: 'https://www.amazon.de/Memory-PC-Aufr%C3%BCst-Kit-komplett-montiert/dp/B08P32KTQZ?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=AMD+Ryzen+7+5800X&qid=1629111958&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExTllNVlhSTTI1R1JEJmVuY3J5cHRlZElkPUEwNTM1OTYwM0dHMjNPOUlQOUQzNSZlbmNyeXB0ZWRBZElkPUEwMTg2ODAwMTVOS0oyTUg0RFVEOCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU%3D&linkCode=ll1&tag=0to1000a-21&linkId=1bf281817d08a97441d76e02c8952dd3&language=de_DE&ref_=as_li_ss_tl',
						},
						{
							title: 'Corsair Hydro Series H100x',
							details: ['CPU Wasserkühlung'],
							link: 'https://www.amazon.de/Corsair-Wasserk%C3%BChlung-L%C3%BCfter-Performance-schwarz/dp/B07B68T46Q?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=Corsair+Hydro+Series+H100x&qid=1629112022&sr=8-3&linkCode=ll1&tag=0to1000a-21&linkId=25627b89696e943a0fb5a1dd1f2ac36e&language=de_DE&ref_=as_li_ss_tl',
						},
						{
							title: 'AMD Radeon RX Vega 64',
							details: ['Grafikkarte'],
						},
						{
							title: 'MSI MPG B550 Gaming Edge WiFi',
							details: ['Motherboard', 'USB 3.2', 'WLAN 6'],
							link: 'https://www.amazon.de/MSI-MPG-B550-Gaming-Motherboard/dp/B08B4THL9P?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=MSI+MPG+B550+Gaming+Edge+WIFI+AMD+B550&qid=1629112257&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFPQUEwRVJSQkpERVMmZW5jcnlwdGVkSWQ9QTAyNzU2MzMyUjdJNFMwT0RINk1OJmVuY3J5cHRlZEFkSWQ9QTA1MTc3NjYxS0tVQTRIR0cwUVA3JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ%3D%3D&linkCode=ll1&tag=0to1000a-21&linkId=8131081e0efcd3464b363c615cb9ba47&language=de_DE&ref_=as_li_ss_tl',
						},
						{
							title: 'Samsung 980 PRO',
							details: ['1 TB', 'PCIe 4.0', 'NVMe M.2'],
							link: 'https://www.amazon.de/Samsung-7-000-Internes-Solid-MZ-V8P2T0BW/dp/B08GS7748F?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=1000GB%2BSamsung%2B980%2BPro%2BM.2%2BPCIe%2B4.%2B3D-NAND%2BTLC&qid=1629112387&sr=8-3&th=1&linkCode=ll1&tag=0to1000a-21&linkId=10c496271a984db51d9dce9d59c0e72b&language=de_DE&ref_=as_li_ss_tl',
						},
						{
							title: 'HyperX Fury',
							details: ['2x 16GB', '3200MHz DDR4'],
							link: 'https://www.amazon.de/HyperX-HX432C16FB3AK2-16-Arbeitsspeicher-3200MHz/dp/B083PXC5L3?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=32GB%2BHyperX%2BFURY%2BRGB%2BDDR4-3200%2BDIMM&qid=1629112534&sr=8-1&th=1&linkCode=ll1&tag=0to1000a-21&linkId=71c8963254fc735890cbc16532435f86&language=de_DE&ref_=as_li_ss_tl',
						},
						{
							title: 'Lian Li PC-O11DX',
							details: ['Schwarz'],
							link: 'https://www.amazon.de/Lian-PC-O11DX-Dynamischer-Midi-Tower-geh%C3%A4rtetes/dp/B07C88X1VV?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=Lian+Li+PC-O11+Dynamic&qid=1629111807&sr=8-1&linkCode=ll1&tag=0to1000a-21&linkId=d03d94a6e3143580dce2465d48fd6deb&language=de_DE&ref_=as_li_ss_tl',
						},
						{
							title: 'Monitor',
							details: ['LG Ultrawide Display', '27" Diagonale'],
							link: 'https://www.amazon.de/LG-29WL50S-B-Zoll-UltraWideTM-Maxxaudio/dp/B07XTW5FPH?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=LG+Ultrawide+Display+27+zoll&qid=1614241410&sr=8-3&linkCode=ll1&tag=0to1000a-21&linkId=afcfc156d7ccd62a66358cd841cc1b1d&language=de_DE&ref_=as_li_ss_tl',
						},
						{
							title: 'Mikrofone',
							details: ['Rode Podcaster USB Mic'],
							link: 'https://www.amazon.de/Rode-Podcaster-Dynamisches-Gro%C3%9Fmembranmikrofon-USB-Anschluss/dp/B000JM46FY?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=Rode+Podcaster+USB+Mic&qid=1614241463&sr=8-10&linkCode=ll1&tag=0to1000a-21&linkId=0598e04a9828eb27f6b3a737d2529ab1&language=de_DE&ref_=as_li_ss_tl',
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
							link: 'https://www.amazon.de/Neu-Apple-iPad-Wi-Fi-128-GB/dp/B0863YSKCM?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=iPad+Pro+2018&qid=1614241493&quartzVehicle=184-492&replacementKeywords=ipad+2018&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVDMyM0taVjBNUzhCJmVuY3J5cHRlZElkPUEwNzI1ODQ1MzA1WEtHNlpCVEhJSSZlbmNyeXB0ZWRBZElkPUEwMjg3ODQ3UDRFNktRM1lEVkZGJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ%3D%3D&linkCode=ll1&tag=0to1000a-21&linkId=e33991f42402a51a01cb68d5c6186705&language=de_DE&ref_=as_li_ss_tl',
						},
						{
							title: 'iPhone X',
							details: ['256GB Speicher', 'Space Grey'],
							link: 'https://www.amazon.de/Apple-iPhone-X-256GB-Space-Grau/dp/B075LWF4C3?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=iPhone+X&qid=1614241515&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzQ0M2NDFMVzdYNUIwJmVuY3J5cHRlZElkPUEwMjE5Njk5MUxORTdHREQ3QlM4WiZlbmNyeXB0ZWRBZElkPUEwMjI1MTQ4MzYxWEc3WVZQWTdYWCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU%3D&linkCode=ll1&tag=0to1000a-21&linkId=0e7da1970180d2b53427897fae7415ee&language=de_DE&ref_=as_li_ss_tl',
						},
						{
							title: 'Canon EOS 6D',
							details: [
								'Canon Macro 100mm f2,8',
								'Canon 24-105 f4L',
								'Canon 70-300mm f4-5,6',
							],
							link: 'https://www.amazon.de/Canon-SLR-Digitalkamera-Megapixel-Display-Geh%C3%A4use/dp/B009C6WYTS?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=eos+6d&qid=1614241549&quartzVehicle=121-635&replacementKeywords=6d&sr=8-4&linkCode=ll1&tag=0to1000a-21&linkId=da08a1fca650b5209a9291938e80176b&language=de_DE&ref_=as_li_ss_tl',
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
		title: 'Uses | 0to100',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content:
					'Eine Liste von Dinge, welche ich in meinem Alltag benutze.',
			},
		],
		link: [
			{
				hid: 'canonical',
				rel: 'canonical',
				href: `https://0to100.ink/uses`,
			},
		],
	},
}
</script>

<style lang="scss" scoped>
.wrapper {
	width: 100%;
	padding: 0;
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
		max-width: 1200px;
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
