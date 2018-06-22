function addBtn(walk, take, use, talk, fight, give, divers, look) {
  if (walk >= 1) {
    $("#actWalk").show();
  }
  for (i1 = 0; i1 < walk; i1++) {
    $("#actWalkActions").append("<a id='btnWalk" + (i1 + 1) + "' class='action'></a>");
  }
  if (take >= 1) {
    $("#actTake").show();
  }
  for (i2 = 0; i2 < take; i2++) {
    $("#actTakeActions").append("<a id='btnTake" + (i2 + 1) + "' class='action'></a>");
  }
  if (use >= 1) {
    $("#actUse").show();
  }
  for (i3 = 0; i3 < use; i3++) {
    $("#actUseActions").append("<a id='btnUse" + (i3 + 1) + "' class='action'></a>");
  }
  if (talk >= 1) {
    $("#actTalk").show();
  }
  for (i4 = 0; i4 < talk; i4++) {
    $("#actTalkActions").append("<a id='btnTalk" + (i4 + 1) + "' class='action'></a>");
  }
  if (fight >= 1) {
    $("#actFight").show();
  }
  for (i5 = 0; i5 < fight; i5++) {
    $("#actFightActions").append("<a id='btnFight" + (i5 + 1) + "' class='action'></a>");
  }
  if (give >= 1) {
    $("#actGive").show();
  }
  for (i6 = 0; i6 < give; i6++) {
    $("#actGiveActions").append("<a id='btnGive" + (i6 + 1) + "' class='action'></a>");
  }
  if (divers >= 1) {
    $("#actDivers").show();
  }
  for (i7 = 0; i7 < divers; i7++) {
    $("#actDiversActions").append("<a id='btnDivers" + (i7 + 1) + "' class='action'></a>");
  }
  if (look >= 1) {
    $("#actLook").show();
  }
  for (i8 = 0; i8 < look; i8++) {
    $("#actLookActions").append("<a id='btnLook" + (i8 + 1) + "' class='action'></a>");
  }
}
// 1-WALK  2-TAKE  3-USE  4-TALK  5-FIGHT  6-GIVE  7-DIVERS  8-LOOK
function refBtns() {
  $(".actionsCat").hide();
  $(".actionGroup").html('');
  var région = localStorage.région;
  var milieu = localStorage.milieu;
  var zone = localStorage.zone;
  if (région == "Soufflant") {
    if (zone == "ChoixClasse") {
      addBtn(0, 0, 0, 0, 0, 0, 4, 0);
      $("#btnDivers1").html("La magie").attr("onclick", "setpage(0,0,'ClasseMage'); refAllbutImg();");
      $("#btnDivers2").html("Les armes").attr("onclick", "setpage(0,0,'ClasseGuerrier'); refAllbutImg();");
      $("#btnDivers3").html("Le charisme").attr("onclick", "setpage(0,0,'ClasseEloquent'); refAllbutImg();");
      $("#btnDivers4").html("L'habileté").attr("onclick", "setpage(0,0,'ClasseHabile'); refAllbutImg();");
    }
    if (zone == "ClasseMage" || zone == "ClasseGuerrier" || zone == "ClasseEloquent" || zone == "ClasseHabile") {
      addBtn(0, 0, 0, 0, 0, 0, 1, 0);
      $("#btnDivers1").html("Continuer").attr("onclick", "setpage(0,0,'Embranchement'); refAll();");
    }
    if (zone == "Embranchement") {
      addBtn(3, 0, 0, 0, 0, 0, 0, 1);
      $("#btnWalk1").html("Aller vers l'Ouest").attr("onclick", "setpage(0,0,'Bois'); refAll();").addClass('Ouest');
      $("#btnWalk2").html("Continuer sur le chemin").attr("onclick", "setpage(0,0,'Mur'); refAll();").addClass('Nord');
      $("#btnWalk3").html("Aller vers l'Est").attr("onclick", "setpage(0,0,'Cabane'); refAll();").addClass('Est');
      $("#btnLook1").html("Panorama").attr("onclick", "inspect()");
    }
    if (zone == "Bois") {
      addBtn(2, 0, 0, 0, 0, 0, 0, 2);
      $("#btnWalk1").html("Suivre le bruit").attr("onclick", "setpage(0,0,'Rivière'); refAll();").addClass('Ouest');
      $("#btnWalk2").html("Revenir sur le chemin").attr("onclick", "setpage(0,0,'Embranchement'); refAll();").addClass('Est');
      $("#btnLook1").html("Arbres").attr("onclick", "inspect('Arbres')");
      $("#btnLook2").html("Herbe").attr("onclick", "inspect('Herbe')");
    }
    if (zone == "Rivière") {
      addBtn(1, 0, 0, 0, 0, 0, 0, 2);
      $("#btnWalk1").html("Revenir vers l'entrée du bois").attr("onclick", "setpage(0,0,'Bois'); refAll();").addClass('Est');
      $("#btnLook1").html("Rive opposée").attr("onclick", "inspect('RiveOpp')");
      $("#btnLook2").html("Eau").attr("onclick", "inspect('Eau')");
    }
    // 1-WALK  2-TAKE  3-USE  4-TALK  5-FIGHT  6-GIVE  7-DIVERS  8-LOOK
    if (zone == "Cabane") {
      addBtn(2, 0, 0, 0, 0, 0, 1, 1);
      $("#btnWalk1").html("Faire le tour de la cabane").attr("onclick", "setpage(0,0,'Fatras'); refAll();").addClass('Est');
      $("#btnWalk2").html("Revenir sur le chemin").attr("onclick", "setpage(0,0,'Embranchement'); refAll();").addClass('Ouest');
      $("#btnDivers1").html("Frapper à la porte");
      $("#btnLook1").html("Cabane").attr("onclick", "inspect()");
    }
    if (zone == "Intérieur") {
      addBtn(1, 0, 0, 0, 0, 0, 0, 1);
      $("#btnWalk1").html("Sortir rapidement !").attr("onclick", "quitMasure()");
      $("#btnLook1").html("S'approcher de la dépouille").attr("onclick", "inspect();");
    }
    if (zone == "Fatras") {
      addBtn(1, 0, 0, 0, 0, 0, 0, 2);
      $("#btnWalk1").html("Retourner de l'autre côté").attr("onclick", "setpage(0,0,'Cabane'); refAll();").addClass('Ouest');
      $("#btnLook1").html("Fatras").attr("onclick", "inspect('Fatras');");
      $("#btnLook2").html("Collines").attr("onclick", "inspect('Collines');");
    }
    if (zone == "Mur") {
      addBtn(1, 0, 0, 1, 0, 0, 0, 0);
      $("#btnWalk1").html("Retourner dans la plaine").attr("onclick", "setpage(0,0,'Embranchement'); refAll();").addClass('Sud');
      $("#btnTalk1").html("Garde").attr("onclick", "dialogue('Guarde_MerryvalePsud');");
    }
    if (zone == "Tunnel") {
      addBtn(1, 0, 0, 0, 0, 0, 2, 0);
      $("#btnWalk1").html("Retourner devant le mur").addClass("retourMur").attr("onclick", "setpage(0,0,'Mur'); refAll();").addClass('Ouest');
      $("#btnDivers1").html("Creuser").addClass("cursorSkill chance").attr({"onclick": "digTunnelSoufflant(1)","title":"<b>10%</b> de chance de réussir"}).hide();
      $("#btnDivers2").html("Creuser silencieusement").addClass("cursorSkill chance need needDex need3").attr({"onclick": "digTunnelSoufflant(4)","title":"<b>40%</b> de chance de réussir"}).hide();
      $("#btnWalk2").html("Entrer dans la ville").addClass("enterCity").attr("onclick", "setpage(0,0,'4'); refAll();").hide();
    }
  }
  if (région == "Pouce") {
    if (milieu == "Merryvale") {
      if (zone == "Egouts"){
        addBtn(1, 0, 0, 0, 0, 0, 0, 1);
        $("#btnWalk1").html("Monter l'échelle").attr("onclick", "");
        $("#btnLook1").html("Luisance").attr("onclick", "");
      }
      if (zone == 4) {
        addBtn(1, 0, 0, 0, 0, 0, 0, 0);
        $("#btnWalk1").html("Continuer").attr("onclick", "enterMerryvale();");
      }
      // 1-WALK  2-TAKE  3-USE  4-TALK  5-FIGHT  6-GIVE  7-DIVERS  8-LOOK
      if (zone == 5.1) {
        addBtn(3, 0, 0, 1, 0, 0, 0, 1);
        $("#btnWalk1").html("Prendre la rue du Marché").attr("onclick", "dirFrom('Sud');").addClass("btnSud");
        $("#btnWalk2").html("Prendre la rue de la Clef").attr("onclick", "dirFrom('Est');").addClass("btnEst");
        $("#btnWalk3").html("Prendre la rue Blanche").attr("onclick", "dirFrom('Ouest');").addClass("btnOuest");
        $("#btnTalk1").html("S'approcher de l'angulain").attr("onclick", "setpage(0,0,'5.11');window.location='Dialogue.html';");
        $("#btnLook1").html("Inspecter la zone").attr("onclick", "inspect();");
        if (localStorage.dirFrom == "Nord") {
          $(".btnSud").html("Revenir rue du Marché").css("color", "#655656");
        }
        if (localStorage.dirFrom == "Ouest") {
          $(".btnEst").html("Revenir rue de la Clef").css("color", "#655656");
        }
        if (localStorage.dirFrom == "Est") {
          $(".btnOuest").html("Revenir rue Blanche").css("color", "#655656");
        }
      }
      if (zone == 5.2) {
        addBtn(3, 0, 0, 0, 0, 0, 1, 1);
        $("#btnWalk1").html("Aller en direction du marché").attr("onclick", "dirFrom('Sud');").addClass("btnSud");
        $("#btnWalk2").html("Prendre la ruelle").attr("onclick", "dirFrom('Ouest');").addClass("btnOuest");
        $("#btnWalk3").html("Aller à la Porte Sud").attr("onclick", "dirFrom('Nord');").addClass("btnNord");
        $("#btnDivers1").html("Frapper au numéro 1").attr("onclick", "knockDoor();");
        $("#btnLook1").html("Inspecter la zone").attr("onclick", "inspect();");
        if (localStorage.dirFrom == "Nord") {
          $(".btnSud").html("Revenir vers le Marché").css("color", "#655656");
        }
        if (localStorage.dirFrom == "Ouest") {
          $(".btnOuest").html("Revenir dans la ruelle").css("color", "#655656");
        }
        if (localStorage.dirFrom == "Sud") {
          $(".btnNord").html("Revenir Porte Sud").css("color", "#655656");
        }
      }
      // 1-WALK  2-TAKE  3-USE  4-TALK  5-FIGHT  6-GIVE  7-DIVERS  8-LOOK
      if (zone == 5.3) {
        addBtn(3, 0, 0, 0, 0, 0, 1, 1);
        $("#btnWalk1").html("Aller sur la place du marché").attr("onclick", "dirFrom('Sud');").addClass("btnSud");
        $("#btnWalk2").html("Aller vers la Porte Sud").attr("onclick", "dirFrom('Nord');").addClass("btnNord");
        $("#btnWalk3").html("Entrer dans le dispensaire").attr("onclick", "setpage(0,0,'5.31'); refAll();").addClass("btnDispensaire");
        $("#btnDivers1").html("Frapper au numéro 3").attr("onclick", "knockDoor();");
        $("#btnLook1").html("Inspecter la zone").attr("onclick", "inspect();");
        if (localStorage.dirFrom == "Nord") {
          $(".btnSud").html("Revenir sur le Marché").css("color", "#655656");
        }
        if (localStorage.dirFrom == "Dispensaire") {
          $(".btnDispensaire").html("Revenir dans le dispensaire").css("color", "#655656");
        }
        if (localStorage.dirFrom == "Sud") {
          $(".btnNord").html("Revenir vers la Porte Sud").css("color", "#655656");
        }
      }
      if (zone == 5.31) {
        addBtn(3, 0, 0, 0, 0, 0, 0, 0);
        $("#btnWalk1").html("Avancer dans la salle de soin").attr("onclick", "setpage(0,0,'5.311'); refAll();");
        $("#btnWalk2").html("Aller vers la porte fermée").attr("onclick", "setpage(0,0,'5.312'); refAll();");
        $("#btnWalk3").html("Sortir du dispensaire").attr("onclick", "setpage(0,0,'5.3'); localStorage.dirFrom='Dispensaire'; refAll();");
      }
      if (zone == 5.311) {
        addBtn(1, 0, 1, 0, 0, 0, 0, 0);
        $("#btnUse1").html("Boire une potion au hasard").attr("onclick", "drinkRandomPotion();");
        $("#btnWalk1").html("Partir").attr("onclick", "setpage(0,0,'5.31'); refAll();");
        $("#btnWalk2").html("Recommencer l'aventure").attr("onclick", "").addClass('potionDeath').hide();
      }
      if (zone == 5.312) {
        addBtn(1, 0, 0, 0, 0, 0, 0, 0);
        $("#btnWalk1").html("Revenir à l'entrée").attr("onclick", "setpage(0,0,'5.31'); refAll();");
      }
      // 1-WALK  2-TAKE  3-USE  4-TALK  5-FIGHT  6-GIVE  7-DIVERS  8-LOOK
      if (zone == 6.1) {
        addBtn(3, 0, 0, 0, 0, 0, 2, 1);
        $("#btnWalk1").html("Monter vers le Nord Ouest").attr("onclick", "dirFrom('SudEst');").addClass("btnSud");
        $("#btnWalk2").html("Aller à la Porte Sud").attr("onclick", "dirFrom('Ouest');").addClass("btnOuest");
        $("#btnWalk3").html("Entrer au 8").attr("onclick", "enterTemple();").addClass("btnDoor8");
        $("#btnDivers1").html("Frapper au 7").attr("onclick", "knockDoor();");
        $("#btnDivers2").html("Frapper au 8bis").attr("onclick", "knockDoor();");
        $("#btnLook1").html("Inspecter la zone").attr("onclick", "inspect();");
        if (localStorage.dirFrom == "Est") {
          $(".btnOuest").html("Revenir Porte Sud").css("color", "#655656");
        }
        if (localStorage.dirFrom == "Door8") {
          $(".btnDoor8").html("Revenir dans le temple").css("color", "#655656");
        }
      }
      if (zone == 6.11) {
        addBtn(1, 3, 2);
        $("#btnFight1").html("Entrer par la grande porte").attr("onclick", "");
        $("#btnDivers1").html("Entrer à gauche").attr("onclick", "");
        $("#btnDivers2").html("Inspecter la zone").attr("onclick", "inspect();");
        $("#btnDivers3").html("Entrer à droite").attr("onclick", "");
        $("#btnGive1").html("Réveiller le dormeur").attr("onclick", "");
        $("#btnGive2").html("Sortir").attr("onclick", "leaveTemple();");
      }
    }
  }
// 1-WALK  2-TAKE  3-USE  4-TALK  5-FIGHT  6-GIVE  7-DIVERS  8-LOOK
  if ($('#actWalkActions').children(':visible').length == 0) {
    $('#actWalk').hide();
  }
  if ($('#actTakeActions').children(':visible').length == 0) {
    $('#actTake').hide();
  }
  if ($('#actUseActions').children(':visible').length == 0) {
    $('#actUse').hide();
  }
  if ($('#actTalkActions').children(':visible').length == 0) {
    $('#actTalk').hide();
  }
  if ($('#actFightActions').children(':visible').length == 0) {
    $('#actFight').hide();
  }
  if ($('#actGiveActions').children(':visible').length == 0) {
    $('#actGive').hide();
  }
  if ($('#actDiversActions').children(':visible').length == 0) {
    $('#actDivers').hide();
  }
  if ($('#actLookActions').children(':visible').length == 0) {
    $('#actLook').hide();
  }
}
