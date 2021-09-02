<template>
	<div class="container">
		<main>
			<h1>Impressum</h1>
			<h2>Angaben gemäß § 5 TMG:</h2>
			<p>Wolves Software UG (haftungsbeschränkt)<br /></p>
			<h3>Postanschrift:</h3>
			<p>Paulstraße 12<br />15831 Blankenfelde-Mahlow<br /></p>
			<h3>Kontakt:</h3>
			<p>Telefon: 03379 590521<br />E-Mail: support@wolves.ink</p>
			<br />
			<h3>Vertreten durch:</h3>
			<p>Geschäftsführer <br />Marcel Pfeifer<br /></p>
			<br />
			<h3>Eingetragen am</h3>
			<p>Amtsgericht Potsdam<br />HRB 32136 P<br /></p>

			<div class="notes">
				<h2>Information gemäß § 36 VSBG</h2>
				<p>
					Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz
					über die alternative Streitbeilegung in Verbrauchersachen)
					erklärt der Betreiber dieser Website: Wolves Software UG
					(haftungsbeschränkt)
				</p>
				<p>
					Wir sind weder bereit noch verpflichtet, an
					Streitbeilegungsverfahren vor einer
					Verbraucherschlichtungsstelle teilzunehmen.
				</p>
			</div>
		</main>
	</div>
</template>

<script>
export default {
	name: 'Impressum',
	head() {
		return {
			title: `Impressum | 0to100`,
			link: [
				{
					hid: 'canonical',
					rel: 'canonical',
					href: `https://0to100.ink${this.$route.fullPath}`,
				},
			],
		}
	},
}
</script>

<style lang="scss" scoped>
.notes {
	margin-top: 2em;
}

h1,
h2,
h3,
p {
	margin-bottom: 1em;
}
</style>
