function talk(dial_Said){
  localStorage.dial_Said = dial_Said;
  $(".dialAll").hide();
  if (localStorage.dial_Said == 0){$(".dialSub0, #dialQuit").show();}
  if (localStorage.dial_Said != 0){$(".dialSub"+localStorage.dial_Said+".dialShown, #dialRetour, #dialQuit").show();}
  if (localStorage.numpage == 3.1){
    $("#dialA").html("On ne m'avait parlé ni de mur ni de péage pour rentrer dans la ville. [Histoire]").addClass("dialShown");
      $("#dialA1").html("Qu'est-ce qu'il se passe en ce moment ? [Histoire]").addClass("dialShown");
        $("#dialA1A").html("La quoi invisible ? [Histoire]").addClass("dialShown");
    $("#dialB").html("Une taxe ? On parle de combien ?").addClass("dialShown");
      $("#dialB1").html("Très bien.. <i>(donner 80 pièces d'or)</i>").addClass("dialShown");
        $("#dialB1A").html("[Entrer à Merryvale]").addClass("dialShown");
      $("#dialB2").html("<b>[Charisme]</b> *Supplier*").addClass("dialShown");
        $("#dialB2A").html("[Entrer à Merryvale]").addClass("dialShown");
    $("#dialRetour").html("[Retour]").addClass("dialShown");
    if (localStorage.classe != "Eloquent" || localStorage.failedToSeduceGuard == 1) {
      $("#dialB2").addClass("dialNope").attr('onclick','');
    }
    if (localStorage.dial_Said == '0'){
      $("#histoire").html("\"Halte, "+localStorage.race+" ! Il y a taxe! Tu payer ou tu partir.\"");
    }
    if (localStorage.dial_Said == 'A'){
      $("#histoire").html("\"Tu être pas du coin ? Oui, maintenant, portes de la ville sont fermées.\"");
    }
    if (localStorage.dial_Said == 'A1'){
      $("#histoire").html("<i>*il crache de l'argile au sol*</i>&nbsp;&nbsp; \"Ouais. En ce moment, beaucoup marauds. Ça grouille.. Surtout à la porte Nord, de l'autre côté ! De ce côté, ça va. Montagnes de la Bruisse empêchent marauds Nord de passer Sud. <br>Et au Soufflant, bandits volent leurs propres affaires !<i>*il ricane puis se reprend*</i><br>Et horde invisible abîmer la ville, donc ici nous guardons, tu vois?\"");
    }
    if (localStorage.dial_Said == 'A1A'){
      $("#histoire").html("\"Imagine maisons pillées, femmes violées, ville saccagée.. Et nous pas voir pour arrêter !<br>Salauds passés y'a un mois, donc ville tranquille et calme, mais nous méfiants, méfiants..<br>Ville besoin d'argent pour repartir.<i>*il se redresse d'un coup, comme si il venait de se souvenir de sa tâche*</i> Toi devoir payer pour rentrer.\"");
    }
    if (localStorage.dial_Said == 'B'){
      $("#histoire").html("\"80 pièces d'or.<br>Attention, une fois toi rentré en ville, jamais ressortir par cette porte.\"");
      localStorage.askGuardAboutTax=1;
    }
    if (localStorage.dial_Said == 'B1'){
      if (localStorage.plGold < 80){
        $("#histoire").html("\"Tu as pas 80 pièces d'or, donc tu peux pas entrer.\"");
        $("#dialB1A").hide();
      } else {
        localStorage.plGold -= 80;
        $("#histoire").html("\"Oui, tu peux rentrer. J'ouvre.\"");
        $("#dialRetour, #dialQuit").hide();
      }
    }
    if (localStorage.dial_Said == 'B1A'){
      localStorage.numpage = 4;
      window.location = "Histoire.html";
    }
    if (localStorage.dial_Said == 'B2' && localStorage.failedToSeduceGuard == 0){
      var oddseduceguard = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      if (oddseduceguard == 1){
        $("#histoire").html("\"Passes pour 50 pièces d'or, pour avoir paix ! Si tu as pas 50, donne moi ce que tu as. Ca va ?\"<br><i>(Vous avez réussi à séduire le garde)</i>");
        $("#dialRetour, #dialQuit").hide();
      } else {
        localStorage.plGold -= 80;
        $("#histoire").html("\"80 pièces d'or. Pas moins.\"<br><i>(Vous n'avez pas réussi à séduire le garde)</i>");
        $("#dialB2A").hide();
        localStorage.failedToSeduceGuard=1;
      }
    }
    if (localStorage.dial_Said == 'B2A'){
      if (localStorage.plGold > 50) {localStorage.plGold -= 50;}
    	if (localStorage.plGold <= 50) {localStorage.plGold = 0;}
    	window.location = "4 Checkpoint.html"
    }
  }
  if (localStorage.numpage == 5.11){
    $("#dialA").html("Je viens d'arriver. Je ne connais pas la ville").addClass("dialShown");
    $("#dialB").html("L'accueil est agréable par ici.").addClass("dialShown");
      $("#dialA1").html("Les bandits et la horde invisible, c'est ça ?").addClass("dialShown");
    if (localStorage.dial_Said == '0' && localStorage.talked_guy1==0){
      $("#histoire").html("<i>L'Angulain vous fixe, appuyé contre le mur</i><br>\"Je vous ai jamais vu par ici..\"");
    }
    if (localStorage.dial_Said == '0' && localStorage.talked_guy1==1){
      var oddguy1random = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      if (oddguy1random == 1){$("#histoire").html("\"Tu me fais de l'ombre.\"");}
      if (oddguy1random == 2){$("#histoire").html("\"J'étais plutôt tranquille avant que tu ne me parles.\"");}
      if (oddguy1random == 3){$("#histoire").html("\"Arrêtes de me dévisager.\"");}
      if (oddguy1random == 4){$("#histoire").html("\"Laisses-moi en paix.\"");}
      if (oddguy1random == 5){$("#histoire").html("\"Vas jouer ailleurs.\"");}
      $(".dialAll").hide();$("#dialQuit").show();
    }
    if (localStorage.dial_Said == 'A'){
      $("#histoire").html("\"Nouveau hein ? T'arrives pas au bon moment.\"");
    }
    if (localStorage.dial_Said == 'B'){
      $("#histoire").html("\"Toute la ville est un peu sur les nerfs. Tu arrives pas au bon moment.\"");
      $("#dialA1").show();
    }
    if (localStorage.dial_Said == 'A1'){
      $("#histoire").html("\"Ouais exact, on t'as fait le topo. La conséquence de tout ça est que le marché est presque désert : les marchands se chient beaucoup trop dessus pour venir jusqu'ici ; les boutiques sont presques vides faute d'approvisionnement, et tout le monde se méfie de tout le monde, alors fais gaffe à toi.\"");
      $(".dialAll").hide();$("#dialQuit").show();
      localStorage.talked_guy1=1;
    }
  }
}
function quit(){
  if (localStorage.numpage == 3.1){localStorage.numpage=3;window.location="Histoire.html";}
  if (localStorage.numpage == 5.11){localStorage.numpage=5.1;window.location="Histoire.html";}
}
