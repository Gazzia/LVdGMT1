function inspect(){
  var insPage = localStorage.numpage;
  $('.dialogIcon').html(iconLoupe);
  $('.dialogButton').hide();
  dialogColor('red');
  if (insPage==2){
    $("#dialogTitle").html("Panorama");
    $("#dialogImage").css("background-image", "url(images/vertical/ext/soufflant.png)");
    $("#dialogText").html("L'immense plaine du Soufflant est une formidable création de la nature. La majesté de sa superficie est à couper le souffle. Vous voyez au Nord s'élever la chaîne montagneuse de la Bruisse, frontière naturelle du Soufflant.<br>C'est là que vous vous dirigez : la ville de Merryvale, et son marché reconnu dans toute la région, plantée au coeur d'une faille naturelle qui traverse la montagne.<br><br>Autour de vous, le chemin, bordé d'herbe et de fleurs roses, descend en pente douce jusqu'au coteau suivant. Le panorama est doux -plutôt redondant en fait-, mais quelques rares émergences boisées accordent à l'oeil un peu de distraction.");
    $('.dialogButton.nb1').html('Continuer').attr('onclick','closeDialog()').show();
  }
  if (insPage==2.1){
    $("#dialogTitle").html("Ombrage");
    if (localStorage.inv_arme_Branche == 0) {
      $("#dialogText").html("Le petit bois n'est pas bien dense, mais la fraîcheur de l'ombre des arbres vous est tout de même d'un grand secours. Vous souriez à l'odeur des feuilles de céremble, qui cet automne tomberont en tourbillons dans l'herbe claire.<br><br>Dans une clairière, vous apercevez à terre une belle branche qui pourrait vous servir d'arme rudimentaire.<br>Voulez-vous la prendre ?");
      $('.dialogButton.nb1').html('Prendre').attr('onclick','foundItem("Branche")').show();
      $('.dialogButton.nb2').show().html('Partir').attr('onclick','closeDialog()');
    }
    if (localStorage.inv_arme_Branche == 1) {
      $("#dialogText").html("Vous inspectez des yeux le sol, en quête d'une quelconque trouvaille fantastique pour aller avec la branche trouvée ici précédemment, mais non. De l'herbe, des feuilles, des brindilles.");
      $('.dialogButton.nb1').show().html('Partir').attr('onclick','closeDialog()');
    }
  }
  if (insPage==2.11){
    $("#dialogTitle").html("Larcin");
    $("#dialogImage").css("background-image", "url(images/vertical/ext/riverbourse.png)");
    if (localStorage.tookRiverGold == 0) {
      $("#dialogText").html("Sur la rive en face, vous apercevez un petit tas de vêtements sur lequel est attachée une bourse.<BR>Le courant est faible, et l'eau peu profonde (mais divinement fraîche !)<br>Personne en vue.");
      $('.dialogButton.nb1').html('Traverser et voler la bourse').attr('onclick','foundGold(25, "tookRiverGold");').show();
      $('.dialogButton.nb2').html('Partir l\'âme légère').attr('onclick','closeDialog()').show();
    }
    if (localStorage.tookRiverGold == 1) {
      $("#dialogText").html("Vous avez déjà pris l'or de la bourse, en face. Cela ne vous empêche pas de retraverser tout de même la rivière dans l'idée de vous rafraîchir un peu.");
      $('.dialogButton.nb1').html('Ok').attr('onclick','closeDialog()').show();
    }
  }
  if (insPage==2.2){
    $("#dialogTitle").html("Devant la masure");
    $("#dialogText").html("A vos pieds, des morceaux de bois déchiquetés et.. mordillés?<br>Devant vous, l'ombre imposante du bâtiment.<br>Derrière vous, la pente de la colline qui mêne au chemin.");
    $('.dialogButton.nb1').html('Ok').attr('onclick','closeDialog()').show();
  }
  if (insPage==2.211){
    if (localStorage.tookCorpseGold == 0) {
      $("#dialogTitle").html("Un éclat couleur sang");
      $("#dialogText").html("Pour une raison qui ne regarde que vous, vous avez décidé de vous approcher du cadavre. La chance vous sourit ! L'homme portait une sacoche d'or à sa ceinture !");
      $('.dialogButton.nb1').html('Prendre').attr('onclick','foundGold(50, "tookCorpseGold")').show();
    }
    if (localStorage.tookCorpseGold == 1) {
      setSound("UI", "fleshSigh");
      $("#dialogTitle").html("Glauque..");
      $("#dialogText").html("Vous entrefouillez les tripes et boyaux à pleine mains en quête d'autres trésors dorés, mais non. Vous êtes immonde. Sortez donc dehors.");
      $('.dialogButton.nb1').html('Ok..').attr('onclick','closeDialog()').show();
    }
  }
  if (insPage==5.1){
    $("#dialogText").html("La ville apparaît encore plus belle que vous ne l'imaginiez !<br>Autour de vous, trois rues s'encastrent, claires et calmes, entre les bâtiments.. Cette dernière est enfoncée entre les deux falaises, immenses brise-vents de pierre blanche striée d'ardoise. Contre la falaise Est repose, sur une corniche à mi-hauteur, un très grand bâtiment, qui doit être l'hôtel de ville.");
    $('.dialogButton.nb1').html('Ok').attr('onclick','closeDialog()').show();
  }
  if (insPage==5.2){
    $("#dialogText").html("La rue claire est large par rapport aux autres rues. Des tonnelets sont empilés à côté de l'embouchure de la ruelle.");
    $('.dialogButton.nb1').html('Ok').attr('onclick','closeDialog()').show();
  }
  if (insPage==6.1){
    $("#dialogText").html("La rue de la clef est un long couloir de mur, d'angles, de tonneaux oubliés ça et là. Une ambiance mystérieuse règne, de par la semi-obscurité dûe à la hauteur des bâtiments, et par ces chants continus qui flottent dans la rue, émanant de la grande porte. Au delà de tout ça, la rue est propre et des plantes en pot bordent les fenêtres.");
    $('.dialogButton.nb1').html('Ok').attr('onclick','closeDialog()').show();
  }
  if (insPage==6.11){
    $("#dialogText").html("Le petit hall n'est pas très grand, et serait complêtement terne si il n'y avait ces quelques fleurs sur le guéridon, au centre. C'est un temple, après tout !");
    $('.dialogButton.nb1').html('C\'est vrai').attr('onclick','closeDialog()').show();
  }
  openDialog();
}
