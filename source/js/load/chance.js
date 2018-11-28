chance = {
	isShown: false,
	show() {
		if (!chance.isShown) {
			game.ui.animations.pause();
			overlay.show("testDark");
			this.isShown = true;
			$('.chance').css({
				'display': 'block',
				'animation': 'open-modal 0.3s ease forwards'
			});
		}
		delay(function () {
			dice.show();
		}, 400);
	},

	hide() {
		if (chance.isShown) {
			$('.chance').css('animation', 'close-modal 0.3s ease forwards');
			delay(function () {
				game.ui.animations.play();
				$('.chance').css('display', 'none');
				overlay.hide();
				chance.isShown = false;
			}, 300);
		}
	},

	init(params) {
		this.consq = params.consq;
		if (params.type == "difficulté") {
			var diff = params.diff;
		}
		if (params.type == "lvl") {
			//TODO
		}
		var resultsRaw = {
			EcCr: [1, Math.round((diff / 3) * 20) - 1],
			Ec: [Math.round((diff / 3) * 20), Math.round(diff * 20) - 1],
			Ré: [Math.round(diff * 20), Math.round((diff + ((1 - diff) / 3) * 2) * 20) - 1],
			RéCr: [Math.round((diff + ((1 - diff) / 3) * 2) * 20), 20]
		};
		var resultsCalc = {
			EcCr: [],
			Ec: [],
			Ré: [],
			RéCr: []
		};
		resultsCalc.Ec = resultsRaw.Ec;
		resultsCalc.Ré = resultsRaw.Ré;
		if (resultsRaw.EcCr[1] <= 1) {
			if (resultsRaw.Ec[0] <= 1) {
				resultsCalc.EcCr = false;
				resultsCalc.Ec[0] = 1;
			} else {
				resultsCalc.EcCr = 1;
			}
		} else {
			resultsCalc.EcCr = resultsRaw.EcCr;
		}
		if (20 <= resultsRaw.RéCr[0]) {
			if (20 <= resultsRaw.Ré[1]) {
				resultsCalc.RéCr = false;
				resultsCalc.Ré[1] = 20;
			} else {
				(resultsRaw.Ré[1] <= resultsRaw.Ré[0] && 20 <= resultsRaw.Ré[0]) ?
				resultsCalc.RéCr = false: resultsCalc.RéCr = 20;
			}
		} else {
			resultsCalc.RéCr = resultsRaw.RéCr;
		}
		if (resultsRaw.Ec[1] <= resultsRaw.Ec[0]) resultsCalc.Ec = resultsRaw.Ec[0];
		if (resultsRaw.Ré[1] <= resultsRaw.Ré[0]) resultsCalc.Ré = resultsRaw.Ré[0];

		chance.resultGrid = resultsCalc;

		$('.chance aside').html('');
		var _grid = chance.resultGrid;
		var _cats = {
			list: [_grid.EcCr, _grid.Ec, _grid.Ré, _grid.RéCr],
			txt: ["Échec critique", "Échec", "Réussite", "Réussite critique"],
			names: ["EcCr", "Ec", "Ré", "RéCr"]
		};
		for (let cat in _cats.list) {
			if (_cats.list[cat]) {
				if (typeof _cats.list[cat] == "number") {
					$('.chance aside').append(`<div class='${_cats.names[cat]} cat'><h2>${_cats.txt[cat]}</h2>${_cats.list[cat]}`);
				}
				if (typeof _cats.list[cat] == "object") {
					$('.chance aside').append(`<div class='${_cats.names[cat]} cat'><h2>${_cats.txt[cat]}</h2>${_cats.list[cat][0]} à ${_cats.list[cat][1]}`);
				}
			}
		}
		chance.show();
	},

	getResult(_diceResult) {
		var _resultText, _resultClass;
		var _grid = chance.resultGrid;
		var _cats = {
			list: [_grid.EcCr, _grid.Ec, _grid.Ré, _grid.RéCr],
			txt: ["Échec critique", "Échec", "Réussite", "Réussite critique"],
			names: ["EcCr", "Ec", "Ré", "RéCr"]
		};
		for (cat in _cats.list) {
			if (_cats.list[cat]) {
				if (typeof _cats.list[cat] == "number") {
					if (_diceResult == _cats.list[cat]) {
						_resultText = _cats.txt[cat];
						_resultClass = _cats.names[cat];
					}
				}
				if (typeof _cats.list[cat] == "object") {
					if ((_cats.list[cat][0] <= _diceResult) && (_diceResult <= _cats.list[cat][1])) {
						_resultText = _cats.txt[cat];
						_resultClass = _cats.names[cat];
					}
				}
			}
		}

		$(`.chance aside .${_resultClass}`).css('animation', 'chanceCatShine 3s ease forwards');
		$(`.chance aside .${_resultClass} h2`).css('animation', 'chanceCatShine_h2 3s ease forwards');
		var notifDesc;
		(chance.consq[_resultClass].txt) ? notifDesc = `<br> <i>${chance.consq[_resultClass].txt}`: notifDesc = "";
		new Notification({
			type: `test-${_resultClass}`,
			txt: `Test de chance : ${_resultText}! ${notifDesc}`,
			timeOut: 80
		});
		delay(function () {
			if (chance.consq[_resultClass].script) chance.consq[_resultClass].script();
		}, 500);
		delay(function () {
			chance.hide();
		}, 3000);
	}
};