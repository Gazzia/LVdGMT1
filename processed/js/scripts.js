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

new Notification();
new Notification({
	type: "success",
	timeOut: false,
	btns: [{
		txt: "Modal",
		blockOnModal: true,
		script() {
			modalList.Soufflant_Embranchement_RegarderCabane();
		}
	}, {
		txt: "Modal2",
		script() {
			modalList.Soufflant_Embranchement_RegarderBois();
		}
	}]
});
//ajoute chaque notif dans un array à l'indice [0],
//et multiplie cet indice par genre 5 et ajoute "vh" pour savoir la distance depuis top

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
    var el = this;
    var dragging = false;

    function move(e) {
      var fix = {};
      onDrag && onDrag(el, e.pageX, startX, e.pageY, startY, fix);
      if ('vertical' !== direction) {
        var pageX = ('pageX' in fix) ? fix.pageX : e.pageX;
        if ('startX' in fix) {
          startX = fix.startX;
        }
        if (false === ('skipX' in fix)) {
          el.style.left = (pageX - startX) + 'px';
        }
      }
      if ('horizontal' !== direction) {
        var pageY = ('pageY' in fix) ? fix.pageY : e.pageY;
        if ('startY' in fix) {
          startY = fix.startY;
        }
        if (false === ('skipY' in fix)) {
          el.style.top = (pageY - startY) + 'px';
        }
      }
    }

    function startDragging(e) {
      if (e.currentTarget instanceof HTMLElement || e.currentTarget instanceof SVGElement) {
        dragging = true;

        var left = el.style.left ? parseInt(el.style.left) : 0;
        var top = el.style.top ? parseInt(el.style.top) : 0;
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
        onStop && onStop(el, e.pageX, startX, e.pageY, startY);
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
  if(e.which === 1){
    //clic gauche
    leftClickOnTrigger(e);
  } else if (e.which === 3){
    //clic droit
    rightClickOnTrigger(e);
    return false;
  }
});


function leftClickOnTrigger(e) {
	//Cette fonction mets à l'écran le popup d'actions
	//et liste les différentes actions possibles
	//lorsque l'on appuie sur un .click

	var div = e.target;
	var triggers = game.scene.triggers;
	for (trigger in triggers) {
		if (div.innerText == triggers[trigger].triggerText) {
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
}

function rightClickOnTrigger(e){
  var div = e.target;
	var triggers = game.scene.triggers;
	for (trigger in triggers) {
		if (div.innerText == triggers[trigger].triggerText) {
			if(triggers[trigger].rightClickScript) triggers[trigger].rightClickScript();
		}
	}
}
