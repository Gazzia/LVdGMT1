$(document).keydown(function(e) {
  if(e.which == 27 && localStorage.menuOpen==0) {
    e.which = 0;
    localStorage.menuOpen=1;
    $("#menuui")
    .html(
      "<a class='menuBtnText' onclick='help()'>Aide et raccourcis</a>"+
      "<a class='menuBtnText' onclick='soundoptions()'>Options sonores</a>"+
      "<a class='menuBtnText' onclick='rusure()'>Recommencer le jeu</a>"
    )
    .attr("title","Menu");
    $("#menuui").dialog({
      modal: true,
      resizable: false,
      draggable:false,
      height: "auto",
      dialogClass: 'menuui',
      buttons: {
        "Fermer": function() {
          $(this).closest('.ui-dialog-content').dialog('close');
        }
      }
    });
  }
  if(e.which == 27 && localStorage.menuOpen==1) {
    localStorage.menuOpen=0;
    $(this).closest('.ui-dialog-content').dialog('close');
  }
  if(e.which == 112 && localStorage.inventoryOpen==0) {
    e.which = 0;
    window.location="Inv.html";
  }
  if(e.which == 112 && localStorage.inventoryOpen==1) {
    retourToPage();
  }
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
  }).html("<br><br><h3>Êtes vous-sûr ?</h2>");
}
