
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
