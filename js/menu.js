$("#allmenus").html("<div id='menuui' style='display:none'></div><div id='statistiques' 'style=display:none'></div>")
$(document).keydown(function(e) {
  if(e.which == 27 && localStorage.menuOpen==0) {
    e.which = 0;
    localStorage.menuOpen=1;
    $("#menuui")
    .html(
      "<a class='menuBtnText' onclick='help()'>Aide et raccourcis</a>"+
      "<a class='menuBtnText' onclick='soundoptions()'>Options sonores</a>"+
      "<a class='menuBtnText' onclick='rusure()'>Recommencer le jeu</a>"+
      "<div id='menuIcons'>"+
      "<a class='menuBtnIco MBIinv' href='Inv.html'></a>"+
      "<a class='menuBtnIco MBIstats' onclick='openStats()'></a>"+
      "<a class='menuBtnIco MBImap'></a>"+
      "</div>"+
      "<div id='menuHoverText'></div>"
    )
    .attr("title","Menu");
    $("#menuui").dialog({
      modal: true,
      resizable: false,
      draggable:false,
      height: "100%",
      dialogClass: 'menuui',
      buttons: {
        "Fermer": function() {
          $(this).closest('.ui-dialog-content').dialog('close');
        }
      }
    });
  }
    $(".MBIinv").hover(function(){$("#menuHoverText").html("Inventaire (1)").toggle();});
    $(".MBIstats").hover(function(){$("#menuHoverText").html("Stats (2)").toggle();});
    $(".MBImap").hover(function(){$("#menuHoverText").html("Carte (3)").toggle();});
  if(e.which == 27 && localStorage.menuOpen==1) {
    localStorage.menuOpen=0;
    $(this).closest('.ui-dialog-content').dialog('close');
  }
  if(e.which == 49 && localStorage.inventoryOpen==0) {
    e.which = 0;
    window.location="Inv.html";
  }
  if(e.which == 49 && localStorage.inventoryOpen==1) {retourToPage();}
  if(e.which == 50) {openStats();}
});
function rusure(){
  $("#menuui").dialog({
    modal: true,
    resizable: false,
    draggable:false,
    height: "auto",
    dialogClass: 'menuui',
    title: "Recommencer",
    buttons: {
      "Oui": function() {
        window.location="index.html"
      },
      "Non": function() {
        $(this).closest('.ui-dialog-content').dialog('close');
      }
    }
  }).html("<div class=\"inMenuBig\">Êtes vous-sûr ?</div>");
}
function openStats(){
  $(this).closest('.ui-dialog-content').dialog('close');
  $("#statistiques").dialog({
    modal: true,
    resizable: false,
    draggable:false,
    height: "auto",
    dialogClass: 'statsui',
    title: "Stats",
    buttons: {
      "Ok": function() {
        $(this).closest('.ui-dialog-content').dialog('close');
      }
    }
  });
}
$("#statistiques").html(
  '<table class="tg">'+
  '<tr class="firstln"> <th></th> <th>Base<br></th> <th title="Race">* '+localStorage.race+'<br></th> <th title="Classe">* '+localStorage.classe+'<br></th> <th>Objets<br></th> <th>TOTAL<br></th> </tr>'+
  '<tr class="secondln"> <td title="Force"><img src="images/UI/abilities/force.png" class="staticon">FOR<br></td> <td>'+bForce+'</td> <td>'+raceXForce+'</td> <td>'+classeXForce+'</td> <td></td> <td>'+totalForce+'</td> </tr>'+
  '<tr class="thirdln"> <td title="Puissance Magique"><img src="images/UI/abilities/mag.png" class="staticon">MAG<br></td> <td>'+bMag+'</td> <td>'+raceXMag+'</td> <td>'+classeXMag+'</td> <td></td> <td>'+totalMag+'</td> </tr>'+
  '<tr class="secondln"> <td title="Charisme"><img src="images/UI/abilities/cha.png" class="staticon">CHAR</td> <td>'+bChar+'</td> <td>'+raceXChar+'</td> <td>'+classeXChar+'</td> <td></td> <td>'+totalChar+'</td> </tr>'+
  '<tr class="thirdln"> <td title="Agilité"><img src="images/UI/abilities/agi.png" class="staticon">AGI</td> <td>'+bAgi+'</td> <td>'+raceXAgi+'</td> <td>'+classeXAgi+'</td> <td></td> <td>'+totalAgi+'</td> </tr>'+
  '<tr class="secondln"> <td title="Dexterité"><img src="images/UI/abilities/dex.png" class="staticon">DEX</td> <td>'+bDex+'</td> <td>'+raceXDex+'</td> <td>X</td> <td></td> <td>'+totalDex+'</td> </tr>'+
  '<tr class="thirdln"> <td title="Intelligence"><img src="images/UI/abilities/int.png" class="staticon">INT</td> <td>'+bInt+'</td> <td>'+raceXInt+'</td> <td>X</td> <td></td> <td>'+totalInt+'</td> </tr>'+ '</table>'
);
