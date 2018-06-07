function refAll(){
  refHistoire();
  refBtns();
  refStats();
  refScripts();
  refImg();
}
function refAllbutImg(){
  refHistoire();
  refBtns();
  refStats();
  refScripts();
}
if (localStorage.justStartedGame == 1){
  localStorage.numpage="Classe";
  reset1();
  localStorage.justStartedGame = 0;
}
function reset1(){
  //or
  localStorage.plGold= Number(localStorage.origineAddGold) + 10;
  localStorage.plHealth= localStorage.plHealthMax;
  //objets
	localStorage.inv_arme_Branche=0;
  if (localStorage.inv_arme_Baton == 1){
    localStorage.inv_selected_arme="Baton";
  } else {
    localStorage.inv_selected_arme="Poings";
    localStorage.inv_arme_Baton = 0;
  }
	localStorage.inv_selected_head="Tete";
	localStorage.inv_selected_torse="Torse";
	localStorage.inv_selected_leg="Jambes";
	localStorage.inv_selected_foot="Pieds";
	localStorage.inv_tool_Shovel=0;
  //
	localStorage.menuOpen=0;
	localStorage.inventoryOpen=0;
  //
	localStorage.tookRiverGold=0;
	localStorage.nbKnock2_2=0;
	localStorage.combatWon_RatSoufflant=0;
	localStorage.tookCorpseGold=0;
	localStorage.talkedToGuard=0;
	localStorage.sawhole=0;
	localStorage.caughtbyguard=0;
	localStorage.failedToSeduceGuard=0;
	localStorage.passedGate=0;
  //
  localStorage.Setting_SoundOn=1;
  localStorage.itemID=0;
}
function expandHistoireBlock(){
  $(".leftblock").css({'width':'50vw'});
  $(".leftblock footer").fadeOut(300);
  setTimeout(function(){
    $(".leftblock").css({'height':'98vh','top':'-9vh'}).addClass('clickToClose');
  },300);
}
$(document).on('click','.leftblock.clickToClose', function(){
  $(".leftblock").css({'height':'100%','top':'0'}).removeClass('clickToClose');
  setTimeout(function(){
    $(".leftblock").css({'width':'calc(60% - 1vw)'});
    $(".leftblock footer").fadeIn(300);
  },300);
});
function banner(ville){
  $(".townBanner").html(ville).fadeIn(900);
  setTimeout(function(){
    $(".townBanner").fadeOut(900);
  },2000);
}
function openDialog(){
  $('#dialog').css('left','15%');
  $('.mask.light.brown').fadeIn(700);
}
function closeDialog(){
  $('#dialog').css('left','-100%');
  $('.mask').fadeOut(700);
  $('#dialog a').hide();
}
function foundGold(amount, storageEvent) {
  closeDialog();
  setTimeout(function(){
    localStorage[storageEvent]=1; refAllbutImg();
    transaction(amount,"+");
    setTimeout(function(){
      setSound("UI", "gold");
    }, 3300);
  }, 250);
}
function transaction(amount, positivity){
  $('.mask.light.brown').fadeIn(700);
  $("#transactions").css('transition','none');
  $("#transactions .gold").html(positivity+amount+" or !");
  setTimeout(function(){
    $("#transactions").css({'left':'calc(50% - 25vh)','bottom':'calc(50% - 10vh)','height':'20vh','width':'50vh'});
    $("#transactions").fadeIn(400);
    $("#transactions.title").css('background-color','#e2b948');
    setTimeout(function(){
      $("#transactions.title").css('background-color','#d4ba45');
      setTimeout(function(){
        $("#transactions.gold").html("");
        $("#transactions").css({'transition':'all 0.5s ease','left':'69%','width':'5px'});
        setTimeout(function(){
          $('.mask').fadeOut(700);
          $("#transactions").css({'bottom':'3%'});
          setTimeout(function(){
            $("#transactions").css({'height':'0'}).fadeOut(100);
            refAllbutImg();
          }, 260);
        }, 300);
      }, 1400);
    }, 600);
  }, 1000);
  setTimeout(function(){
    localStorage.plGold= Number(localStorage.plGold) + Number(amount);
    refAllbutImg();
  },3500);
}
// function setSound(soundtype, sound){
//   if (localStorage.Setting_SoundOn==1){
//     localStorage['audiotype'+soundtype] = sound;
//     window.open("audio"+soundtype+".html", "audio"+soundtype);
//   }
// }

setSound('EnvB', localStorage.soundEnvB);
setSound('EnvF', localStorage.soundEnvF);
setSound('Music', localStorage.soundMusic);

function foundItem(item) {
  setSound("UI", "takeStuff");
  setTimeout(function(){
    localStorage[window[item].LSName]=1;
    $('#dialog a').hide();
    $("#dialog .text").html(window[item].FoundText);
    $("#dialog .image").css("background-image", "url(images/"+window[item].Img+")");
    if (window[item].Type == "arme"){
      $('#dialog .icon').html(iconStartingWeapon);
      $("#dialog .title").html("Nouvelle arme !");
      $('#dialog a.nb1').html('Prendre').attr('onclick','closeDialog()').show();
      $('#dialog a.nb2').html('Prendre et équipper').attr('onclick','localStorage.inv_selected_arme="'+window[item].Short+'"; closeDialog(); refAllbutImg();').show();
    }
    if (window[item].Type == "tool"){
      $("#dialog .title").html("Nouvel outil !");
      $('#dialog a.nb1').html('Ok').attr('onclick','closeDialog()').show();
    }
    dialogColor('orange');
  }, 200);
}
function dialogColor(paramColor){
  var mainColor;var textColor;var backColor;
  if (paramColor == "red"){mainColor='#d44568'; textColor='#c2786c'; backColor='#f0dccc';}
  if (paramColor == "orange"){mainColor='#d4a245'; textColor='#c29b6c'; backColor='#f0e2cc';}
  $('#dialog .title, #dialog a').css('background-color', mainColor);
  $('#dialog .image').css('border-left-color', mainColor);
  $('#dialog .icon svg').css('fill', mainColor);
  $('#dialog .text').css('color', textColor);
  $('#dialog .content').css('background-image', 'linear-gradient(white, '+backColor+')');
}
function knockDoor(){
  if (localStorage.numpage==2.2){
    setSound("EnvF", "ratRun");
    setSound("UI", "doorKnockOpen");
    setTimeout(function(){
      localStorage.nbKnock2_2=1;
      $("#dialoglayer1Text").html("Vous frappez à la porte qui s'entrouvre vaguement. Vous ne distinguez rien, et personne n'a répondu à l'appel. Pourtant, on dirait un bruit d'affollement à l'intérieur.");
      $("#dialoglayer1")
      .attr("title","Aucune réponse")
      .dialog({ resizable: false, height: "auto", modal: true, dialogClass: 'classicDialog dialBg_burlap',
      buttons: { "Ok": function(){$(".ui-dialog-content").dialog("close"); refAllbutImg();} }
    });
  }, 1000);
} else {
  setSound("UI", "doorKnock");
  setTimeout(function(){
    $("#dialoglayer1Text").html("Vous frappez, mais personne ne répond.");
    $("#dialoglayer1Img").attr("src","images/icons/UI/doorClosed.png");
    $("#dialoglayer1")
    .attr("title","Aucune réponse")
    .dialog({ resizable: false, height: "auto", modal: true, dialogClass: 'classicDialog dialBg_burlap',
    buttons: { "Ok": function(){$(".ui-dialog-content").dialog("close"); refAllbutImg();} }
  });
}, 1000);
}
}
function enterDoor(){
  if (localStorage.numpage==2.2){
    setSound("EnvB", "stop");
    setSound("EnvF", "stop");
    setSound("Music", "Battle1");
    window.location="Combat.html";
  }
}
// --------------------- ACTUALISATION DE PAGE SELON LA PAGE
function refScripts(){
  var page = localStorage.numpage;
    if (page == "Classe"){
    reset1();
    setSound("EnvB", "Nature");
    setSound("EnvF", "stop");
    setSound("Music", "Sunny");
  }
  if (page == "ClasseMage" || page == "ClasseGuerrier" || page == "ClasseEloquent" || page == "ClasseHabile"){
    localStorage.lvl="1";
  	localStorage.classeXDex=localStorage.classeXChar=localStorage.classeXFesse=localStorage.classeXForce="1";
  }
  if (page == "ClasseMage"){
    localStorage.classe="Mage";
  	localStorage.classeXForce="0.7";
  	localStorage.classeXFesse="1.5";
  }
  if (page == "ClasseGuerrier"){
    localStorage.classe="Guerrier";
  	localStorage.classeXForce="1.5";
  	localStorage.classeXFesse="0.7";
  }
  if (page == "ClasseEloquent"){
    localStorage.classe="Eloquent";
  	localStorage.classeXChar="1.4";
  }
  if (page == "ClasseHabile"){
    localStorage.classe="Habile";
  	localStorage.classeXDex="1.4";
  }
  if (page == 2){setSound("EnvF", "stop");}
  if (page == 2.1){setSound("EnvF", "StreamAfar");}
  if (page == 2.11){setSound("EnvF", "Stream");}
  if (page == 2.2){
    if (localStorage.combatWon_RatSoufflant == 0) {
      if (localStorage.nbKnock2_2 == 0) { $("#btnDivers1").html("Frapper à la porte").attr("onclick", "knockDoor()"); setSound("EnvF", "stop"); }
      if (localStorage.nbKnock2_2 == 1) { $("#btnDivers1").html("Entrer par la porte entrebaillée").attr("onclick", "enterDoor()"); setSound("EnvF", "ratRun"); }
    } else {
      $("#btnDivers1").html("Entrer  à l'intérieur").attr("onclick", "localStorage.numpage=2.211; refAll();");
    }
  }
  if (page == 2.211){
    localStorage.time = "";
    setSound("Music", "MystDark_House");
    setSound("EnvB", "CreakingHouse");
    setSound("EnvF", "bunchOfFlies");
    $(".fullscreen").css("background","linear-gradient(rgb(144, 142, 127), rgb(56, 51, 48))");
    $(".uiBG_clouds").hide();
  }
  if (page == 3){
    setSound("UI", "stop");
    if (localStorage.talkedToGuard == 1 && localStorage.caughtbyguard == 0) {
      addBtn(0,0,0,0,0,0,0,1);
      $("#btnLook1").html("Trouver un autre moyen de passer").attr("onclick","localStorage.numpage=3.2; refAll()");
    }
  }
  if (page == 3.2){
    localStorage.sawhole=1;
    if (localStorage.inv_tool_Shovel == 1){$(".chance").show();}
    if (localStorage.totalDex < 3) {
      $(".ch40").attr("onclick", "").addClass('optNope');
    }
  }
  if (page == 6.11){
    $("#sleft, #sright").css("background","linear-gradient(to bottom, #98947c -20%, #1d1b1a 70%)");
    $(".deco").hide();
  }
}
// ------------------ FONCTIONS APPELÉES PAR DES BOUTONS
//2.11
function makeHalt(){
  closeDialog();
  $('.midscreen, .asideRightOpener, .minimap').hide(300);
  setTimeout(function(){
    $("#dialog .title").html("Super");
    $("#dialog .image").css("background-image", "url(images/vertical/ext/rivewater.png)");
    $("#dialog .text").html("Cette petite halte est vraiment très agréable. Repartons maintenant.");
    $('#dialog a.nb1').html('Non').attr('onclick','makeHalt()').show();
    $('#dialog a.nb2').html('Partir').attr('onclick','stopHalt()').show();
    openDialog();
  },14000);
}
function stopHalt(){
  $('.midscreen, .asideRightOpener, .minimap').show(300);
  closeDialog();
}
//2.211 Interieur Cabane
function quitMasure(){
  localStorage.numpage=2.2;
  $('.fullscreen').css('background','linear-gradient(to bottom, #d7eff5, #c4e8fa 60%)');
  $('.uiBG_clouds').show();
  setSound("EnvB", "Nature");
  setSound("EnvF", "stop");
  setSound("UI", "stop");
  setSound("Music", "Sunny");
  localStorage.time = "SunnyAfternoon";
  refAll();
}
//3.2 Tunnel
function dig(chance){
  if (chance >= Math.floor(Math.random() * (10 - 1 + 1) + 1)){
    $("#histoire").html("Vous ne vous êtes pas fait prendre, et la zone éboulée est désormais parfaitement déblayée !<br>Vous êtes désormais dans les égouts souterrains. Au dessus de vous, la lumière arrive par une grille. Au travers, vous entrevoyez l'autre côté du portail. Oui !! Vous délogez la grille et vous hissez à la surface.");
    $(".btnD").hide();$(".enterCity").show(500);
  } else {
    $("#histoire").html("<span>Vous vous êtes fait prendre par le garde, qui vous as désormais à l'oeil !</span>");
    localStorage.caughtbyguard = 1;
    $(".btnD").hide();$(".retourMur").show();
  }
}
//4
function enterMerryvale(){
  setSound("UI", "stop");
  setSound("EnvB", "CityCalm");
  setSound("EnvF", "stop");
  setSound("Music", "CityHappy");
  localStorage.talked_guy1=0;
  localStorage.GMTDrankPotion=0;
  localStorage.dirFrom="Sud";
  localStorage.numpage=5.1;refAll();
}
//MERRYVALE
function dirFrom(dirFrom){
  localStorage.dirFrom=dirFrom;
  if (localStorage.numpage == 5.1){
    if (dirFrom == "Sud"){localStorage.numpage=5.2;refAll();dirFrom="Aucune";}
    if (dirFrom == "Est"){localStorage.numpage=6.1;refAll();dirFrom="Aucune";}
    if (dirFrom == "Ouest"){alert('Vous ne pouvez pas encore faire cela');dirFrom="Aucune";refAllbutImg();}
  }
  if (localStorage.numpage == 5.2){
    if (dirFrom == "Sud"){localStorage.numpage=5.3;refAll();dirFrom="Aucune";}
    if (dirFrom == "Ouest"){alert('Vous ne pouvez pas encore faire cela');dirFrom="Aucune";refAllbutImg();}
    if (dirFrom == "Nord"){localStorage.numpage=5.1;refAll();dirFrom="Aucune";}
  }
  if (localStorage.numpage == 5.3){
    if (dirFrom == "Sud"){alert('Vous ne pouvez pas encore faire cela');dirFrom="Aucune";refAllbutImg();}
    if (dirFrom == "Nord"){localStorage.numpage=5.2;refAll();dirFrom="Aucune";}
  }
  if (localStorage.numpage == 6.1){
    if (dirFrom == "SudEst"){alert('Vous ne pouvez pas encore faire cela');dirFrom="Aucune";refAllbutImg();}
    if (dirFrom == "Ouest"){localStorage.numpage=5.1;refAll();dirFrom="Aucune";}
  }
}
//DISPENSAIRE Merryvale
function drinkRandomPotion(){
  $(".btnM1").hide();

  var oddVialColor = Math.floor(Math.random() * (8 - 1 + 1) + 1);
  if (oddVialColor == 1) {vialColor="bleu ";} if (oddVialColor == 2) {vialColor="rouge ";} if (oddVialColor == 3) {vialColor="orange ";} if (oddVialColor == 4) {vialColor="gris ";} if (oddVialColor == 5) {vialColor="vert ";} if (oddVialColor == 6) {vialColor="marron ";} if (oddVialColor == 7) {vialColor="rose ";} if (oddVialColor == 8) {vialColor="violet ";}
  var oddVialTint = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (oddVialTint == 1) {vialTint="translucide ";} if (oddVialTint == 2) {vialTint="épais ";} if (oddVialTint == 3) {vialTint="vif ";}
  var oddVialShape = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  if (oddVialShape == 1) {vialShape="bosselée";} if (oddVialShape == 2) {vialShape="poussiéreuse";} if (oddVialShape == 3) {vialShape="déjà ouverte";} if (oddVialShape == 4) {vialShape="qui vous paraît neuve";} if (oddVialShape == 5) {vialShape="arrondie";} if (oddVialShape == 6) {vialShape="rectangulaire";}
  var oddVialSmell = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  if (oddVialSmell == 1) {vialSmell="immonde ";} if (oddVialSmell == 2) {vialSmell="fleurie ";} if (oddVialSmell == 3) {vialSmell="douce "; } if (oddVialSmell == 4) {vialSmell="rassurante ";} if (oddVialSmell == 5) {vialSmell="familière ";} if (oddVialSmell == 6) {vialSmell="étrange ";}
  var oddVialContent = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  if (oddVialContent == 1) {
	  vialContent="Toutes vos blessures se referment et vous vous sentez plus résistant ! 100%♥ +20max";
	  localStorage.plHealthMax=(parseInt(localStorage.plHealthMax) + 20);
	  localStorage.plHealth=(parseInt(localStorage.plHealth) + 20);}
  if (oddVialContent == 2) {
    vialContent="La plupart de vos blessures se referment d'un coup! +50♥";
	   localStorage.plHealth=(parseInt(localStorage.plHealth) + 50);}
  if (oddVialContent == 3 || oddVialContent == 4 || oddVialContent == 5) {
    vialContent="Plusieurs blessures se referment d'un coup! +25♥";
	  localStorage.plHealth=(parseInt(localStorage.plHealth) + 25);}
  if (oddVialContent == 6) {
    vialContent="Une ou deux blessures se referment lentement.. +10♥";
    localStorage.plHealth=(parseInt(localStorage.plHealth) + 10);}
  if (oddVialContent == 7) {vialContent="Rien ne se passe, mais votre gorge semble plus claire..";}
  if (oddVialContent == 8) {
    vialContent="Vous sentez une douleur vive dans votre ventre! Du poison !! -20♥";
    localStorage.plHealth=(parseInt(localStorage.plHealth) - 20);}
  if (oddVialContent == 9 || oddVialContent == 10) {
	   vialContent="Vous commencez à saliver énormément, de la sueur se met à couler de votre front. Vous regardez vos mains qui tremblent, incontrôlables, et prennent une teinte rouge vif. Vous essayez de vous raccrocher à la petite commode. Tout s'assombrit et vous mourrez.";
	   $(".btnM2").hide();$(".potionDeath").show();}
  if (parseInt(localStorage.plHealth) > parseInt(localStorage.plHealthMax)) {localStorage.plHealth=localStorage.plHealthMax;}
  refStats();
  $("#histoire").html("Vous choisissez une potion de couleur "+vialColor+vialTint+"dans une fiole "+vialShape+". Une odeur "+vialSmell+"s'en échappe.<br><br> Vous la buvez d'un trait et...<br>"+vialContent);
}
// RUE DE LA Clef
function enterTemple(){
  setSound("UI", "largeDoorOpen");
  setTimeout(function () {
    setSound("EnvB", "stop");
    setSound("EnvF", "Snoring");
    setSound("Music", "stop");
    localStorage.numpage=6.11; refAll();
  },1000);
}
function leaveTemple(){
  $('#sleft, #sright').css('background','linear-gradient(to bottom, #feffe9 -20%, #c5e3e1 70%)');
  $('.deco').show();
  setSound("EnvB", "CityCalm");
  setSound("EnvF", "stop");
  setSound("Music", "CityHappy");
  localStorage.numpage=6.1;
  localStorage.dirFrom='Door8';
  refAll();
}
