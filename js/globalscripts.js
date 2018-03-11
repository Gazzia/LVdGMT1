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

  $("html, body").css("padding-bottom","500px")
if ($(window).height() <= 600) {
  $("h1").css("font-size","30px");
  $("#ang1a, #ang1b, #ang2a, #ang2b").css("width","25px");
  $("#vertLeft, #vertRight").css("width","29px");
  $("#vertLeft").css("left","calc(25% - 29px)");
  $("#vertRight").css("right","calc(25% - 29px)");
  $("#rust1a, #rust1b, #rust2a, #rust2b").css("width","40px");
  $("header").css("height","50px");
  $("#iconPage").css({"height":"90px","left":"calc(50% - 45px)"});
  $(".iconPageImg").css({"height":"50px","left":"20px"});
  $("#hpCont").css({"width":"80px","left":"110px","height":"40px","margin-top":"10px"});
  $("#iconHealth").css({"width":"25px","height":"25px","left":"3px"});
  $("#plHealth").css({"left":"2px","bottom":"12px","font-size":"14px"});
  $("#gdCont").css({"width":"80px","right":"115px","height":"40px","margin-top":"9px"});
  $("#pseudo").css({"width":"110px","bottom":"10px"});
  $("#iconDialogue").css("top","80px");
  $(".dialNorm").css("font-size","18px");
}
if ($(window).width() > 1400) {
    $('#article').css({"width":"50%","margin-left":"15%"});
  }

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
