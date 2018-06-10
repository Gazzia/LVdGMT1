refStats();
var audio = $("#playerCombat");
var whichSound = 1;
var dmgBlockedByEnemy = 0;
var plHitCalc = 0;
var plHitRaw = 0;
var randomcrit = 0;
/* FONCTION D'AJOUT DES CASES DES OBJETS */
function addEnemy(enemyNum, addedEnemy, addedEnemyLvl){
  localStorage['En'+enemyNum+'_HP'] = localStorage['En'+enemyNum+'_MaxHP'] = Math.round(addedEnemy.HealthBase + (addedEnemy.HealthCoef * (addedEnemyLvl - 1)));
  localStorage['En'+enemyNum+'_MaxDmgNor'] = Math.round(addedEnemy.DmgBaseNor + (addedEnemy.DmgCoefNor * (addedEnemyLvl - 1)));
  localStorage['En'+enemyNum+'_MaxDefNor'] = Math.round(addedEnemy.DefBaseNor + (addedEnemy.DefCoefNor * (addedEnemyLvl - 1)));
	$("#ennemis").append(
    '<div id="enemyui'+enemyNum+'" class="enemyui">'+
      '<div id="enemytitle'+enemyNum+'" class="enemytitle">'+
        '<a class="enemypicture"></a>'+
        '<div class="enemyName">'+addedEnemy.Name+'</div>'+
        '<div class="enemyLvl">Lvl'+addedEnemyLvl+'</div>'+
      '</div>'+
      '<div class="enemyStats">'+
        'Att max: '+localStorage["En"+enemyNum+"_MaxDmgNor"]+'Nor<br>'+
        'Def max: '+localStorage["En"+enemyNum+"_MaxDefNor"]+'Nor'+
      '</div>'+
      '<div class="enemyDesc">'+
        '<div class="scroll">'+addedEnemy.Desc+'</div>'+
      '</div>'+
      '<div id="vieEnemy'+enemyNum+'"></div>'+
      '<div id="vieEn'+enemyNum+'Text" class="vieEnemyText">'+
        localStorage["En"+enemyNum+"_HP"]+'/'+localStorage["En"+enemyNum+"_MaxHP"]+
      '</div>'+
      '<div class="enemyActions">'+
        '<div class="eA_action" id="action_HitEn'+enemyNum+'" title="Attaque armée" onclick="En_Hit('+enemyNum+')">'+
          '<div class="eA_icons attack"></div>'+
        '</div>'+
      '</div>'+
    '</div>');
  localStorage.enemiesNb=localStorage.enemiesNbLiving=++localStorage.enemiesNb;
}
function refStuff() {
  //infos Perso
  $("#infosPerso .carac").html("Force: "+totalForce+" | FS: "+totalFesse);
  var armeSel = localStorage.inv_selected_arme;
  $("#infosPerso .weapon").html(window[armeSel].Name+" | dmg max = "+window[armeSel].StatShort);
  var textRaceForce = "cette race n'a pas de multiplicateur de Force";
  if (raceXForce == 1.1){textRaceForce = "+10% force";} if (raceXForce == 0.9){textRaceForce = "-10% force";}
  $("#infosPerso .race").html(localStorage.race+": "+textRaceForce);
  var textClasseForce = "cette classe n'a pas de multiplicateur de Force";
  if (classeXForce == 1.5){textClasseForce = "+50% force";} if (classeXForce == 0.5){textClasseForce = "-50% force";}
  $("#infosPerso .classe").html(localStorage.classe+": "+textClasseForce);

  //vie reset
  $('#viePlayer').progressbar({classes:{"ui-progressbar": "progression combat pl", "ui-progressbar-value": "progression-value"}});
  $('#vieEnemy1, #vieEnemy2, #vieEnemy3, #vieEnemy4').progressbar({classes:{"ui-progressbar": "progression combat enemy", "ui-progressbar-value": "progression-value"}});
  $('#viePlayer').progressbar('option',{'max': Number(localStorage.plHealthMax), 'value': Number(localStorage.plHealth)});
  $('#vieEnemy1').progressbar('option',{'max': Number(localStorage.En1_MaxHP), 'value': Number(localStorage.En1_HP)});
  $('#vieEnemy2').progressbar('option',{'max': Number(localStorage.En2_MaxHP), 'value': Number(localStorage.En2_HP)});
  $('#vieEnemy3').progressbar('option',{'max': Number(localStorage.En3_MaxHP), 'value': Number(localStorage.En3_HP)});
  $('#vieEnemy4').progressbar('option',{'max': Number(localStorage.En4_MaxHP), 'value': Number(localStorage.En4_HP)});
  $('#playerVieText').html(localStorage.plHealth+"/"+localStorage.plHealthMax);

  $("#blackscreen").css({"background-color":"#b70000","top":"100%"});
  setTimeout(function () {
    $("#blackscreen").css("background-color","black");
    $(".enemyui").css("left","10%");
  }, 700);
}
function En_Hit(enemyNum){
  $("#action_HitEn"+enemyNum).attr("onclick","");
  $('.hit').fadeOut(200);
  if (localStorage.plHealth > 0) {
    plHitRaw = Math.floor(Math.random() * (plMaxDmg - plMinDmg + 1) + plMinDmg);
    randomcrit = Math.floor(Math.random() * 2) + 1;
    if (plMaxDmg != 0 && plHitRaw == plMaxDmg && randomcrit == 2) {
      CritMult = 1.5;
    } else {
      CritMult = 1;
    }
    dmgBlockedByEnemy =  Math.floor(Math.random() * (localStorage["En"+enemyNum+"_MaxDefNor"] - 0 + 1) + 0);
    if (dmgBlockedByEnemy > plHitRaw){
      dmgBlockedByEnemy=plHitRaw;
      //sinon l'ennemi gagne de la vie
    }
    plHitCalc = (((plHitRaw * CritMult) + totalForce) - dmgBlockedByEnemy);
    if (plHitCalc > 0){
      //if le coup fait des dégats
      localStorage['En'+enemyNum+'_HP'] -= plHitCalc;
      if (localStorage.Setting_SoundOn == 1) {
        $("#playerCombat").html("<source type='audio/mpeg' src='sound/UI/combat/hit_contondant"+Math.floor(Math.random() * (4 - 1 + 1) + 1)+".mp3'>");
        audio[0].volume=0.5;audio[0].load();audio[0].play();
      }
      $("#vieEn"+enemyNum+"Text").html(localStorage['En'+enemyNum+'_HP']+'/'+localStorage['En'+enemyNum+'_MaxHP']);
      $('#vieEnemy'+enemyNum).progressbar('option', 'value', Number(localStorage['En'+enemyNum+'_HP'])).effect( "shake",{ direction: "up", times: 4, distance: 2});
      $('#vieEnemy'+enemyNum+" .progression-value").css("background","red");
      setTimeout(function () {
        $('#vieEnemy'+enemyNum+" .progression-value").css("background","linear-gradient(180deg, #00053180, #0000 50%),linear-gradient(to bottom, #a5383880, #0000 50%), #972750");
      }, 200);
      $('.hit.PtoE.E'+enemyNum).html(">"+plHitCalc+" DMG").fadeIn(200);
    }
    if (plHitCalc == 0) {
      //if le coup ne fait pas de dégats
      $('.hit.PtoE.E'+enemyNum).html("> Raté !").fadeIn(200);
    }
    if (localStorage['En'+enemyNum+'_HP'] <= 0){
      //if l'ennemi n'a plus de vie
      localStorage['En'+enemyNum+'_HP'] = 0;
      $('.hit.EtoP.E'+enemyNum).html("L'ennemi est mort!").fadeIn(200);
      $("#enemyui"+enemyNum).css("margin-left","100%");
      $("#enemytitle"+enemyNum).css("background-color","#2a2929");
      localStorage.enemiesNbLiving=--localStorage.enemiesNbLiving;
      localStorage['En'+enemyNum+'_Dead'] = 1;
      if (localStorage.enemiesNbLiving <= 0){
        //if il n'y a plus d'ennemis en vie
        localStorage[zoneClearedLS] = 1;
        setTimeout(function () {
          $('#dialog .icon').html(iconLeftHand);
          $("#dialog .title").html("En vie !");
          $("#dialog .image").css("background-image", "unset");
          $("#dialog .text").html(WinDialog);
          $('#dialog a').hide();
          $('#dialog a.nb1').html('Ok').attr('onclick','localStorage.numpage=onWinLocation;window.location="Histoire.html";').show();
          openDialog();
        }, 1000);
      }
    }
  }
  if (localStorage.enemiesNbLiving > 0){
    setTimeout(function () {Pl_HitList(enemyNum);}, 1000);
  }
}
function Pl_HitList(enemyNum){
  if (localStorage.En1_Dead == 0){Pl_Hit(1);}
  if (localStorage.enemiesNb >= 1){
    setTimeout(function () {
      $("#action_HitEn"+enemyNum).attr("onclick","En_Hit("+enemyNum+")");
    }, (100 + Number(localStorage.enemiesNb)*200));
  }
  if (localStorage.enemiesNb >= 2 && localStorage.En2_Dead == 0){
    setTimeout(function () {Pl_Hit(2);}, 300);
  }
  if (localStorage.enemiesNb >= 3 && localStorage.En3_Dead == 0){
    setTimeout(function () {Pl_Hit(3);}, 500);
  }
  if (localStorage.enemiesNb >= 4 && localStorage.En4_Dead == 0){
    setTimeout(function () {Pl_Hit(4);}, 700);
  }

}
function Pl_Hit(enemyNum){
  var enemyatk = Math.floor(Math.random() * (localStorage['En'+enemyNum+'_MaxDmgNor'] - 0 + 1) + 0);
  $('.hit.PtoE').fadeOut(200);
  if (enemyatk == 0) {
    $('.hit.EtoP.E'+enemyNum).html("Bloqué !<").fadeIn(200);
  } else {
    localStorage.plHealth -= enemyatk;
    $('.hit.EtoP.E'+enemyNum).html(+enemyatk+" DMG<").fadeIn(200);
    if (localStorage.Setting_SoundOn == 1) {
      $("#playerCombat").html("<source type='audio/mpeg' src='sound/UI/combat/bite_rat"+Math.floor(Math.random() * (4 - 1 + 1) + 1)+".mp3'>");
      audio[0].volume=0.5;audio[0].load();audio[0].play();
    }
    $('#viePlayer').progressbar('option', 'value', Number(localStorage.plHealth)).effect( "shake",{ direction: "up", times: 4, distance: 2});
    $('#viePlayer .progression-value').css("background","red");
    setTimeout(function () {
      $('#viePlayer .progression-value').css("background","linear-gradient(180deg, #00053180, #0000 50%),linear-gradient(to bottom, #a5383880, #0000 50%), #972750");
    }, 200);
  }
  if (localStorage.plHealth < 0){localStorage.plHealth = 0;}
  $("#playerVieText").html(localStorage.plHealth+'/'+localStorage.plHealthMax);
  if (localStorage.plHealth == 0){
    $('#dialog .icon').html(iconLeftHand);
    $("#dialog .title").html("Mort");
    $("#dialog .image").css("background-image", "unset");
    $("#dialog .text").html(DeathDialog);
    $('#dialog a').hide();
    $('#dialog a.nb1').html('Recommencer').attr('onclick','window.location="Intro.html";').show();
    openDialog();
  }
}


function openDialog(){
  $('#dialog').css('left','20%');
  $('.mask.mid.darkgrey').fadeIn(700);
}
function closeDialog(){
  $('#dialog').css('left','-100%');
  $('.mask').fadeOut(700);
  $('#dialog a').hide();
}
