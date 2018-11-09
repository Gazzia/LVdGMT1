var time = {
	IRLsectoIGmin: 1.5,
	hours: 13,
	minutes: 0,
	period: "journée",
	daysPlayed: 0,
	set: function(param) {
		if (param["minutes"] !== undefined) {
			this.minutes = param["minutes"];
			if (this.minutes > 59) {
				this.set({
					"hours": ++this.hours,
					"minutes": 0
				});
			}
		}
		if (param["hours"] !== undefined) {
			this.hours = param["hours"];
			if ((
					(24 >= this.hours && this.hours >= 21) ||
					(4 >= this.hours && this.hours >= 0)
				) && (time.period != "nuit")) { this.changePeriod("nuit"); }
			if (
				(9 >= this.hours && this.hours >= 5) &&
				(time.period != "aube")) { this.changePeriod("aube"); }
			if (
				(17 >= this.hours && this.hours >= 10) &&
				(time.period != "journée")) { this.changePeriod("journée"); }
			if (
				(20 >= this.hours && this.hours >= 18) &&
				(time.period != "crépuscule")) { this.changePeriod("crépuscule"); }

			if (this.hours > 23) {
				this.set({
					"hours": 0
				});
				this.daysPlayed++;
			}
			game.refreshPage();
			time.refreshClocks();
		}
	},
	start: function() {
		time.changePeriod('journée');
		time.refreshClocks();
		setInterval(function() {
			time.set({ "minutes": ++time.minutes });
			time.refreshClocks();
		}, time.IRLsectoIGmin * 1000);
	},
	formatDate: function() {
		let hours = this.hours < 10 ? "0" + this.hours : this.hours;
		let minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
		return (hours + ":" + minutes);
	},
	refreshClocks: function() {
		$('nav').html(time.formatDate());
	},
	changePeriod: function(per) {
		if (per == "journée") {
			time.period = "journée";
			$('.background').css('background-color', '');
			$('.sun').css({ 'display': '', "z-index": '', "left": '', "top": '' });
			$('.clouds.-back,.clouds.-front').css({ 'filter': '', 'opacity': 1 });
			$('.cover, .prop').css('filter', '');
			$('.stars').css('display', 'none');
		}
		if (per == "crépuscule") {
			time.period = "crépuscule";
			$('.background').css('background-color', 'rgb(255, 136, 108)');
			$('.sun').css({
				display: '',
				"z-index": 1,
				top: "44vh",
				left: "37vw"
			});
			$('.stars').css({
				display: '',
				opacity: "0.4",
			});
			$('.clouds').css('filter', 'saturate(85.3%) brightness(29%) sepia(100%) contrast(127%) hue-rotate(-44deg)');
			$('.cover, .prop')
				.css('filter', 'saturate(100.3%) brightness(43%) sepia(52%) contrast(128%) hue-rotate(-52deg)');
		}
		if (per == "nuit") {
			time.period = "nuit";
			$('.background').css('background-color', 'rgb(30, 26, 36)');
			$('.sun').css('display', 'none');
			$('.stars').css({
        display:'',
				opacity: "1",
			});
			$('.clouds.-back')
				.css({
					filter: 'saturate(85.3%) brightness(12%) sepia(100%) contrast(122%) hue-rotate(-125deg)',
					opacity: 0.3
				});
			$('.clouds.-front')
				.css({
					filter: 'saturate(85.3%) brightness(12%) sepia(100%) contrast(122%) hue-rotate(-125deg)',
					opacity: 0.7
				});
			$('.cover.-back')
				.css('filter', 'saturate(79.3%) brightness(11%) sepia(100%) contrast(110%) hue-rotate(-119deg)');
			$('.cover.-mid, .cover.-fore, .prop')
				.css('filter', 'saturate(126.3%) brightness(13%) sepia(82%) contrast(104%) hue-rotate(-135deg)');
		}
		if (per == "aube") {
			time.period = "aube";
			$('.background').css('background-color', 'rgb(149, 145, 207)');
			$('.sun').css({
				display: '',
				"z-index": 1,
				top: "32vh",
				left: "4vw"
			});
			$('.stars').css({
        display:'',
				opacity: "0.3",
			});
			$('.clouds.-back')
				.css({
					filter: 'saturate(116%) brightness(40%) contrast(147%) hue-rotate(132deg)',
					opacity: 0.3
				});
			$('.clouds.-front')
				.css({
					filter: 'saturate(116%) brightness(40%) contrast(147%) hue-rotate(132deg)',
					opacity: 0.7
				});
			$('.cover.-back')
				.css('filter', 'saturate(41.3%) brightness(33%) sepia(0%) contrast(100%) hue-rotate(9deg)');
			$('.cover.-mid, .cover.-fore, .prop')
				.css('filter', 'saturate(38.3%) brightness(52%) sepia(0%) contrast(113%) hue-rotate(-9deg)');
		}
		console.info(`TIME : période ${time.period}`);
	},
};
