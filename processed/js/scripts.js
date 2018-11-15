/* jshint esversion: 6 */
function round(value, round) {
	var multiplier = Math.pow(10, round || 0);
	return Math.round(value * multiplier) / multiplier;
}
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);

var player = new Player();
var bob = new NPC({
	name: "Bob",
	race: "Human",
	money: 10
});

time.start();
game.loadPage(0);

//****************************
// Variables provisoires
//****************************

//****************************


chance = {
	isShown: false,
	show() {
		if (!this.isShown) {
			overlay.show();
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
		if (this.isShown) {
			overlay.hide();
			$('.chance').css('animation', 'close-modal 0.3s ease forwards');
			delay(function () {
				$('.chance').css('display', 'none');
				this.isShown = false;
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
			chance.consq[_resultClass].script();
		}, 500);
		delay(function () {
			chance.hide();
		}, 3000);
	}
};
//TODO: "Lancez le d20" clignotant
function toggle_color(div, color2, time) {
  var $selector = document.querySelector(div);
  var color1 = $selector.style.backgroundColor;
  setTransitionDurations($selector, time);
  $selector.style.backgroundColor = $selector.style.backgroundColor === color1 ? color2 : color1;
  console.log($selector.style.backgroundColor);
}

function getStringFromMs(ms) {
  // convert ms to string
  // i.e. 1000 => '1ms'
  return ms + 'ms';
}

function setTransitionDurations($selector, ms) {
  var transitionSeconds = getStringFromMs(ms);
  // you need to set the transition for
  // each browser for max compatibility
  var prefixes = ['-webkit', '-o', '-moz'];
  prefixes.forEach(function(prefix) {
    $selector.style.setProperty(prefix + '-transition-duration', transitionSeconds);
  });
  $selector.style.transitionDuration = transitionSeconds;
}

(function() {
  function sdrag(onDrag, onStop, direction) {
    var startX = 0;
    var startY = 0;
    var element = this;
    var dragging = false;

    function move(e) {
      var fix = {};
      onDrag && onDrag(element, e.pageX, startX, e.pageY, startY, fix);
      if ('vertical' !== direction) {
        var pageX = ('pageX' in fix) ? fix.pageX : e.pageX;
        if ('startX' in fix) {
          startX = fix.startX;
        }
        if (false === ('skipX' in fix)) {
          element.style.left = (pageX - startX) + 'px';
        }
      }
      if ('horizontal' !== direction) {
        var pageY = ('pageY' in fix) ? fix.pageY : e.pageY;
        if ('startY' in fix) {
          startY = fix.startY;
        }
        if (false === ('skipY' in fix)) {
          element.style.top = (pageY - startY) + 'px';
        }
      }
    }

    function startDragging(e) {
      if (e.currentTarget instanceof HTMLElement || e.currentTarget instanceof SVGElement) {
        dragging = true;

        var left = element.style.left ? parseInt(element.style.left) : 0;
        var top = element.style.top ? parseInt(element.style.top) : 0;
        startX = e.pageX - left;
        startY = e.pageY - top;
        window.addEventListener('mousemove', move);
      } else {
        throw new Error("Your target must be an html element");
      }
    }

    this.addEventListener('mousedown', startDragging);
    window.addEventListener('mouseup', function(e) {
      if (true === dragging) {
        dragging = false;
        window.removeEventListener('mousemove', move);
        onStop && onStop(element, e.pageX, startX, e.pageY, startY);
      }
    });
  }

  Element.prototype.sdrag = sdrag;
})();
document.querySelectorAll('#actionmenu')[0].sdrag();


// Clic droit impossible:
$(document).on('contextmenu', function() {
  return false;
});

//Quand clic sur le menu d'actions:
$('#actionmenu').on('click', function(evt) {
  evt.stopPropagation();
  var target = $(evt.target ||evt.srcElement);
    if (target.is("li")) {
      //Plus particulièrement clic sur un bouton d'action:
      $("#actionmenu").css('display', '');
    }
});

//Quand clic n'importe où:
$(document).on('click', function(e) {
  //SAUF sur le menu d'action:
  if (e.target != $("#actionmenu")) {
    $("#actionmenu").css('display', '');
  }
});


//Quand clic sur un élément d'histoire possédant des actions:
$(document).on('click', '.click', function(e) {
  e.stopPropagation();
  clickOnTrigger(e);
});


function clickOnTrigger(e) {
	//Cette fonction mets à l'écran le popup d'actions
	//et liste les différentes actions possibles
	//lorsque l'on appuie sur un .click

	var div = e.target;
  console.log(e);
	var triggers = game.scene.triggers;
  if(e.which === 1){
    //if left click
    for (trigger in triggers) {
      if (div.innerText == triggers[trigger].trigText) {
        $("#actionmenu ul").html("");
        $("#actionmenu header").html(
          `Actions sur <b>${triggers[trigger].showName}</b>`
        );
        for (action in triggers[trigger].actions) {
          $("#actionmenu ul").append(
            `<li class="${triggers[trigger].actions[action].style}" onclick="game.scene.triggers[${trigger}].actions[${action}].script();">${
              triggers[trigger].actions[action].name
            }</li>`
          );
        }
      }
    }
    $("#actionmenu").css({
      display: "block",
      left: e.pageX-(parseInt($("#actionmenu").css("min-width"),10) / 2),
      top: e.pageY+5,
      animation:  "open-actionmenu .3s ease forwards"
    });
  } else if (e.which === 3) {
    //if right click
    for (trigger in triggers) {
  		if (div.innerText == triggers[trigger].trigText) {
  			if(triggers[trigger].RClick) triggers[trigger].RClick();
  		}
  	}
  }
}

function rightClickOnTrigger(e){
  var div = e.target;
	var triggers = game.scene.triggers;
	for (trigger in triggers) {
		if (div.innerText == triggers[trigger].trigText) {
			if(triggers[trigger].RClick) triggers[trigger].RClick();
		}
	}
}
