refStats();
var audio = $("#playerCombat");
var whichSound = 1;
var enemyDef = 0;
var playerHitDmgCalc = 0;
var playerHitDmgRaw = 0;
var randomcrit = 0;
/* FONCTION D'AJOUT DES CASES DES OBJETS */
function addEnemy(enemyNum, addedEnemy, addedEnemyLvl){
  localStorage['En'+enemyNum+'_HP'] = localStorage['En'+enemyNum+'_MaxHP'] = Math.round(addedEnemy.HealthBase + (addedEnemy.HealthCoef * (addedEnemyLvl - 1)));
  localStorage['En'+enemyNum+'_MaxDmgNor'] = Math.round(addedEnemy.DmgBaseNor + (addedEnemy.DmgCoefNor * (addedEnemyLvl - 1)));
  localStorage['En'+enemyNum+'_MaxDefNor'] = Math.round(addedEnemy.DefBaseNor + (addedEnemy.DefCoefNor * (addedEnemyLvl - 1)));
	$("#ennemisList").append(
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
          '<div class="eA_icons eA_attack"></div>'+
        '</div>'+
      '</div>'+
    '</div>');
  localStorage.enemiesNb=localStorage.enemiesNbLiving=++localStorage.enemiesNb;
}
function refStuff() {
  $("#infoChara").html("TOTAL Force: "+totalForce+"<br>TOTAL Puissance Mag.: "+totalFesse);
  var armeSel = localStorage.inv_selected_arme;
  $("#infoArme").html(window[armeSel].Name+"<br>Dmg max: "+window[armeSel].StatShort);
  var textRaceForce = "Cette race n'a pas de multiplicateur de Force";
  if (raceXForce == 1.1){textRaceForce = "Force +10%";} if (raceXForce == 0.9){textRaceForce = "Force -10%";}
  $("#infoRace").html(localStorage.race+"<br>"+textRaceForce);
  var textClasseForce = "Cette classe n'a pas de multiplicateur de Force";
  if (classeXForce == 1.5){textClasseForce = "Force +50%";} if (classeXForce == 0.5){textClasseForce = "Force -50%";}
  $("#infoClasse").html(localStorage.classe+"<br>"+textClasseForce);
  $('#viePlayer').progressbar({classes:{"ui-progressbar": "progression", "ui-progressbar-value": "progression-value"}});
  $('#vieEnemy1, #vieEnemy2, #vieEnemy3, #vieEnemy4').progressbar({classes:{"ui-progressbar": "progression progEnemy", "ui-progressbar-value": "progression-value progEnemy-value"}});
  $('#viePlayer').progressbar('option', 'max', Number(localStorage.plHealthMax));
  $('#viePlayer').progressbar('option', 'value', Number(localStorage.plHealth));
  $('#vieEnemy1').progressbar('option', 'max', Number(localStorage.En1_MaxHP));
  $('#vieEnemy1').progressbar('option', 'value', Number(localStorage.En1_HP));
  $('#vieEnemy2').progressbar('option', 'max', Number(localStorage.En2_MaxHP));
  $('#vieEnemy2').progressbar('option', 'value', Number(localStorage.En2_HP));
  $('#vieEnemy3').progressbar('option', 'max', Number(localStorage.En3_MaxHP));
  $('#vieEnemy3').progressbar('option', 'value', Number(localStorage.En3_HP));
  $('#vieEnemy4').progressbar('option', 'max', Number(localStorage.En4_MaxHP));
  $('#vieEnemy4').progressbar('option', 'value', Number(localStorage.En4_HP));
  $('#playerVieText').html(localStorage.plHealth+"/"+localStorage.plHealthMax);
  $(".enemyui").css("left","10%");
  $("#blackscreen").css("background-color","#b70000");
  $("#blackscreen").css("top","100%");
  setTimeout(function () {
    $("#blackscreen").css("background-color","black");
  }, 500);

}
$("#ennemisList").scroll(function(){
   var target = $("#infosList");
   $("#ennemisList").scroll(function(){
     target.prop("scrollTop", this.scrollTop)
           .prop("scrollLeft", this.scrollLeft);
   });
 });
function En_Hit(enemyNum){
  $("#action_HitEn"+enemyNum).attr("onclick","");
  var randomcritsuccess = 1;
  $('.hit_all').html("");
  if (localStorage.plHealth > 0) {
    playerHitDmgRaw = Math.floor(Math.random() * (maxdmg - mindmg + 1) + mindmg);
    enemyDef =  Math.floor(Math.random() * (localStorage["En"+enemyNum+"_MaxDefNor"] - 0 + 1) + 0);
    if (enemyDef > playerHitDmgRaw){
      enemyDef=playerHitDmgRaw;
    }
    randomcrit = Math.floor(Math.random() * 3) + 1;
    if (maxdmg != 0 && playerHitDmgRaw == maxdmg && randomcrit == 3) {
      randomcritsuccess = 1.5;
    }
    playerHitDmgCalc = (((playerHitDmgRaw * randomcritsuccess) + totalForce) - enemyDef);
    localStorage['En'+enemyNum+'_HP'] -= playerHitDmgCalc;
    if (localStorage['En'+enemyNum+'_HP'] < 0){
      localStorage['En'+enemyNum+'_HP'] = 0;
    }
    if (playerHitDmgCalc > 0){
      $("#playerCombat").html("<source type='audio/mpeg' src='sound/UI/combat/hit_contondant"+Math.floor(Math.random() * (4 - 1 + 1) + 1)+".mp3'>");
      audio[0].volume=0.5;
      audio[0].load();
      audio[0].play();
    }
    $("#vieEn"+enemyNum+"Text").html(localStorage['En'+enemyNum+'_HP']+'/'+localStorage['En'+enemyNum+'_MaxHP']);
    $('#vieEnemy'+enemyNum).progressbar('option', 'value', Number(localStorage['En'+enemyNum+'_HP'])).effect( "shake",{ direction: "up", times: 4, distance: 2});
    $('#vieEnemy'+enemyNum+" .progression-value").css("background","red");
    setTimeout(function () {
      $('#vieEnemy'+enemyNum+" .progression-value").css("background","linear-gradient(to top, #00053180, #0000 50%),linear-gradient(to bottom, #a5383880, #0000 50%), #972750");
    }, 200);
    $('#hit_PtoE'+enemyNum).html("Vous infligez "+playerHitDmgCalc+"dmg");
    if (playerHitDmgCalc == 0) {$('#hit_PtoE'+enemyNum).html("L'ennemi esquive !");}
    if (localStorage['En'+enemyNum+'_HP'] == 0){
      $("#enemyui"+enemyNum).css("margin-left","100%");
      $("#enemytitle"+enemyNum).css("background-color","#2a2929");
      localStorage.enemiesNbLiving=--localStorage.enemiesNbLiving;
      $('#hit_E'+enemyNum+'toP').html("L'ennemi est mort!");
      localStorage['En'+enemyNum+'_Dead'] = 1;
      if (localStorage.enemiesNbLiving <= 0){
        localStorage[zoneClearedLS] = 1;
        setTimeout(function () {
          $("#dialogCombat_Win").dialog({
            show: {
              effect: "fold",
              duration: 1000
            },
            resizable: false,
            modal:true,
            draggable:false,
            height: "auto",
            dialogClass: 'dialogItem',
            closeOnEscape: false,
            buttons: {
              "Ok": function(){
                localStorage.numpage=onWinLocation;
                window.location="Histoire.html";
              }
            }
          });
        }, 1000);
      }
    }
  }
  if (localStorage.enemiesNbLiving > 0){
    setTimeout(function () {Pl_HitList(enemyNum);}, 500);
  }
}
function Pl_HitList(enemyNum){
  if (localStorage.En1_Dead == 0){Pl_Hit(1);}
  if (localStorage.enemiesNb == 1){
    setTimeout(function () {
      $("#action_HitEn"+enemyNum).attr("onclick","En_Hit("+enemyNum+")");
    }, 300);
  }
  if (localStorage.enemiesNb >= 2){
    if (localStorage.En2_Dead == 0){
      setTimeout(function () {Pl_Hit(2);}, 300);}
  }
  if (localStorage.enemiesNb == 2){
    setTimeout(function () {
      $("#action_HitEn"+enemyNum).attr("onclick","En_Hit("+enemyNum+")");
    }, 500);
  }
  if (localStorage.enemiesNb >= 3){
    if (localStorage.En3_Dead == 0){setTimeout(function () {Pl_Hit(3);}, 500);}
  }
  if (localStorage.enemiesNb == 3){
    setTimeout(function () {
      $("#action_HitEn"+enemyNum).attr("onclick","En_Hit("+enemyNum+")");
    }, 700);
  }
  if (localStorage.enemiesNb >= 4){
    if (localStorage.En4_Dead == 0){setTimeout(function () {Pl_Hit(4);}, 700);}
  }
  if (localStorage.enemiesNb == 4){
    setTimeout(function () {
      $("#action_HitEn"+enemyNum).attr("onclick","En_Hit("+enemyNum+")");
    }, 900);
  }
}
function Pl_Hit(enemyNum){
  var enemyatk = Math.floor(Math.random() * (localStorage['En'+enemyNum+'_MaxDmgNor'] - 0 + 1) + 0);
  localStorage.plHealth -= enemyatk;
  $('#hit_E'+enemyNum+'toP').html("L'ennemi vous inflige "+enemyatk+"dmg");
  if (enemyatk == 0) {$('#hit_E'+enemyNum+'toP').html("L'ennemi vous rate !");}
  if (enemyatk > 0){
    $("#playerCombat").html("<source type='audio/mpeg' src='sound/UI/combat/bite_rat"+Math.floor(Math.random() * (4 - 1 + 1) + 1)+".mp3'>");
    audio[0].volume=0.5;
    audio[0].load();
    audio[0].play();
    $('#viePlayer').progressbar('option', 'value', Number(localStorage.plHealth)).effect( "shake",{ direction: "up", times: 4, distance: 2});
    $('#viePlayer .progression-value').css("background","red");
    setTimeout(function () {
      $('#viePlayer .progression-value').css("background","linear-gradient(to top, #00053180, #0000 50%),linear-gradient(to bottom, #a5383880, #0000 50%), #972750");
    }, 200);
  }
  if (localStorage.plHealth < 0){localStorage.plHealth = 0;}
  $("#playerVieText").html(localStorage.plHealth+'/'+localStorage.plHealthMax);
  if (localStorage.plHealth == 0){
    $("#dialogCombat_Death").dialog({
      show: {
        effect: "fold",
        duration: 1000
      },
  		resizable: false,
  		modal:true,
  		draggable:false,
  		height: "auto",
  		dialogClass: 'dialogItem',
      closeOnEscape: false,
  		buttons: {
  			"Recommencer": function(){
  				window.location="0.1 Pseudo.html";
  			}
  		}
  	});
  }
}
$(document).keydown(function(e) {
  if(e.which == 49) {
    e.which = 0;
    $("#dialogCombat_NoInv").dialog({
      resizable: false,
      modal:true,
      draggable:false,
      height: "auto",
      dialogClass: 'dialogItem',
      buttons: {
        "Ok": function(){
          $(this).closest('.ui-dialog-content').dialog('close');
        }
      }
    });
  }
});
