// Clic droit impossible:
$(document).on('contextmenu', function () {
  return false;
});

//Quand clic sur le menu d'actions:
$('#actionmenu').on('click', function (evt) {
  evt.stopPropagation();
  var target = $(evt.target || evt.srcElement);
  if (target.is("li")) {
    //Plus particulièrement clic sur un bouton d'action:
    $("#actionmenu").css('display', '');
  }
});

//Quand clic n'importe où:
$(document).on('click', function (e) {
  //SAUF sur le menu d'action:
  if (e.target != $("#actionmenu")) {
    $("#actionmenu").css('display', '');
  }
});


//Quand clic sur un élément d'histoire possédant des actions:
$(document).on('click', '.click', function (e) {
  e.stopPropagation();
  clickOnTrigger(e);
});


function clickOnTrigger(e) {
  //Cette fonction mets à l'écran le popup d'actions
  //et liste les différentes actions possibles
  //lorsque l'on appuie sur un .click
  var divTrigger = e.target.dataset.trigger;
  var triggers = game.scene.triggers;
  if (e.which === 1) {
    //if left click
    for (trigger in triggers) {
      if (divTrigger == triggers[trigger].trigText) {
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
      left: e.pageX - (parseInt($("#actionmenu").css("min-width"), 10) / 2),
      top: e.pageY + 5,
      animation: "open-actionmenu .3s ease forwards"
    });
  } else if (e.which === 3) {
    //if right click
    for (trigger in triggers) {
      if (divTrigger == triggers[trigger].trigText) {
        if (triggers[trigger].RClick) triggers[trigger].RClick();
      }
    }
  }
}

function rightClickOnTrigger(e) {
  var divTrigger = e.target.dataset.trigger;
  var triggers = game.scene.triggers;
  for (trigger in triggers) {
    if (divTrigger == triggers[trigger].trigText) {
      if (triggers[trigger].RClick) triggers[trigger].RClick();
    }
  }
}

$(".modal main, .main .notTitle").on("wheel", function (event) {
  if (!event.altKey && !event.shiftKey) {
    var scrollbase = 60;
  } else {
    var scrollbase = 180;
  }
  if (event.deltaY > 0)
    this.scrollTop += scrollbase;
  else
    this.scrollTop -= scrollbase;
}, false);