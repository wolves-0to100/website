<template>
	<div class="box" @click="$emit('click')">
		<ul class="left">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>

		<ul class="right">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
		<div class="ticket">
			<span class="airline">{{ airline }}</span>
			<span class="airline airlineslip">{{ airline }}</span>
			<span class="boarding">{{ type }} pass</span>
			<div class="content">
				<span class="jfk">{{ departure }}</span>
				<span class="plane">
					<img src="~/assets/Tickets/plane.svg" />
				</span>
				<span class="sfo">{{ destination }}</span>

				<span class="jfk jfkslip">{{ departure }}</span>
				<span class="plane planeslip">
					<img src="~/assets/Tickets/plane.svg" />
				</span>
				<span class="sfo sfoslip">{{ destination }}</span>
				<div class="sub-content">
					<span class="watermark">0to100ink</span>
					<span class="name"
						>PASSENGER NAME<br /><span>{{ name }}</span></span
					>
					<span class="flight"
						>FLIGHT N&deg;<br /><span>{{
							flightNumber
						}}</span></span
					>
					<span class="gate"
						>GATE<br /><span>{{ gate }}</span></span
					>
					<span class="seat"
						>SEAT<br /><span>{{ seat }}</span></span
					>
					<span class="boardingtime"
						>BOARDING TIME<br /><span>{{ date }}</span></span
					>

					<span class="flight flightslip"
						>FLIGHT N&deg;<br /><span>{{
							flightNumber
						}}</span></span
					>
					<span class="seat seatslip">
						SEAT<br />
						<span>{{ seat }}</span>
					</span>
					<span class="name nameslip"
						>PASSENGER NAME<br /><span>{{ name }}</span></span
					>
				</div>
			</div>
			<div class="barcode"></div>
			<div class="barcode slip"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Ticket',
	props: {
		data: {
			type: Object,
			default: null,
		},
	},
	computed: {
		name() {
			return this.data?.name
		},
		date() {
			return this.data?.date
		},
		seat() {
			return this.data?.seat
		},
		gate() {
			return this.data?.gate
		},
		flightNumber() {
			return this.data?.flightNumber
		},
		destination() {
			return this.data?.destination
		},
		departure() {
			return this.data?.departure
		},
		airline() {
			return this.data?.airline
		},
		type() {
			return this.data?.type
		},
	},
}
</script>

<style lang="scss" scoped>
.box {
	position: relative;
	display: inline-block;
	cursor: pointer;
}

.ticket {
	width: 600px;
	height: 250px;
	background: rgb(69, 16, 147);
	border-radius: 3px;
	border-top: 1px solid rgb(57, 12, 124);
	border-bottom: 1px solid rgb(57, 12, 124);
}

.left {
	margin: 0;
	padding: 0;
	list-style: none;
	position: absolute;
	top: 0px;
	left: -5px;
}

.left li {
	width: 0px;
	height: 0px;
}

.left li:nth-child(-n + 2) {
	margin-top: 8px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-right: 5px solid rgb(69, 16, 147);
}

.left li:nth-child(3),
.left li:nth-child(6) {
	margin-top: 8px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-right: 5px solid #eeeeee;
}

.left li:nth-child(4) {
	margin-top: 8px;
	margin-left: 2px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-right: 5px solid #eeeeee;
}

.left li:nth-child(5) {
	margin-top: 8px;
	margin-left: -1px;
	border-top: 6px solid transparent;
	border-bottom: 6px solid transparent;
	border-right: 6px solid #eeeeee;
}

.left li:nth-child(7),
.left li:nth-child(9),
.left li:nth-child(11),
.left li:nth-child(12) {
	margin-top: 7px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-right: 5px solid #e5e5e5;
}

.left li:nth-child(8) {
	margin-top: 7px;
	margin-left: 2px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-right: 5px solid #e5e5e5;
}

.left li:nth-child(10) {
	margin-top: 7px;
	margin-left: 1px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-right: 5px solid #e5e5e5;
}

.left li:nth-child(13) {
	margin-top: 7px;
	margin-left: 2px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-right: 5px solid rgb(69, 16, 147);
}

.left li:nth-child(14) {
	margin-top: 7px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-right: 5px solid rgb(69, 16, 147);
}

.right {
	margin: 0;
	padding: 0;
	list-style: none;
	position: absolute;
	top: 0px;
	right: -5px;
}

.right li:nth-child(-n + 2) {
	margin-top: 8px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-left: 5px solid rgb(69, 16, 147);
}

.right li:nth-child(3),
.right li:nth-child(4),
.right li:nth-child(6) {
	margin-top: 8px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-left: 5px solid #eeeeee;
}

.right li:nth-child(5) {
	margin-top: 8px;
	margin-left: -2px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-left: 5px solid #eeeeee;
}

.right li:nth-child(8),
.right li:nth-child(9),
.right li:nth-child(11) {
	margin-top: 7px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-left: 5px solid #e5e5e5;
}

.right li:nth-child(7) {
	margin-top: 7px;
	margin-left: -3px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-left: 5px solid #e5e5e5;
}

.right li:nth-child(10) {
	margin-top: 7px;
	margin-left: -2px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-left: 5px solid #e5e5e5;
}

.right li:nth-child(12) {
	margin-top: 7px;
	border-top: 6px solid transparent;
	border-bottom: 6px solid transparent;
	border-left: 6px solid #e5e5e5;
}

.right li:nth-child(13),
.right li:nth-child(14) {
	margin-top: 7px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-left: 5px solid rgb(69, 16, 147);
}

.ticket:after {
	content: '';
	position: absolute;
	right: 200px;
	top: 0px;
	width: 2px;
	height: 250px;
	box-shadow: inset 0 0 0 #f1f1f1, inset 0 -10px 0 #f4f4f4,
		inset 0 -20px 0 #f1f1f1, inset 0 -30px 0 #f4f4f4,
		inset 0 -40px 0 #f1f1f1, inset 0 -50px 0 #999999,
		inset 0 -60px 0 #e5e5e5, inset 0 -70px 0 #999999,
		inset 0 -80px 0 #e5e5e5, inset 0 -90px 0 #999999,
		inset 0 -100px 0 #e5e5e5, inset 0 -110px 0 #999999,
		inset 0 -120px 0 #e5e5e5, inset 0 -130px 0 #999999,
		inset 0 -140px 0 #e5e5e5, inset 0 -150px 0 #b0b0b0,
		inset 0 -160px 0 #eeeeee, inset 0 -170px 0 #b0b0b0,
		inset 0 -180px 0 #eeeeee, inset 0 -190px 0 #b0b0b0,
		inset 0 -200px 0 #eeeeee, inset 0 -210px 0 #b0b0b0,
		inset 0 -220px 0 #f1f1f1, inset 0 -230px 0 #f4f4f4,
		inset 0 -240px 0 #f1f1f1, inset 0 -250px 0 #f4f4f4;
}

.ticket:before {
	content: '';
	position: absolute;
	z-index: 5;
	right: 199px;
	top: 0px;
	width: 1px;
	height: 250px;
	box-shadow: inset 0 0 0 rgb(69, 16, 147), inset 0 -10px 0 rgb(73, 16, 158),
		inset 0 -20px 0 rgb(69, 16, 147), inset 0 -30px 0 rgb(73, 16, 158),
		inset 0 -40px 0 rgb(69, 16, 147), inset 0 -50px 0 #ffffff,
		inset 0 -60px 0 #e5e5e5, inset 0 -70px 0 #ffffff,
		inset 0 -80px 0 #e5e5e5, inset 0 -90px 0 #ffffff,
		inset 0 -100px 0 #e5e5e5, inset 0 -110px 0 #ffffff,
		inset 0 -120px 0 #e5e5e5, inset 0 -130px 0 #ffffff,
		inset 0 -140px 0 #e5e5e5, inset 0 -150px 0 #ffffff,
		inset 0 -160px 0 #eeeeee, inset 0 -170px 0 #ffffff,
		inset 0 -180px 0 #eeeeee, inset 0 -190px 0 #ffffff,
		inset 0 -200px 0 #eeeeee, inset 0 -210px 0 #ffffff,
		inset 0 -220px 0 rgb(69, 16, 147), inset 0 -230px 0 rgb(73, 16, 158),
		inset 0 -240px 0 rgb(69, 16, 147), inset 0 -250px 0 rgb(73, 16, 158);
}

.content {
	position: absolute;
	top: 40px;
	width: 100%;
	height: 170px;
	background: #eee;
}

.airline {
	position: absolute;
	top: 10px;
	left: 10px;
	font-family: Arial;
	font-size: 20px;
	font-weight: bold;
	color: rgb(233, 233, 233);
}

.boarding {
	position: absolute;
	top: 10px;
	right: 220px;
	font-family: Arial;
	font-size: 18px;
	color: rgba(255, 255, 255, 0.6);
	text-transform: capitalize;
}

.jfk {
	position: absolute;
	top: 10px;
	left: 20px;
	font-family: Arial;
	font-size: 38px;
	color: #222;
}

.sfo {
	position: absolute;
	top: 10px;
	left: 180px;
	font-family: Arial;
	font-size: 38px;
	color: #222;
}

.plane {
	position: absolute;
	display: block;
	left: 95px;
	top: 14px;
}

.sub-content {
	background: #e5e5e5;
	width: 100%;
	height: 100px;
	position: absolute;
	top: 70px;
}

.watermark {
	position: absolute;
	left: 5px;
	top: -10px;
	font-family: Arial;
	font-size: 110px;
	font-weight: bold;
	color: rgba(255, 255, 255, 0.2);
}

.name {
	position: absolute;
	top: 10px;
	left: 10px;
	font-family: Arial Narrow, Arial;
	font-weight: bold;
	font-size: 14px;
	color: #999;
}

.name span {
	color: #555;
	font-size: 17px;
}

.flight {
	position: absolute;
	top: 10px;
	left: 180px;
	font-family: Arial Narrow, Arial;
	font-weight: bold;
	font-size: 14px;
	color: #999;
}

.flight span {
	color: #555;
	font-size: 17px;
}

.gate {
	position: absolute;
	top: 10px;
	left: 280px;
	font-family: Arial Narrow, Arial;
	font-weight: bold;
	font-size: 14px;
	color: #999;
}

.gate span {
	color: #555;
	font-size: 17px;
}

.seat {
	position: absolute;
	top: 10px;
	left: 350px;
	font-family: Arial Narrow, Arial;
	font-weight: bold;
	font-size: 14px;
	color: #999;
}

.seat span {
	color: #555;
	font-size: 17px;
}

.boardingtime {
	position: absolute;
	top: 60px;
	left: 10px;
	font-family: Arial Narrow, Arial;
	font-weight: bold;
	font-size: 14px;
	color: #999;
}

.boardingtime span {
	color: #555;
	font-size: 17px;
}

.barcode {
	position: absolute;
	left: 8px;
	bottom: 6px;
	height: 30px;
	width: 90px;
	background: #222;
	box-shadow: inset 0 1px 0 rgb(69, 16, 147), inset -2px 0 0 rgb(69, 16, 147),
		inset -4px 0 0 #222, inset -5px 0 0 rgb(69, 16, 147),
		inset -6px 0 0 #222, inset -9px 0 0 rgb(69, 16, 147),
		inset -12px 0 0 #222, inset -13px 0 0 #f1f1f1, inset -14px 0 0 #222,
		inset -15px 0 0 #f1f1f1, inset -16px 0 0 #222, inset -17px 0 0 #f1f1f1,
		inset -19px 0 0 #222, inset -20px 0 0 #f1f1f1, inset -23px 0 0 #222,
		inset -25px 0 0 #f1f1f1, inset -26px 0 0 #222, inset -26px 0 0 #f1f1f1,
		inset -27px 0 0 #222, inset -30px 0 0 #f1f1f1, inset -31px 0 0 #222,
		inset -33px 0 0 #f1f1f1, inset -35px 0 0 #222, inset -37px 0 0 #f1f1f1,
		inset -40px 0 0 #222, inset -43px 0 0 #f1f1f1, inset -44px 0 0 #222,
		inset -45px 0 0 #f1f1f1, inset -46px 0 0 #222, inset -48px 0 0 #f1f1f1,
		inset -49px 0 0 #222, inset -50px 0 0 #f1f1f1, inset -52px 0 0 #222,
		inset -54px 0 0 #f1f1f1, inset -55px 0 0 #222, inset -57px 0 0 #f1f1f1,
		inset -59px 0 0 #222, inset -61px 0 0 #f1f1f1, inset -64px 0 0 #222,
		inset -66px 0 0 #f1f1f1, inset -67px 0 0 #222, inset -68px 0 0 #f1f1f1,
		inset -69px 0 0 #222, inset -71px 0 0 #f1f1f1, inset -72px 0 0 #222,
		inset -73px 0 0 #f1f1f1, inset -75px 0 0 #222, inset -77px 0 0 #f1f1f1,
		inset -80px 0 0 #222, inset -82px 0 0 #f1f1f1, inset -83px 0 0 #222,
		inset -84px 0 0 #f1f1f1, inset -86px 0 0 #222, inset -88px 0 0 #f1f1f1,
		inset -89px 0 0 #222, inset -90px 0 0 #f1f1f1;
}

.slip {
	left: 455px;
}

.nameslip {
	top: 60px;
	left: 410px;
}

.flightslip {
	left: 410px;
}

.seatslip {
	left: 540px;
}

.jfkslip {
	font-size: 30px;
	top: 20px;
	left: 410px;
}

.sfoslip {
	font-size: 30px;
	top: 20px;
	left: 530px;
}

.planeslip {
	left: 460px;
}

.airlineslip {
	left: 425px;
}
</style>
