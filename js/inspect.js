function inspect(thing) {
  var région = localStorage.région;
  var milieu = localStorage.milieu;
  var zone = localStorage.zone;
  $('#dialog .icon').html(iconLoupe);
  $("#dialog .image").css("background-image", "unset");
  $('#dialog a').hide();
  dialogColor('red');
  if (région == "Soufflant") {
    if (zone == "Embranchement") {
      $("#dialog .title").html("Panorama");
      $("#dialog .image").css("background-image", "url(images/vertical/ext/soufflant.png)");
      $("#dialog .text").html("L'immense plaine du Soufflant est une formidable création de la nature. La majesté de sa superficie est à couper le souffle. Vous voyez au Nord s'élever la chaîne montagneuse de la Bruisse, frontière naturelle du Soufflant.<br>C'est là que vous vous dirigez : la ville de Merryvale, et son marché reconnu dans toute la région, plantée au coeur d'une faille naturelle qui traverse la montagne.<br><br>Autour de vous, le chemin, bordé d'herbe et de fleurs roses, descend en pente douce jusqu'au coteau suivant. Le panorama est doux -plutôt redondant en fait-, mais quelques rares émergences boisées accordent à l'oeil un peu de distraction.");
      $('#dialog a.nb1').html('Continuer').attr('onclick', 'closeDialog()').show();
    }
    if (zone == "Bois") {
      if (thing == 'Arbres') {
        $("#dialog .title").html("Ombrage");
        $("#dialog .image").css("background-image", "url(images/vertical/ext/forettrees.png)");
        $("#dialog .text").html("Le petit bois n'est pas bien dense, mais la fraîcheur de l'ombre des arbres vous est tout de même d'un grand secours. Vous souriez à l'odeur des feuilles de céremble, qui cet automne tomberont en tourbillons dans l'herbe claire.");
        $('#dialog a.nb1').html('Sourire').attr('onclick', 'closeDialog()').show();
      }
      if (thing == 'Herbe') {
        $("#dialog .title").html("Herbe");
        if (localStorage.inv_arme_Branche == 0) {
          $("#dialog .image").css("background-image", "url(images/vertical/ext/forestgroundBranch.png)");
          $("#dialog .text").html("Vous apercevez à terre une belle branche qui pourrait vous servir d'arme rudimentaire.<br>Voulez-vous la prendre ?");
          $('#dialog a.nb1').html('Prendre').attr('onclick', 'foundItem("Branche")').show();
          $('#dialog a.nb2').show().html('Partir').attr('onclick', 'closeDialog()');
        }
        if (localStorage.inv_arme_Branche == 1) {
          $("#dialog .image").css("background-image", "url(images/vertical/ext/forestground.png)");
          $("#dialog .text").html("Vous inspectez des yeux le sol, en quête d'une quelconque trouvaille fantastique pour aller avec la branche trouvée ici précédemment, mais non. De l'herbe, des feuilles, des brindilles.");
          $('#dialog a.nb1').show().html('Partir').attr('onclick', 'closeDialog()');
        }
      }
    }
    if (zone == "Rivière") {
      if (thing == 'Eau') {
        $("#dialog .title").html("Dans l'onde fraîche");
        $("#dialog .image").css("background-image", "url(images/vertical/ext/rivewater.png)");
        $("#dialog .text").html("Le petit bras d'eau est plein de vie -et plein d'eau ! L'endroit est très tranquille et serait propice à une petite halte.");
        $('#dialog a.nb1').html('Faire une petite halte').attr('onclick', 'makeHalt()').show();
        $('#dialog a.nb2').html('Pas le temps !').attr('onclick', 'closeDialog()').show();
      }
      if (thing == 'RiveOpp') {
        $("#dialog .title").html("Larcin");
        $("#dialog .image").css("background-image", "url(images/vertical/ext/riverbourse.png)");
        if (localStorage.tookRiverGold == 0) {
          $("#dialog .text").html("Sur la rive en face, vous apercevez un petit tas de vêtements sur lequel est attachée une bourse.<BR>Le courant est faible, et l'eau peu profonde (mais divinement fraîche !)<br>Personne en vue.");
          $('#dialog a.nb1').html('Traverser et voler la bourse').attr('onclick', 'foundGold(25, "tookRiverGold");').show();
          $('#dialog a.nb2').html('Partir l\'âme légère').attr('onclick', 'closeDialog()').show();
        }
        if (localStorage.tookRiverGold == 1) {
          $("#dialog .text").html("Vous avez déjà pris l'or de la bourse, en face. Cela ne vous empêche pas de retraverser tout de même la rivière dans l'idée de vous rafraîchir un peu.");
          $('#dialog a.nb1').html('Ok').attr('onclick', 'closeDialog()').show();
        }
      }
    }
    if (zone == "Cabane") {
      $("#dialog .title").html("Devant la masure");
      $("#dialog .text").html("Le bâtiment semble abandonné, comme si l'ancien propriétaire, trop las d'appliquer des réparations inefficaces, avait préféré partir. A vos pieds, des morceaux de bois déchiquetés et.. mordillés ?<br>On dirait des empreintes de dents, comme si un énorme rat s'était mis à ronger ces vieilles planches.");
      $('#dialog a.nb1').html('Ok').attr('onclick', 'closeDialog()').show();
    }
    if (zone == "Intérieur") {
      if (localStorage.tookCorpseGold == 0) {
        $("#dialog .title").html("Un éclat couleur sang");
        $("#dialog .text").html("Pour une raison qui ne regarde que vous, vous avez décidé de vous approcher du cadavre. La chance vous sourit ! Le cadavre était à-demi couché sur sa bourse d'or !");
        $('#dialog a.nb1').html('Prendre').attr('onclick', 'foundGold(50, "tookCorpseGold")').show();
      }
      if (localStorage.tookCorpseGold == 1) {
        setSound("UI", "fleshSigh");
        $("#dialog .title").html("Glauque..");
        $("#dialog .text").html("Vous entrefouillez les tripes et boyaux à pleine mains en quête d'autres trésors dorés, mais non. Vous êtes immonde. Sortez donc dehors.");
        $('#dialog a.nb1').html('Ok..').attr('onclick', 'closeDialog()').show();
      }
    }
    if (zone == "Fatras") {
      if (thing == 'Fatras') {
        if (localStorage.sawhole == 0) {
          $("#dialog .title").html("Rien d'intéressant..");
          $("#dialog .text").html("Au pied de la cabane, un bel assortiment de ruines siège, scientifiquement ficelé par de la toile d'araignée, et recouvert d'une fine couche de poussière : une vieille pelle prête à céder, un manche de pioche, des planches rompues, et des mues d'araignée.");
          $('#dialog a.nb1').html('Ok').attr('onclick', 'closeDialog()').show();
        }
        if (localStorage.sawhole == 1) {
          if (localStorage.inv_tool_Shovel == 0) {
            $("#dialog .title").html("Rien d'intéressant.. Quoique ?");
            $("#dialog .text").html("Au pied de la cabane, un bel assortiment de ruines siège, scientifiquement ficelé par de la toile d'araignée, et recouvert d'une fine couche de poussière : un manche de pioche, des planches rompues, et des mues d'araignée.<br> Vous voyez également une vieille pelle, qui pourra sûrement vous être utile.");
            $('#dialog a.nb1').html('Prendre').attr('onclick', 'foundItem("Pelle")').show();
            $('#dialog a.nb2').show().html('Partir').attr('onclick', 'closeDialog()');
          }
          if (localStorage.inv_tool_Shovel == 1) {
            $("#dialog .title").html("PLUS rien d'intéressant..");
            $("#dialog .text").html("Vous avez déjà pris une pelle en ruine, il n'y a aucune autre solution à vos problèmes ici.");
            $('#dialog a.nb1').html('Partir').attr('onclick', 'closeDialog()').show();
          }
        }
      }
      if (thing == 'Collines') {
        $("#dialog .title").html("Panorama");
        $("#dialog .text").html("Jusqu'à l'horizon, les collines sommeillent, rondes et baignées de soleil, comme un immense troupeau endormi.");
        $('#dialog a.nb1').html('Ok').attr('onclick', 'closeDialog()').show();
      }
    }
  }
  if (région == "Pouce") {
    if (zone == 5.1) {
      $("#dialog .text").html("La ville apparaît encore plus belle que vous ne l'imaginiez !<br>Autour de vous, trois rues s'encastrent, claires et calmes, entre les bâtiments.. Cette dernière est enfoncée entre les deux falaises, immenses brise-vents de pierre blanche striée d'ardoise. Contre la falaise Est repose, sur une corniche à mi-hauteur, un très grand bâtiment, qui doit être l'hôtel de ville.");
      $('#dialog a.nb1').html('Ok').attr('onclick', 'closeDialog()').show();
    }
    if (zone == 5.2) {
      $("#dialog .text").html("La rue claire est large par rapport aux autres rues. Des tonnelets sont empilés à côté de l'embouchure de la ruelle.");
      $('#dialog a.nb1').html('Ok').attr('onclick', 'closeDialog()').show();
    }
    if (zone == 6.1) {
      $("#dialog .text").html("La rue de la clef est un long couloir de mur, d'angles, de tonneaux oubliés ça et là. Une ambiance mystérieuse règne, de par la semi-obscurité dûe à la hauteur des bâtiments, et par ces chants continus qui flottent dans la rue, émanant de la grande porte. Au delà de tout ça, la rue est propre et des plantes en pot bordent les fenêtres.");
      $('#dialog a.nb1').html('Ok').attr('onclick', 'closeDialog()').show();
    }
    if (zone == 6.11) {
      $("#dialog .text").html("Le petit hall n'est pas très grand, et serait complêtement terne si il n'y avait ces quelques fleurs sur le guéridon, au centre. C'est un temple, après tout !");
      $('#dialog a.nb1').html('C\'est vrai').attr('onclick', 'closeDialog()').show();
    }
  }
  openDialog();
}
