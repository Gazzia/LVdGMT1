var time = {
	_IRLsectoIGmin: 1.5,
	get IRLsectoIGmin(){
		return time._IRLsectoIGmin;
	},
	set IRLsectoIGmin(nb){
		time._IRLsectoIGmin = nb;
		clearInterval(time.timeloop);
		time.timeloop = setInterval(function () {
			time.set({
				"minutes": ++time.minutes
			});
			time.refreshClocks();
		}, time._IRLsectoIGmin * 1000);
	},
	hours: 13,
	minutes: 0,
	period: "journée",
	daysPlayed: 0,
	set: function (param) {
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
			time.refreshPeriod();
			game.refreshPage();
			time.refreshClocks();
		}
	},
	start: function () {
		time.changePeriod('journée');
		time.refreshClocks();
		time.timeloop = setInterval(function () {
			time.set({
				"minutes": ++time.minutes
			});
			time.refreshClocks();
		}, time._IRLsectoIGmin * 1000);
	},
	formatDate: function () {
		let hours = this.hours < 10 ? "0" + this.hours : this.hours;
		let minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
		return (hours + ":" + minutes);
	},
	refreshClocks: function () {
		$('.playerMenu .clock').html(time.formatDate());
	},
	refreshPeriod: function () {
		if ((
				(24 >= this.hours && this.hours >= 21) ||
				(4 >= this.hours && this.hours >= 0)
			) && (time.period != "nuit")) {
			this.changePeriod("nuit");
		}
		if (
			(9 >= this.hours && this.hours >= 5) &&
			(time.period != "aube")) {
			this.changePeriod("aube");
		}
		if (
			(17 >= this.hours && this.hours >= 10) &&
			(time.period != "journée")) {
			this.changePeriod("journée");
		}
		if (
			(20 >= this.hours && this.hours >= 18) &&
			(time.period != "crépuscule")) {
			this.changePeriod("crépuscule");
		}

		if (this.hours > 23) {
			this.set({
				"hours": 0
			});
			this.daysPlayed++;
		}
	},
	changePeriod: function (per) {
		if (per == "journée") {
			time.period = "journée";
			$('.background').css('background-image', 'linear-gradient(to top, rgb(213, 232, 253) 75%, rgb(192, 210, 255))');
			$('.sun').css({
				'display': '',
				"z-index": '',
				"left": '',
				"top": ''
			});
			$('.clouds.-back,.clouds.-front').css({
				'filter': '',
				'opacity': 1
			});
			$('.cover, .prop').css('filter', '');
			$('.stars').css('display', 'none');
			$('main.main').removeClass('nightTheme');
		}
		if (per == "crépuscule") {
			time.period = "crépuscule";
			$('.background').css('background-image', 'radial-gradient(circle at center bottom, rgb(255, 140, 108) 50%, rgb(68, 54, 65) 95%)');
			$('.sun').css({
				display: '',
				"z-index": 1,
				top: "56vh",
				left: "37vw"
			});
			$('.stars').css({
				display: '',
				opacity: "0.4",
			});
			$('.clouds').css('filter', 'saturate(85.3%) brightness(29%) sepia(100%) contrast(127%) hue-rotate(-44deg)');
			$('.cover, .prop')
				.css('filter', 'saturate(100.3%) brightness(43%) sepia(52%) contrast(128%) hue-rotate(-52deg)');
			$('main.main').addClass('nightTheme');
		}
		if (per == "nuit") {
			time.period = "nuit";
			$('.background').css('background-image', 'linear-gradient(to top, rgb(22, 10, 30) 37%, rgb(0, 0, 0))');
			$('.sun').css('display', 'none');
			$('.stars').css({
				display: '',
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
			$('main.main').addClass('nightTheme');
		}
		if (per == "aube") {
			time.period = "aube";
			$('.background').css('background-image', 'linear-gradient(to top, rgb(255, 170, 46) 28%, rgb(128, 129, 146))');
			$('.sun').css('display', 'none');
			$('.stars').css('display', 'none');
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
			$('main.main').removeClass('nightTheme');
		}
		console.info(`TIME : période ${time.period}`);
	},
};