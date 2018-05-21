/* IMPLEMENTATION DES OBJETS INDIVIDUELLEMENT DEPUIS ITEMSDATA.JS */
//ARMES
function refInv(){
if (localStorage.inv_arme_Branche==1) {addItem(Branche);}
if (localStorage.inv_arme_Baton==1) {addItem(Baton);}
//OUTILS
if (localStorage.inv_tool_Shovel==1) {addItem(Pelle);}
}
/* FONCTION D'AJOUT DES CASES DES OBJETS */
// function addItem(addedItem){
//   var itemID = localStorage.itemID;
//   if($("#invItem" + itemID).length == 0) {
// 		$("#InvTR_"+addedItem.Type).append('<div class="btnItem"><a id="invItem'+itemID+'" class="item" onclick="selItem(\''+addedItem.Short+'\');"></a></div>');
// 	  $("#invItem"+itemID).css('background-image','url(images/icons/'+addedItem.Icon+')');
//     if(itemID == 1){var invItem1 = addedItem; localStorage.invItem1 = JSON.stringify(addedItem);}
//     if(itemID == 2){var invItem2 = addedItem; localStorage.invItem2 = JSON.stringify(addedItem);}
//     if(itemID == 3){var invItem3 = addedItem; localStorage.invItem3 = JSON.stringify(addedItem);}
//     if(itemID == 4){var invItem4 = addedItem; localStorage.invItem4 = JSON.stringify(addedItem);}
// 	}
//   $('.vide').remove();
// }
function addItem(addedItem){
  if($("#invItem" + addedItem.Short).length == 0) {
		$("#InvTR_"+addedItem.Type).append('<div id="btnItem1" class="btnItem"><a id="invItem'+addedItem.Short+'" class="item" onclick="selItem(\''+addedItem.Short+'\');"></a></div>');
	  $("#invItem"+addedItem.Short).css('background-image','url(images/icons/'+addedItem.Icon+')');
	}
  $('.vide').remove();
}
$('.btnInv.openable').click(function(){
  invOpenTR((this.id).replace('invOpen_',''));
	$('.btnInv').removeClass('active');
	$('#'+this.id).addClass('active');
  //ouvre le tiroir d'items correspondant à l'ID du bouton sur lequel on vient de cliquer
});
// $(document).on("mouseover", ".item", function(){
//   var hoveredItem = this.id;
//   $('#InvBRPane').css('opacity','1');
//   $('#InvBRPane_Title').html(window[hoveredItem].Name);
//   $('#InvBRPane_Desc').html(window[hoveredItem].Desc);
//   $('#InvBRPane_Dmg').html(window[hoveredItem].StatShort);
//   $('#InvBRPane_Image').css('background-image','url(images/'+window[hoveredItem].Img+')');
// });
$(document).on("mouseover", ".EquippedIcon", function(){
  var hoveredItemType = (this.id).replace('EquippedIcon_','');
  var hoveredItem = localStorage['inv_selected_'+hoveredItemType];
  if (hoveredItem != null){
    $('#InvBRPane').css('opacity','1');
    $('#InvBRPane_Title').html(window[hoveredItem].Name);
    $('#InvBRPane_Desc').html(window[hoveredItem].Desc);
    $('#InvBRPane_Dmg').html(window[hoveredItem].StatShort);
    $('#InvBRPane_Image').css('background-image','url(images/'+window[hoveredItem].Img+')');
  }
});
$(document).on("mouseout", ".item, .EquippedIcon", function(){
  $('#InvBRPane').css('opacity','');
  $('#InvBRPane_Title').html('');
  $('#InvBRPane_Desc').html('');
  $('#InvBRPane_Dmg').html('');
  $('#InvBRPane_Pow').html('');
  $('#InvBRPane_Image').css('background-image','unset');
});
function invOpenTR(folder){
  $('.InvFolders').fadeOut(300);
  $('.vide').remove();
  setTimeout(function(){
    $('#InvTR_'+folder).fadeIn(300);
    if ( $('#InvTR_'+folder).children().length == 0 ) {
      $('#InvTR_'+folder).html('<span class="vide">Vide</span>');
    }
  },300);
}
function selItem(selectedItem){localStorage['inv_selected_'+(window[selectedItem].Type)] = window[selectedItem].Short;refSel(window[selectedItem].Type);}
function fullRefSel() {
  var armeSel = localStorage.inv_selected_arme;
  refSelApply(window[armeSel].Type, window[armeSel].Short, window[armeSel].Icon);
  var headSel = localStorage.inv_selected_head;
  refSelApply(window[headSel].Type, window[headSel].Short, window[headSel].Icon);
  var torseSel = localStorage.inv_selected_torse;
  refSelApply(window[torseSel].Type, window[torseSel].Short, window[torseSel].Icon);
  var legSel = localStorage.inv_selected_leg;
  refSelApply(window[legSel].Type, window[legSel].Short, window[legSel].Icon);
  var footSel = localStorage.inv_selected_foot;
  refSelApply(window[footSel].Type, window[footSel].Short, window[footSel].Icon);
}
function refSel(type) {
  var itemSel = localStorage['inv_selected_'+type];
  shakeSel(window[itemSel].Type);
  setTimeout(function(){
    refSelApply(window[itemSel].Type, window[itemSel].Short, window[itemSel].Icon);
  },300);
}
function refSelApply(selItemType, itemShort, itemIcon){
	$("#EquippedIcon_"+selItemType).css('background-image','url(images/icons/'+itemIcon+')')
}
function shakeSel(type){
  $("#EquippedIcon_"+type).css('transform','rotateY(90deg)');
  setTimeout(function(){
    $("#EquippedIcon_"+type).css('transform','rotateY(0deg)');
  },350);
}
