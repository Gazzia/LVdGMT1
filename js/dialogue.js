function dialogue(person){
  $('#dialogueWindow').css('bottom','0');
  $('.dial_me').remove();
  var justStartedTalking = 1;
  if (person == "Guarde_MerryvalePsud"){
    let textHalte1 = "\"Halte, "+localStorage.race+" ! Il y a taxe! Tu payer ou tu partir.\"";
    let textPortesFermees1 = "\"Tu être pas du coin ? Oui, maintenant, portes de la ville sont fermées.\"";
    let textTopo1 = "<i>*il crache de l'argile au sol*</i>&nbsp;&nbsp; \"En ce moment, beaucoup marauds. C'est ce que l'Assis a dit. <br>Donc ici nous guardons, tu comprends?\"";
    let textPrix = "\"80 pièces d'or.<br>Attention, une fois toi rentré en ville, pas ressortir par cette porte. Nuage de craie va pas tarder à arriver.\"";
    let textChaleur = "\"Chaleur dérange pas. Fait durcir l'Argile.\"";
    let textPasVitalisé = "\"Golems de Sang faibles. Peuvent être tués par l'épée et vieillir. Golems d'Argile durs.\"";
    let textMyChoice = "\"Mon choix, oui.\"";
    let textNoBandits = "\"Pas mon problème. On dit que je dois garder ici, alors je garde ici. Mon travail c'est garder ici.\"";
    let textAssis = "\"Celui qui dirige l'Assise de ville. Donc Assis dirige la ville.\"";
    let textElection = "\"Elu par grandes Familles de la ville. Celles qui ont du pouvoir.\"";
    let textCraie = "\"Gros nuage poussière de craie qui arrive de Grisval. Pas rester ici avec tes poumons "+localStorage.race+", tu vas étouffer.\"";
    let textChangeSubject = "\"Si tu veux, "+localStorage.race+".\"";
    //
    let dialQuit1 = "<a id='dialQuit' class='dial_me'>Ca sent l'embrouille ici, je m'en vais.</a>";
    let dialQuit2 = "<a id='dialQuit' class='dial_me'>Tant pis pour moi alors ! Bonne journée à vous, c'était un agréable brin de causette !</a>";
    let dialQuit3 = "<a id='dialQuit' class='dial_me'>AH ! Ca rentre pas vraiment dans mon budget, je reviendrai alors !</a>";
    let dialQuit4 = "<a id='dialQuit' class='dial_me'>Je dois y aller.</a>";
    let dialQuit5 = "<a id='dialQuit' class='dial_me'>J'ai encore quelques petites choses à faire dans le Soufflant mais merci !</a>";
    let dialQuit6 = "<a id='dialQuit' class='dial_me'>Je n'ai vraiment pas assez d'argent ! Je reviendrai - j'éspère.</a>";
    let dialQuit7 = "<a id='dialQuit' class='dial_me'>En fait je n'ai pas de question. Je reviendrai.</a>";
    let dialHistoire_AskWhyPeage1 = "<a id='dialHistoire_AskWhyPeage' class='dial_me'>Une taxe pour rentrer en ville ? Mais qu'est-ce-que c'est que cette arnaque ?</a>";
    let dialHistoire_AskWhyPeage2 = "<a id='dialHistoire_AskWhyPeage' class='dial_me'>Et donc vous dites qu'il y a une taxe pour rentrer en ville ? Pourquoi ?</a>";
    let dialHistoire_AskAboutChaleur1 = "<a id='dialHistoire_AskAboutChaleur' class='dial_me'>Vous devez avoir chaud là-dessous !</a>";
    let dialHistoire_AskAboutChaleur2 = "<a id='dialHistoire_AskAboutChaleur' class='dial_me'>Vous n'avez pas trop chaud là-dessous ?</a>";
    let dialHistoire_VousEtesArgile = "<a id='dialHistoire_VousEtesArgile' class='dial_me'>Un Golem d'Argile ! Vous êtes le premier que je rencontre, tous les autres avaient été vitalisés !</a>";
    let dialHistoire_YourChoice = "<a id='dialHistoire_YourChoice' class='dial_me'>C'est un choix.</a>";
    let dialHistoire_AskWhatsHappening1 = "<a id='dialHistoire_AskWhatsHappening' class='dial_me'>C'est donc récent ! Mais quel intérêt à part faire fuir les visiteurs ?</a>";
    let dialHistoire_AskWhatsHappening2 = "<a id='dialHistoire_AskWhatsHappening' class='dial_me'>Et pourquoi doit-on payer une taxe ?</a>";
    let dialHistoire_AskWhatsHappening3 = "<a id='dialHistoire_AskWhatsHappening' class='dial_me'>Pourquoi doit-on payer une taxe ?</a>";
    if(localStorage.combatWon_RatSoufflant == 0){
      dialHistoire_NoBandits1 = "<a id='dialHistoire_NoBandits' class='dial_me'>Je n'ai pas croisé de bandits sur le chemin.</a>";
      dialHistoire_NoBandits2 = "<a id='dialHistoire_NoBandits' class='dial_me'>En tout cas je n'ai pas croisé de bandits sur le chemin !</a>";
    }
    if(localStorage.combatWon_RatSoufflant == "1"){
      dialHistoire_NoBandits1 = "<a id='dialHistoire_NoBandits' class='dial_me'>Je n'ai pas croisé de bandits sur le chemin. Juste un rat de la taille d'un petit chien que j'ai dérangé en train de manger quelqu'un.</a>";
      dialHistoire_NoBandits2 = "<a id='dialHistoire_NoBandits' class='dial_me'>En tout cas je n'ai pas croisé de bandits sur le chemin ! Juste un rat de la taille d'un petit chien que j'ai dérangé en train de manger quelqu'un.</a>";
    }
    let dialAskAboutAssis1 = "<a id='dialAskAboutAssis' class='dial_me'>L'Assis ?</a>";
    let dialAskAboutAssis2 = "<a id='dialAskAboutAssis' class='dial_me'>Vous parliez d'un Assis ? Qu'est-ce que c'est ?</a>";
    let dialAskAboutVote1 = "<a id='dialAskAboutVote' class='dial_me'>Il est élu ?</a>";
    let dialAskAboutTax1 = "<a id='dialAskAboutTax' class='dial_me'>Une taxe ? On parle de combien ?</a>";
    let dialAskAboutTax2 = "<a id='dialAskAboutTax' class='dial_me'>J'ai cru comprendre oui.. Et la taxe est à combien ?</a>";
    let dialAskAboutTax3 = "<a id='dialAskAboutTax' class='dial_me'>Dur dur quoi. Je dois payer combien pour passer et éviter de me refaire cracher dessus ?</a>";
    let dialAskAboutTax4 = "<a id='dialAskAboutTax' class='dial_me'>A combien est la taxe dont vous parliez ?</a>";
    let dialAskAboutCraie1 = "<a id='dialAskAboutCraie' class='dial_me'>Un nuage de craie ?</a>";
    let dialPay1 = "<a id='dialPay' class='dial_me'>Pas de souc' ! J'ai toujours un peu de feraille sur moi. <i>(donner 80 pièces d'or)</i></a>";
    let dialPay2 = "<a id='dialPay' class='dial_me'>Ok.. Je vais payer les 80 pièces.</i></a>";
    let dialChangeSubject1 = "<a id='dialChangeSubject' class='dial_me'>Oh.. Hmmm, j'avais une autre question.</i></a>";
    if (justStartedTalking == 1){
      $('#Dialogue_TextBubble').html(textHalte1);
      $('#Dialogue_TextLines').append(dialHistoire_AskWhyPeage1+dialAskAboutTax1+dialHistoire_AskAboutChaleur1+dialQuit1);
    }
    $(document).on('click', '.dial_me', function(){ $('.dial_me').remove(); });
    $(document).on('click', '#dialQuit', function(){closeDialogue();});
    $(document).on('click', '#dialHistoire_AskWhyPeage', function(){
      $('#Dialogue_TextBubble').html(textPortesFermees1);
      $('#Dialogue_TextLines').append(dialHistoire_AskWhatsHappening1+dialAskAboutTax2+dialQuit2);
    });
    $(document).on('click', '#dialHistoire_AskWhatsHappening', function(){
      $('#Dialogue_TextBubble').html(textTopo1);
      $('#Dialogue_TextLines').append(dialHistoire_NoBandits1+dialAskAboutAssis1+dialAskAboutTax3+dialHistoire_AskAboutChaleur1+dialQuit2);
    });
    $(document).on('click', '#dialAskAboutTax', function(){
      $('#Dialogue_TextBubble').html(textPrix);
      $('#Dialogue_TextLines').append(dialAskAboutCraie1+dialHistoire_AskWhatsHappening2);
      if (localStorage.plGold >= 80){$('#Dialogue_TextLines').append(dialPay1+dialQuit5);}
      if (localStorage.plGold < 80){$('#Dialogue_TextLines').append(dialQuit3);}
    });
    $(document).on('click', '#dialHistoire_AskAboutChaleur', function(){
      $('#Dialogue_TextBubble').html(textChaleur);
      $('#Dialogue_TextLines').append(dialHistoire_VousEtesArgile+dialQuit4);
    });
    $(document).on('click', '#dialHistoire_VousEtesArgile', function(){
      $('#Dialogue_TextBubble').html(textPasVitalisé);
      $('#Dialogue_TextLines').append(dialHistoire_YourChoice+dialQuit4);
    });
    $(document).on('click', '#dialHistoire_YourChoice', function(){
      $('#Dialogue_TextBubble').html(textMyChoice);
      $('#Dialogue_TextLines').append(dialHistoire_AskWhyPeage2+dialAskAboutTax4+dialQuit4);
    });
    $(document).on('click', '#dialHistoire_NoBandits', function(){
      $('#Dialogue_TextBubble').html(textNoBandits);
      $('#Dialogue_TextLines').append(dialAskAboutAssis2+dialAskAboutTax4+dialQuit4);
    });
    $(document).on('click', '#dialAskAboutAssis', function(){
      $('#Dialogue_TextBubble').html(textAssis);
      $('#Dialogue_TextLines').append(dialAskAboutVote1+dialQuit4);
    });
    $(document).on('click', '#dialAskAboutVote', function(){
      $('#Dialogue_TextBubble').html(textElection);
      $('#Dialogue_TextLines').append(dialHistoire_NoBandits2+dialAskAboutTax4+dialQuit4);
    });
    $(document).on('click', '#dialAskAboutCraie', function(){
      $('#Dialogue_TextBubble').html(textCraie);
      $('#Dialogue_TextLines').append(dialChangeSubject1);
      if (localStorage.plGold >= 80){$('#Dialogue_TextLines').append(dialPay2+dialQuit5);}
      if (localStorage.plGold < 80){$('#Dialogue_TextLines').append(dialQuit6);}
    });
    $(document).on('click', '#dialChangeSubject', function(){
      $('#Dialogue_TextBubble').html(textChangeSubject);
      $('#Dialogue_TextLines').append(dialHistoire_AskWhatsHappening3+dialAskAboutTax4+dialHistoire_AskAboutChaleur2+dialQuit7);
    });
    $(document).on('click', '#dialPay', function(){
      localStorage.plGold = Number(localStorage.plGold) - 80;
      localStorage.numpage=4; refAll();
      closeDialogue();
    });
  }
}
function closeDialogue(){
  $('#dialogueWindow').css('bottom','-100%');
}
