<template>
	<div class="container">
		<h1>Tickets</h1>
		<p>
			Danke das du Teil der Reise bist. Auf dieser Seite findest du alle
			Tickets die du über die Zeit gesammelt hast. Um die Tickets
			herunterzuladen klick sie einfach an.
		</p>
		<p v-if="!tickets.length">Wir konnten leider kein Ticket finden.</p>
		<ticket
			v-for="ticket in tickets"
			v-else
			:id="ticket.id"
			:key="ticket.id"
			:data="ticket"
			@click="download(ticket.id)"
		/>
	</div>
</template>

<script>
import { saveAs } from 'file-saver'
import html2canvas from 'html2canvas'
import ticket from '~/components/Tickets/ticket.vue'
export default {
	name: 'Tickets',
	components: { ticket },
	data() {
		return {
			tickets: [],
		}
	},
	async mounted() {
		this.tickets = await this.$http.$get(
			`https://twitch.0to100.ink/tickets/${this.$route.query.id}`
		)
	},
	methods: {
		async download(id) {
			const canvas = await html2canvas(document.getElementById(id))
			canvas.toBlob(function (blob) {
				saveAs(blob, `ticket-${id}.png`)
			})
		},
	},
	head: {
		title: '0to100 | Deine Tickets',
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

h1 {
	margin-bottom: 2em;
}

p {
	margin: 1em 0;
}
</style>
