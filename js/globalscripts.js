/**/
var classe = localStorage.classe;
var race = localStorage.race;
var lvl = localStorage.lvl;
$("#plHealth").html(localStorage.plHealth + "/" + localStorage.plHealthMax);
$("#goldAmount").html(localStorage.goldAmount);
$("#pseudo").html(localStorage.pseudo + ", " + race);
$("#plclasse").html(classe + " niveau  " + lvl);
if (localStorage.plHealth < 0) {
  $("#plHealth").html("0/" + localStorage.plHealthMax);
}

  $("html, body").css("padding-bottom","500px");

// NUAGES
var oddNuageF = (Math.floor(Math.random() * 2) + 1);
if (oddNuageF == 1){
  $("#clouds").css("background-image","url(images/Deco/clouds/Fore01.png)");
}
if (oddNuageF == 2){$("#clouds").css("background-image","url(images/Deco/clouds/Fore02.png)");}
var oddNuageB = (Math.floor(Math.random() * 2) + 1);
if (oddNuageB == 1){$("#cloudsbg").css("background-image","url(images/Deco/clouds/Back01.png)");}
if (oddNuageB == 2){$("#cloudsbg").css("background-image","url(images/Deco/clouds/Back02.png)");}

$(function(){
      var x = 0;
      setInterval(function(){
          x-=1;
          $('#clouds').css('background-position', x + 'px 0');
      }, 60);
  })
$(function(){
        var x = 0;
        setInterval(function(){
            x-=1;
            $('#cloudsbg').css('background-position', x + 'px 0');
        }, 120);
    })
$("#btnMap").click(function() {
  localStorage.audiotypeUI="Page";
  window.open("audioUI.html","audioUI");
  window.focus();
  setTimeout(function () {
    window.location="Map.html";
  },500);
})
