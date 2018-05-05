function inspect(){
  var insPage = localStorage.numpage;
  $("#inspect").dialog({ resizable: false, show:'fade', hide:'fade', modal:true, draggable:false, height: "auto", dialogClass: 'classicDialog', closeOnEscape: false });
  if (insPage==2){
    $("#inspectText").html("Quand vous étiez tout jeunot avec vos amis, l'immense plaine du Soufflant était un terrain de jeu formidable. Vous rêviez de la traverser un jour par delà les collines jusqu'à Merryvale, la cité au coeur du vallon ; y découvrir son marché où l'on peut tout trouver, ainsi que son animation débordante...<br><br>Autour de vous, le chemin, bordé d'herbes et de bruyères jaunies par le soleil, descend en pente douce jusqu'au coteau suivant. Le panorama est doux -plutôt redondant en fait-, mais quelques rares émergences sylvatiques accordent à l'oeil un peu de distraction.");
    $("#inspect").dialog('option', 'buttons', { 'Ok': function(){ $(this).dialog('close');} });
  }
  if (insPage==2.1){
    if (localStorage.inv_arme_branche !== 1) {
      $("#inspectText").html("Le petit bois n'est pas bien dense, mais la fraîcheur de la cime rameuse des arbres vous est tout de même agréable. Vous souriez à l'odeur des fleurs de céremble, qui cet automne tomberont en tourbillons dans l'herbe claire.<br><br>Dans une clairière, vous apercevez à terre une belle branche qui pourrait vous servir d'arme rudimentaire.<br>Voulez-vous la prendre ?");
      $("#inspect").dialog('option', 'buttons', {
        'Prendre': function(){ foundItem("Branche");},
        'Partir': function(){ $(".ui-dialog-content").dialog('close');}
      });
    }
    if (localStorage.inv_arme_branche == 1) {
      $("#inspectText").html("Vous inspectez des yeux le sol, en quête d'une quelconque trouvaille fantastique pour aller avec la branche trouvée ici précédemment, mais non. De l'herbe, des feuilles, des brindilles.");
      $("#inspect").dialog('option', 'buttons', { 'Partir': function(){ $(this).dialog('close');} });
    }
  }
  if (insPage==2.11){
    if (localStorage.tookRiverGold == 0) {
      $("#inspectText").html("Sur la rive en face, vous apercevez un petit tas de vêtements sur laquelle est attachée une bourse.<BR>Le courant est faible, et l'eau peu profonde (divinement fraîche!).<br>Personne en vue.");
      $("#inspect").dialog('option', 'buttons', {
        'Traverser et voler la bourse': function(){ foundGold(25, "tookRiverGold");},
        'Partir l\'âme légère': function(){ $(this).dialog('close');}
      });
    }
    if (localStorage.tookRiverGold == 1) {
      $("#inspectText").html("Vous avez déjà pris l'or de la bourse, en face. Cela ne vous empêche pas de retraverser tout de même la rivière dans l'idée de vous rafraîchir un peu.");
      $("#inspect").dialog('option', 'buttons', {'Ok': function(){ $(this).dialog('close');}});
    }
  }
  if (insPage==2.2){
    $("#inspectText").html("A vos pieds, des morceaux de bois déchiquetés et.. mordillés?<br>Devant vous, l'ombre imposante du bâtiment.<br>Derrière vous, la pente de la colline qui mêne au chemin.");
    $("#inspect").dialog('option', 'buttons', { 'Ok': function(){ $(this).dialog('close');} });
  }
  if (insPage==5.1){
    $("#inspectText").html("La ville apparaît encore plus belle que vous ne l'imaginiez !<br>Autour de vous, trois rues s'encastrent, claires et calmes, entre les bâtiments.. Cette dernière est enfoncée entre les deux falaises, immenses brise-vents de pierre blanche striée d'ardoise. Contre la falaise Est repose, sur une corniche à mi-hauteur, un très grand bâtiment, qui doit être l'hôtel de ville.");
    $("#inspect").dialog('option', 'buttons', { 'Ok': function(){ $(this).dialog('close');} });
  }
  if (insPage==5.2){
    $("#inspectText").html("La rue claire est large par rapport aux autres rues. Des tonnelets sont empilés à côté de l'embouchure de la ruelle.");
    $("#inspect").dialog('option', 'buttons', { 'Ok': function(){ $(this).dialog('close');} });
  }
  if (insPage==6.1){
    $("#inspectText").html("La rue de la clef est un long couloir de mur, d'angles, de tonneaux oubliés ça et là. Une ambiance mystérieuse règne, de par la semi-obscurité dûe à la hauteur des bâtiments, et par ces chants continus qui flottent dans la rue, émanant de la grande porte. Au delà de tout ça, la rue est propre et des plantes en pot bordent les fenêtres.");
    $("#inspect").dialog('option', 'buttons', { 'Ok': function(){ $(this).dialog('close');} });
  }
  if (insPage==6.11){
    $("#inspectText").html("Le petit hall n'est pas très grand, et serait complêtement terne si il n'y avait ces quelques fleurs sur le guéridon, au centre. C'est un temple, après tout !");
    $("#inspect").dialog('option', 'buttons', { 'C\'est vrai': function(){ $(this).dialog('close');} });
  }
}
