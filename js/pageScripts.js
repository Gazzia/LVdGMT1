function refAll(){
  refHistoire();
  refBtns();
  refStats();
  refScripts();
  refImg();
}
function reset1(){
  localStorage.plGold=10;
	localStorage.inv_arme_baton=0;
	localStorage.inv_selected_arme="Poings";
	localStorage.inv_selected_head="Tete";
	localStorage.inv_selected_torse="Torse";
	localStorage.inv_selected_leg="Jambes";
	localStorage.inv_selected_foot="Pieds";
	localStorage.inv_tool_shovel=0;
  //
	localStorage.menuOpen=0;
	localStorage.inventoryOpen=0;
  //
	localStorage.tookRiverGold=0;
	localStorage.nbKnock2_2=0;
	localStorage.combatWon_RatSoufflant=0;
	localStorage.tookCorpseGold=0;
	localStorage.askGuardAboutTax=0;
	localStorage.sawhole=0;
	localStorage.caughtbyguard=0;
	localStorage.failedToSeduceGuard=0;
	localStorage.passedGate=0;
}
function setSound(soundtype, sound){
  localStorage['audiotype'+soundtype] = sound;
  window.open("audio"+soundtype+".html", "audio"+soundtype);
}
function foundGold(amount, storageEvent) {
  setSound("UI", "gold");
  setTimeout(function() {
    localStorage[storageEvent]=1; localStorage.plGold= +(localStorage.plGold) + amount; refAll();
    $("#getitemText").html("+"+amount+" Or !");
    $("#getitemImg").attr("src", "images/icons/UI/shiny-purse.png");
    $("#getitem").attr("title", "Jackpot !");
    $("#getitem").dialog({ modal: true, resizable: false, height: "auto", dialogClass: 'dialogGold',
    buttons: { "Ok": function() {$(".ui-dialog-content").dialog("close");} }
    });
  }, 200);
}
function foundItem(item) {
  setSound("UI", "takeStuff");
  setTimeout(function() {
    localStorage[window[item].LSName]=1;
    $("#getitemText").html(window[item].FoundText);
    $("#getitemImg").attr("src", "images/icons/"+window[item].Img);
    if (window[item].Type == "arme"){
      $("#getitem").attr("title", "Nouvelle arme !");
      $("#getitem").dialog({ modal: true, resizable: false, dialogClass: 'dialBg_burlap', height: "auto",
      buttons: {
        "Prendre": function() {$(".ui-dialog-content").dialog("close"); refAll();},
        "Prendre et équipper": function() { localStorage.inv_selected_arme=window[item].Short; $(".ui-dialog-content").dialog("close"); refAll(); }
      } });
    }
    if (window[item].Type == "tool"){
      $("#getitem").attr("title", "Nouvel outil !");
      $("#getitem").dialog({ modal: true, resizable: false, dialogClass: 'dialBg_burlap', height: "auto",
      buttons: {
        "Ok": function() {$(".ui-dialog-content").dialog("close"); refAll();}
      } });
    }
  }, 200);
}
function knockDoor(){
  if (localStorage.numpage==2.2){
    setSound("EnvF", "ratRun");
    setSound("UI", "doorKnockOpen");
    setTimeout(function() {
      localStorage.nbKnock2_2=1;
      $("#dialoglayer1Text").html("Vous frappez à la porte qui s'entrouvre vaguement. Vous ne distinguez rien, et personne n'a répondu à l'appel. Pourtant, on dirait un bruit d'affollement à l'intérieur.");
      $("#dialoglayer1")
      .attr("title","Aucune réponse")
      .dialog({ resizable: false, height: "auto", modal: true, dialogClass: 'dialBg_burlap',
      buttons: { "Ok": function() {$(".ui-dialog-content").dialog("close"); refAll();} }
    });
  }, 1000);
} else {
  setSound("UI", "doorKnock");
  setTimeout(function() {
    $("#dialoglayer1Text").html("Vous frappez, mais personne ne répond.");
    $("#dialoglayer1Img").attr("src","images/icons/UI/doorClosed.png");
    $("#dialoglayer1")
    .attr("title","Aucune réponse")
    .dialog({ resizable: false, height: "auto", modal: true, dialogClass: 'dialBg_burlap',
    buttons: { "Ok": function() {$(".ui-dialog-content").dialog("close"); refAll();} }
  });
}, 1000);
}
}
function enterDoor(){
  if (localStorage.numpage==2.2){
    setSound("EnvB", "Aucun");
    setSound("EnvF", "Aucun");
    setSound("Music", "Battle1");
    window.location="2.21 CombatRat.html";
  }
}
// *****************************************************************************************************************************
function refScripts(){
  var page = localStorage.numpage;
  if (page == "MenuPrincipal"){
    $("#intro_backgroundTitle").fadeIn(800).children().hide().fadeIn(2000);
    setSound("EnvB", "Aucun");
    setSound("EnvF", "Aucun");
    setSound("UI", "Aucun");
    setSound("Music", "Intro");
  }
  if (page == "Pseudo"){
    $(function() {
        $("form").submit(function() { return false; });
    });
    $("#intro_backgroundTitle").fadeOut(800).children().fadeOut(2000);
    $("#intro_backgroundPseudo").delay(500).fadeIn(800).children().hide().fadeIn(2000);
    $(document).keyup(function(event) {
    	if ($("#copseudo").is(":focus") && event.key == "Enter") {choosePseudo();}
    });
    $("#copseudo").focus();
  }
  if (page == "Race"){
    $("#intro_backgroundPseudo, #intro_backgroundRaceTree").fadeOut(800).children().fadeOut(2000);
    $("#intro_backgroundRace").delay(500).fadeIn(800).children().hide().fadeIn(2000);
    $("#showpseudo").html("<div class='racepagetitle'>Choix d'une race pour "+localStorage.pseudo+"</div>");
    darace = "none";
    $('.container').click(function() {
      if ($('#raceHomme').is(':checked')) {
        $("#iconClass").attr("src", "images/Classes/homme.png");
        $("#classDesc").html(
          "<h2>Hommes</h2><hr>" +
        	"<i>Les hommes représentent la partie la plus importante de la population mondiale. Leurs avant membres très développés ont très vite fait d'eux des artisans et constructeurs hors-pair. C'est ainsi grâce à leur savoir-faire que les premières villes ont été érigées.</i><br><br>" +
          "<b>Paricularités</b><br>" +
          "+10% de Dextérité et +10% de Force<br>-10♥max au départ et -10% de Puissance Magique<br><br>" +
          "<b>Relations particulières</b><br>" +
          "Les humains s'entendent mal avec les <font color=\"darkred\">Angulains</font> qu'ils jugent peu sociables. Cependant, ils apprécient beaucoup la compagnie des <font color=\"darkblue\">Feûlains</font>, leurs partenaires économiques de toujours, et celle des <font color=\"darkblue\">Ferrés</font>.");
        darace = "Homme";
      }
      if ($('#raceOculain').is(':checked')) {
      	$("#iconClass").attr("src", "images/Classes/oculain.png");
    	  $("#classDesc").html(
        	"<h2>Oculains</h2><hr>" +
        	"<i>Les Oculains sont  des individus simples mais très actifs, à l'instinct grégaire, qui ont un rapport à la nature très fusionnel. Habitant souvent loin de l'agitation des villes, ils préfèrent le calme des régions isolées, où ils vivent d'agriculture dans de petits hameaux, où ils devisent ensemble au crépuscule, avec le rythme de conversation agité et alambiqué qui leur est propre.</i><br><br>" +
        	"<b>Paricularités</b><br>" +
        	"+10% de Dextérité et +10% d'Intelligence<br>-10% de Charisme et -10% d'Agilité<br><br>" +
        	"<b>Relations particulières</b><br>" +
        	"Les oculains s'entendent mal avec les <font color=\"darkred\">Angulains</font>, qui ont un rapport de domination avec eux. Cependant, ils apprécient beaucoup la compagnie des <font color=\"darkblue\">Hommes</font>, des <font color=\"darkblue\">Ferrés</font>, et des <font color=\"darkblue\">Feûlains</font>, qui ne portent pas sur eux un regard de jugement.");
      	darace = "Oculain";
    	}
    	if ($('#raceFeulain').is(':checked')) {
    		$("#iconClass").attr("src", "images/Classes/feulain.png");
    		$("#classDesc").html(
    			"<h2>Feûlains</h2><hr>" +
    			"<i>Êtres peu habiles, les feûlains se sont très vite rendus compte que faute de savoirs-faire particuliers, ils avaient une capacité à enjôler de leurs mots les autres individus. C'est aujourd'hui une population avant tout marchande.</i><br><br>" +
    			"<b>Paricularités</b><br>" +
    			"+10% de Charisme et +10% d'Agilité<br>-10% de Force et -10% de Puissance Magique<br><br>" +
    			"<b>Relations particulières</b><br>" +
    			"Les feûlains s'entendent mal avec les <font color=\"darkred\">Ferrés</font> qu'ils jugent hautains, et parce qu'ils maîtrisent la magie, dont les feûlains sont presque dépourvus. Cependant, ils apprécient beaucoup la compagnie des <font color=\"darkblue\">Hommes</font>, leurs partenaires économiques de toujours, et celle des <font color=\"darkblue\">Angulains</font>.");
    			darace = "Feûlain";
    	}
    	if($('#raceFerre').is(':checked')) {
    		$("#iconClass").attr("src","images/Classes/ferre.png");
    		$("#classDesc").html(
    			"<h2>Ferrés</h2><hr>"+
    			"<i>Les Ferrés sont réputés pour êtres les transcripteurs du savoir. Ce sont des créatures très intelligentes, et qui ont un contact supérieur avec l'occulte. Ils vivent souvent seuls, individus à l'ego surdimensionné, pour se consacrer aux arts magiques et à la connaissance.</i><br><br>"+
    			"<b>Paricularités</b><br>"+
    			"+10% d'Intelligence et +10% de Puissance Magique<br>-10% de Force et -10♥max au départ<br><br>"+
    			"<b>Relations particulières</b><br>Les ferrés s'entendent mal avec les <font color=\"darkred\">Hommes d'argile</font> depuis la rebéllion de ces derniers, ainsi qu'avec les <font color=\"darkred\">Angulains</font> et les <font color=\"darkred\">Feûlains</font>, qu'ils jugent idiots. Cependant, ils apprécient beaucoup la compagnie des <font color=\"darkblue\">Humains</font>, dont ils apprécient l'intérêt  qu'ils portent pour eux.");
    		darace="Ferré";
    	}
    	if($('#raceAngulains').is(':checked')) {
    		$("#iconClass").attr("src","images/Classes/angulain.png");
    		$("#classDesc").html(
    			"<h2>Angulains</h2><hr>"+
    			"<i>Les angulains descendent tout droit des anciens grands charognards. C'est une population généralement très fière et peu loquace, qui ne se laisse pas marcher dessus. Ils ont su dans l'histoire s'approprier le bien commun pour aujourd'hui être une population assez aisée. Ils sont souvent surnommés \"Anguleux\" par moquerie vis-à-vis de leur approche très froide et distante.</i><br><br>"+
    			"<b>Paricularités</b><br>"+
    			"+10♥max au début et +10% d'Agilité<br>-10% de Charisme -10% de Dextérité<br><br>"+
    			"<b>Relations particulières</b><br>"+
    			"Les angulains s'entendent plutôt mal avec les <font color=\"darkred\">Hommes</font>, les <font color=\"darkred\">Oculains</font>, et  les <font color=\"darkred\">Ferrés</font> à cause de leur caractère renfermé. Étrangement, ils acceptent la compagnie des <font color=\"darkblue\">Feûlains</font>.");
    		darace="Angulain";
    	}
    	if ($('#raceGolemsang').is(':checked')) {
    		$("#iconClass").attr("src", "images/Classes/hommeargile.png");
    		$("#classDesc").html(
    			"<h2>Golems de Sang</h2><hr>" +
    			"<i>Les Golems <u>d'Argile</u> sont une création magique des Ferrés, qui voulaient soulever les éléments terrestres à la vie pour en faire des esclaves. Le résultat a été plus que brillant : les serviteurs d'argiles étaient juste assez conscients pour comprendre que leur condition d'esclave ne leur convenait pas.. Certains d'entre eux ont demandé à des mages non-ferrés de les rendre plus \"vivants\", c'est ainsi que les Golems de Sang sont nés, colosses de chair en général calmes et pacifiques, malgré leur stature.</i><br><br>" +
    			"<b>Paricularités</b><br>" +
    			"+10% de Force et +10♥max au départ<br>-10% d'Intelligence et -10% d'Agilité<br><br>" +
    			"<b>Relations particulières</b><br>" +
    			"Les golems de sang s'entendent mal avec les <font color=\"darkred\">Ferrés</font> depuis l'insurréction. En relation pacifique avec les autres races, ils aiment particulièrement la compagnie des <font color=\"darkblue\">Oculains</font>, créatures appréciant également la paix et la simplicité.");
    			darace = "Golem";
    	}
    });
  }
  if (page == "Racetree"){
    $("#intro_backgroundRace").fadeOut(800).children().fadeOut(2000);
    $("#intro_backgroundRaceTree").delay(500).fadeIn(800).children().hide().fadeIn(2000);
    setTimeout(function() {
      $("#centeredTree").css({
        "transform": "scale(1)",
        "opacity": "1"
      });
    }, 500);
  }
  if (page == "Classe"){
    reset1();
    setSound("EnvF", "Nature");
    setSound("EnvF", "Aucun");
    setSound("Music", "Sunny");
  }
  if (page == "ClasseMage" || page == "ClasseGuerrier" || page == "ClasseEloquent" || page == "ClasseAgile"){
    localStorage.lvl="1";
    localStorage.aboutMenu=0;
  }
  if (page == "ClasseMage"){
    localStorage.classe="Mage";
  	localStorage.classeXForce="0.5";
  	localStorage.classeXMag="1.5";
  	localStorage.classeXAgi="1";
  	localStorage.classeXChar="1";
  }
  if (page == "ClasseGuerrier"){
    localStorage.classe="Guerrier";
  	localStorage.classeXForce="1.5";
  	localStorage.classeXMag="0.5";
  	localStorage.classeXAgi="1";
  	localStorage.classeXChar="1";
  }
  if (page == "ClasseEloquent"){
    localStorage.classe="Eloquent";
  	localStorage.classeXForce="1";
  	localStorage.classeXMag="1";
  	localStorage.classeXAgi="1";
  	localStorage.classeXChar="1.5";
  }
  if (page == "ClasseAgile"){
    localStorage.classe="Agile";
  	localStorage.classeXForce="1";
  	localStorage.classeXMag="1";
  	localStorage.classeXAgi="1.5";
  	localStorage.classeXChar="1";
  }
  if (page == 2){
    if (localStorage.aboutMenu == 0){
      $("#dialoglayer1Text").html('Vous pouvez accéder au menu du jeu à tout moment en appuyant sur la touche "Echap".');
    	$("#dialoglayer1")
      .attr("title","Note")
      .dialog({resizable: false, modal:true, draggable:false, height: "auto", dialogClass: 'dialBg_burlap',
    		buttons: { "Ok": function() {$(".ui-dialog-content").dialog("close"); refAll();} }
    	});	localStorage.aboutMenu=1;
    }
    setSound("EnvF", "Aucun");
  }
  if (page == 2.1){setSound("EnvF", "StreamAfar");}
  if (page == 2.11){setSound("EnvF", "Stream");}
  if (page == 2.2){
    if (localStorage.combatWon_RatSoufflant == 0) {
      if (localStorage.nbKnock2_2 == 0) { $("#btnDivers1").html("Frapper à la porte").attr("onclick", "knockDoor()"); setSound("EnvF", "Aucun"); }
      if (localStorage.nbKnock2_2 == 1) { $("#btnDivers1").html("Entrer par la porte entrebaillée").attr("onclick", "enterDoor()"); setSound("EnvF", "ratRun"); }
    } else {
      $("#btnDivers1").html("Entrer  à l'intérieur").attr("onclick", "localStorage.numpage=2.211; refAll();");
    }
  }
  if (page == 2.211){
    setSound("Music", "MystDark_House");
    setSound("EnvB", "CreakingHouse");
    setSound("EnvF", "bunchOfFlies");
    $("#sleft, #sright").css("background","linear-gradient(to bottom, #98947c -20%, #1d1b1a 70%)");
    $(".deco").hide();
  }
  if (page == 2.22){
    if (localStorage.sawhole == 1 && localStorage.inv_tool_shovel == 0){
  	$(".btnM2").show();
  	} else {
  	$(".btnM2").hide();
  	}
  }
  if (page == 3){
    setSound("UI", "Aucun");
    if (localStorage.askGuardAboutTax == 1 && localStorage.caughtbyguard == 0) { $(".btnM2").show();}
  }
  if (page == 3.2){
    localStorage.sawhole=1;
    if (localStorage.inv_tool_shovel == 1){$(".chance").show();}
    if (localStorage.totalAgi < 3) {
      $(".ch40").attr("onclick", "").addClass('optNope');
    }
  }
  if (page == 6.11){
    $("#sleft, #sright").css("background","linear-gradient(to bottom, #98947c -20%, #1d1b1a 70%)");
    $(".deco").hide();
  }
}
function openRaceTree(){

}
// *****************************************************************************************************************************
//Choose Pseudo
function choosePseudo(){
	var dapseudo = $('#copseudo').val();
	dapseudo = dapseudo.toLowerCase().replace(/\b[a-z]/g, function(letter) {
  	return letter.toUpperCase();});
	localStorage.pseudo=dapseudo;
	localStorage.numpage = 'Race'; refAll();
}
//Choose Race
function confirmRace(){
	if (darace != "none"){
		localStorage.race=darace;
		localStorage.plHealth=localStorage.plHealthMax=100;
		localStorage.raceXDex=localStorage.raceXChar=localStorage.raceXInt=localStorage.raceXAgi=localStorage.raceXMag=localStorage.raceXForce=1;
		localStorage.bForce=localStorage.bMag=localStorage.bChar=localStorage.bDex=localStorage.bAgi=localStorage.bInt=2;
		if (darace=="Homme"){
			localStorage.raceXDex=localStorage.raceXForce=1.1;
			localStorage.raceXMag=0.9;
			localStorage.plHealth=localStorage.plHealthMax=90;
		}
		if (darace=="Oculain"){
			localStorage.raceXDex=localStorage.raceXInt=1.1;
			localStorage.raceXChar=localStorage.raceXAgi=0.9;
		}
		if (darace=="Feûlain"){
			localStorage.raceXChar=localStorage.raceXAgi=1.1;
			localStorage.raceXForce=localStorage.raceXMag=0.9;
		}
		if (darace=="Ferré"){
			localStorage.raceXInt=localStorage.raceXMag=1.1;
			localStorage.raceXForce=0.9;
			localStorage.plHealth=localStorage.plHealthMax=90;
		}
		if (darace=="Angulain"){
			localStorage.plHealth=localStorage.plHealthMax=110;
			localStorage.raceXAgi=1.1;
			localStorage.raceXChar=localStorage.raceXDex=0.9;
		}
		if (darace=="Golem"){
			localStorage.plHealth=localStorage.plHealthMax=110;
			localStorage.raceXForce=1.1;
			localStorage.raceXInt=localStorage.raceXAgi=0.9;
		}
		localStorage.race=darace;
		localStorage.numpage = "Classe";
    window.location = 'Histoire.html';
	}
}
function closeTree() {
  $("#centeredTree").css({
    "transform": "scale(5)",
    "opacity": "0"
  });
  setTimeout(function() {
    localStorage.numpage = "Race"; refAll();
  }, 1000);
}
//2.211 Interieur Cabane
function nearbody2_211() {
  if (localStorage.tookCorpseGold == 0) {
    $("#dialoglayer1Text").html("Pour une raison qui ne regarde que vous, vous avez décidé de vous approcher du cadavre. La chance vous sourit ! L'homme portait une sacoche d'or à sa ceinture !");
    $("#dialoglayer1")
    .attr("title", "Un éclat couleur sang")
    .dialog({ resizable: false, height: "auto", dialogClass: 'dialBg_burlap',
      buttons: { "Prendre": function() {setSound("UI", "gold"); foundGold(50, "tookCorpseGold"); }}
    });
  }
  if (localStorage.tookCorpseGold == 1) {
    setSound("UI", "fleshSigh");
    $("#dialoglayer1Text").html("Vous entrefouillez les tripes et boyaux à pleine mains en quête d'autres trésors dorés, mais non. Vous êtes immonde. Sortez donc dehors.");
    setTimeout(function() {
      $("#dialoglayer1").attr("title", "Glauque..").dialog({ resizable: false, height: "auto", dialogClass: 'dialBg_burlap',
        buttons: { "Ok": function() { $(".ui-dialog-content").dialog("close"); refAll(); } }
      });
    }, 1500);
  }
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
  setSound("UI", "Aucun");
  setSound("EnvB", "CityCalm");
  setSound("EnvF", "Aucun");
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
    if (dirFrom == "Ouest"){alert('Vous ne pouvez pas encore faire cela');dirFrom="Aucune";refAll();}
  }
  if (localStorage.numpage == 5.2){
    if (dirFrom == "Sud"){localStorage.numpage=5.3;refAll();dirFrom="Aucune";}
    if (dirFrom == "Ouest"){alert('Vous ne pouvez pas encore faire cela');dirFrom="Aucune";refAll();}
    if (dirFrom == "Nord"){localStorage.numpage=5.1;refAll();dirFrom="Aucune";}
  }
  if (localStorage.numpage == 5.3){
    if (dirFrom == "Sud"){alert('Vous ne pouvez pas encore faire cela');dirFrom="Aucune";refAll();}
    if (dirFrom == "Nord"){localStorage.numpage=5.2;refAll();dirFrom="Aucune";}
  }
  if (localStorage.numpage == 6.1){
    if (dirFrom == "SudEst"){alert('Vous ne pouvez pas encore faire cela');dirFrom="Aucune";refAll();}
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
    setSound("EnvB", "Aucun");
    setSound("EnvF", "Snoring");
    setSound("Music", "Aucun");
    localStorage.numpage=6.11; refAll();
  },1000);
}
function leaveTemple(){
  $('#sleft, #sright').css('background','linear-gradient(to bottom, #feffe9 -20%, #c5e3e1 70%)');
  $('.deco').show();
  setSound("EnvB", "CityCalm");
  setSound("EnvF", "Aucun");
  setSound("Music", "CityHappy");
  localStorage.numpage=6.1;
  localStorage.dirFrom='Door8';
  refAll();
}
