function addBtn(walk, take, use, talk, fight, give, divers, look){
  if (walk >= 1){$("#actWalk").show();}
  for (i1 = 0; i1 < walk; i1++) {$("#actWalkActions").append("<a id='btnWalk"+(i1 + 1)+"' class='action'></a>");}
  if (take >= 1){$("#actTake").show();}
  for (i2 = 0; i2 < take; i2++) {$("#actTakeActions").append("<a id='btnTake"+(i2 + 1)+"' class='action'></a>");}
  if (use >= 1){$("#actUse").show();}
  for (i3 = 0; i3 < use; i3++) {$("#actUseActions").append("<a id='btnUse"+(i3 + 1)+"' class='action'></a>");}
  if (talk >= 1){$("#actTalk").show();}
  for (i4 = 0; i4 < talk; i4++) {$("#actTalkActions").append("<a id='btnTalk"+(i4 + 1)+"' class='action'></a>");}
  if (fight >= 1){$("#actFight").show();}
  for (i5 = 0; i5 < fight; i5++) {$("#actFightActions").append("<a id='btnFight"+(i5 + 1)+"' class='action'></a>");}
  if (give >= 1){$("#actGive").show();}
  for (i6 = 0; i6 < give; i6++) {$("#actGiveActions").append("<a id='btnGive"+(i6 + 1)+"' class='action'></a>");}
  if (divers >= 1){$("#actDivers").show();}
  for (i7 = 0; i7 < divers; i7++) {$("#actDiversActions").append("<a id='btnDivers"+(i7 + 1)+"' class='action'></a>");}
  if (look >= 1){$("#actLook").show();}
  for (i8 = 0; i8 < look; i8++) {$("#actLookActions").append("<a id='btnLook"+(i8 + 1)+"' class='action'></a>");}
}
  // if (top>=1){ $("#choix").append('<a class="btnD btnT1">1</a>'); }
  // if (top>=2){ $("#choix").append('<a class="btnD btnT2">2</a>'); }
  // if (top>=3){ $("#choix").append('<a class="btnD btnT3">3</a>'); }
  // if (top>=4){ $("#choix").append('<a class="btnD btnT4">4</a>'); }
  // if (top>=5){ $("#choix").append('<a class="btnD btnT5">5</a>'); }
  // if (top>=1 && mid+bot >=1){ $("#choix").append("<br>");}
  // if (mid>=1){ $("#choix").append('<a class="btnD btnM1">1</a>'); }
  // if (mid>=2){ $("#choix").append('<a class="btnD btnM2">2</a>'); }
  // if (mid>=3){ $("#choix").append('<a class="btnD btnM3">3</a>'); }
  // if (mid>=4){ $("#choix").append('<a class="btnD btnM4">4</a>'); }
  // if (mid>=5){ $("#choix").append('<a class="btnD btnM5">5</a>'); }
  // if (mid>=1 && bot >=1){ $("#choix").append("<br>");}
  // if (bot>=1){ $("#choix").append('<a class="btnD btnB1">1</a>'); }
  // if (bot>=2){ $("#choix").append('<a class="btnD btnB2">2</a>'); }
  // if (bot>=3){ $("#choix").append('<a class="btnD btnB3">3</a>'); }
  // if (bot>=4){ $("#choix").append('<a class="btnD btnB4">4</a>'); }
  // if (bot>=5){ $("#choix").append('<a class="btnD btnB5">5</a>'); }
function refBtns(){
  $(".actionsCat").hide();
  $(".actionGroup").html('');
  var page = localStorage.numpage;
  if (page == "Classe"){
    addBtn(0,0,0,0,0,0,4,0);
    $("#btnDivers1").html("La magie").attr("onclick","localStorage.numpage='ClasseMage'; refAllbutImg();");
    $("#btnDivers2").html("Les armes").attr("onclick","localStorage.numpage='ClasseGuerrier'; refAllbutImg();");
    $("#btnDivers3").html("Le charisme").attr("onclick","localStorage.numpage='ClasseEloquent'; refAllbutImg();");
    $("#btnDivers4").html("L'habileté").attr("onclick","localStorage.numpage='ClasseHabile'; refAllbutImg();");
  }
  if (page == "ClasseMage" || page == "ClasseGuerrier" || page == "ClasseEloquent" || page == "ClasseHabile"){
    addBtn(0,0,0,0,0,0,1,0);
    $("#btnDivers1").html("Continuer").attr("onclick","localStorage.numpage=2; refAll();");
  }
  if (page == 2){
    addBtn(3,0,0,0,0,0,0,1);
    $("#btnWalk1").html("Aller vers l'Ouest").attr("onclick","localStorage.numpage=2.1; refAll();").addClass('btnOuest');
    $("#btnWalk2").html("Continuer sur le chemin").attr("onclick","localStorage.numpage=3; refAll();").addClass('btnNord');
    $("#btnWalk3").html("Aller vers l'Est").attr("onclick","localStorage.numpage=2.2; refAll();").addClass('btnEst');
    $("#btnLook1").html("Inspecter la zone").attr("onclick","inspect()");
  }
  if (page == 2.1){
    addBtn(2,0,0,0,0,0,0,1);
    $("#btnWalk1").html("Suivre le bruit").attr("onclick","localStorage.numpage=2.11; refAll();");
    $("#btnWalk2").html("Revenir sur le chemin").attr("onclick","localStorage.numpage=2; refAll();");
    $("#btnLook1").html("Inspecter la zone").attr("onclick","inspect()");
  }
  if (page == 2.11){
    addBtn(1,0,0,0,0,0,0,1);
    $("#btnWalk1").html("Revenir vers l'entrée du bois").attr("onclick","localStorage.numpage=2.1; refAll();");
    $("#btnLook1").html("Inspecter la zone").attr("onclick","inspect()");
  }
  if (page == 2.2){
    addBtn(2,0,0,0,0,0,1,1);
    $("#btnWalk1").html("Faire le tour de la cabane").attr("onclick","localStorage.numpage=2.22; refAll();");
    $("#btnWalk2").html("Revenir sur le chemin").attr("onclick","localStorage.numpage=2; refAll();");
    $("#btnDivers1").html("Frapper à la porte");
    $("#btnLook1").html("Inspecter la zone").attr("onclick","inspect()");
  }
  if (page == 2.211){
    addBtn(1,0,0,0,0,0,0,1);
    $("#btnWalk1").html("Sortir rapidement !").attr("onclick","localStorage.numpage=2.2; refAll(); $('#sleft, #sright').css('background','linear-gradient(to bottom, #feffe9 -20%, #c5e3e1 70%)');$('.deco').show();");
    $("#btnLook1").html("S'approcher de la dépouille").attr("onclick","inspect();");
  }
  if (page == 2.22){
    addBtn(1,0,0,0,0,0,0,1);
    $("#btnWalk1").html("Retourner de l'autre côté").attr("onclick","localStorage.numpage=2.2; refAll();");
    $("#btnLook1").html("Inspecter les outils").attr("onclick","foundItem('Pelle')").hide();
  }
  if (page == 3){
    addBtn(1,0,0,1,0,0,0,0);
    $("#btnWalk1").html("Retourner dans la plaine").attr("onclick","localStorage.numpage=2; refAll();");
    $("#btnTalk1").html("Garde").attr("onclick","dialogue('Guarde_MerryvalePsud');");
    $("#btnLook1").html("Trouver un autre moyen de passer").attr("onclick","localStorage.numpage=3.2; refAll()").hide();
  }
  if (page == 3.2){
    addBtn(1,0,1,0,0,0,0,0);
    $("#btnWalk1").html("Retourner devant le mur").addClass("retourMur").attr("onclick","localStorage.numpage=3; refAll();");
    $("#btnUse1").html("Pelle").addClass("cursorSkill chance ch10").attr("onclick","dig(1)").hide();
    $("#btnDivers3").html("Creuser silencieusement").addClass("cursorSkill chance ch40").attr("onclick","dig(4)").hide();
    $("#btnWalk2").html("Entrer dans la ville").addClass("enterCity").attr("onclick","localStorage.numpage=4; refAll();").hide();
  }
  if (page == 4){
    addBtn(1,0,0,0,0,0,0,0);
    $("#btnWalk1").html("Continuer").attr("onclick","enterMerryvale();");
  }
  if (page == 5.1){
    addBtn(3,0,0,1,0,0,0,1);
    $("#btnWalk1").html("Prendre la rue du Marché").attr("onclick","dirFrom('Sud');").addClass("btnSud");
    $("#btnWalk2").html("Prendre la rue de la Clef").attr("onclick","dirFrom('Est');").addClass("btnEst");
    $("#btnWalk3").html("Prendre la rue Blanche").attr("onclick","dirFrom('Ouest');").addClass("btnOuest");
    $("#btnTalk1").html("S'approcher de l'angulain").attr("onclick","localStorage.numpage=5.11;window.location='Dialogue.html';");
    $("#btnLook1").html("Inspecter la zone").attr("onclick","inspect();");
    if (localStorage.dirFrom == "Nord"){$(".btnSud").html("Revenir rue du Marché").css("color","#655656");}
    if (localStorage.dirFrom == "Ouest"){$(".btnEst").html("Revenir rue de la Clef").css("color","#655656");}
    if (localStorage.dirFrom == "Est"){$(".btnOuest").html("Revenir rue Blanche").css("color","#655656");}
  }
  if (page == 5.2){
    addBtn(3,0,0,0,0,0,1,1);
    $("#btnWalk1").html("Aller en direction du marché").attr("onclick","dirFrom('Sud');").addClass("btnSud");
    $("#btnWalk2").html("Prendre la ruelle").attr("onclick","dirFrom('Ouest');").addClass("btnOuest");
    $("#btnWalk3").html("Aller à la Porte Sud").attr("onclick","dirFrom('Nord');").addClass("btnNord");
    $("#btnDivers1").html("Frapper au numéro 1").attr("onclick","knockDoor();");
    $("#btnLook1").html("Inspecter la zone").attr("onclick","inspect();");
    if (localStorage.dirFrom == "Nord"){$(".btnSud").html("Revenir vers le Marché").css("color","#655656");}
    if (localStorage.dirFrom == "Ouest"){$(".btnOuest").html("Revenir dans la ruelle").css("color","#655656");}
    if (localStorage.dirFrom == "Sud"){$(".btnNord").html("Revenir Porte Sud").css("color","#655656");}
  }
  if (page == 5.3){
    addBtn(3,0,0,0,0,0,1,1);
    $("#btnWalk1").html("Aller sur la place du marché").attr("onclick","dirFrom('Sud');").addClass("btnSud");
    $("#btnWalk2").html("Aller vers la Porte Sud").attr("onclick","dirFrom('Nord');").addClass("btnNord");
    $("#btnWalk3").html("Entrer dans le dispensaire").attr("onclick","localStorage.numpage=5.31; refAll();").addClass("btnDispensaire");
    $("#btnDivers1").html("Frapper au numéro 3").attr("onclick","knockDoor();");
    $("#btnLook1").html("Inspecter la zone").attr("onclick","inspect();");
    if (localStorage.dirFrom == "Nord"){$(".btnSud").html("Revenir sur le Marché").css("color","#655656");}
    if (localStorage.dirFrom == "Dispensaire"){$(".btnDispensaire").html("Revenir dans le dispensaire").css("color","#655656");}
    if (localStorage.dirFrom == "Sud"){$(".btnNord").html("Revenir vers la Porte Sud").css("color","#655656");}
  }
  if (page == 5.31){
    addBtn(3,0,0,0,0,0,0,0);
    $("#btnWalk1").html("Avancer dans la salle de soin").attr("onclick","localStorage.numpage=5.311; refAll();");
    $("#btnWalk2").html("Aller vers la porte fermée").attr("onclick","localStorage.numpage=5.312; refAll();");
    $("#btnWalk3").html("Sortir du dispensaire").attr("onclick","localStorage.numpage=5.3; localStorage.dirFrom='Dispensaire'; refAll();");
  }
  if (page == 5.311){
    addBtn(1,0,1,0,0,0,0,0);
    $("#btnUse1").html("Boire une potion au hasard").attr("onclick","drinkRandomPotion();");
    $("#btnWalk1").html("Partir").attr("onclick","localStorage.numpage=5.31; refAll();");
    $("#btnWalk2").html("Recommencer l'aventure").attr("onclick","").addClass('potionDeath').hide();
  }
  if (page == 5.312){
    addBtn(1,0,0,0,0,0,0,0);
    $("#btnWalk1").html("Revenir à l'entrée").attr("onclick","localStorage.numpage=5.31; refAll();");
  }
  if (page == 6.1){
    addBtn(3,0,0,0,0,0,2,1);
    $("#btnWalk1").html("Monter vers le Nord Ouest").attr("onclick","dirFrom('SudEst');").addClass("btnSud");
    $("#btnWalk2").html("Aller à la Porte Sud").attr("onclick","dirFrom('Ouest');").addClass("btnOuest");
    $("#btnWalk3").html("Entrer au 8").attr("onclick","enterTemple();").addClass("btnDoor8");
    $("#btnDivers1").html("Frapper au 7").attr("onclick","knockDoor();");
    $("#btnDivers2").html("Frapper au 8bis").attr("onclick","knockDoor();");
    $("#btnLook1").html("Inspecter la zone").attr("onclick","inspect();");
    if (localStorage.dirFrom == "Est"){$(".btnOuest").html("Revenir Porte Sud").css("color","#655656");}
    if (localStorage.dirFrom == "Door8"){$(".btnDoor8").html("Revenir dans le temple").css("color","#655656");}
  }
  if (page == 6.11){
    addBtn(1,3,2);
    $("#btnFight1").html("Entrer par la grande porte").attr("onclick","");
    $("#btnDivers1").html("Entrer à gauche").attr("onclick","");
    $("#btnDivers2").html("Inspecter la zone").attr("onclick","inspect();");
    $("#btnDivers3").html("Entrer à droite").attr("onclick","");
    $("#btnGive1").html("Réveiller le dormeur").attr("onclick","");
    $("#btnGive2").html("Sortir").attr("onclick","leaveTemple();");
  }
}
