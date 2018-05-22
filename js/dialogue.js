function dialogue(person){
  $('#dialogWindow').css('bottom','0');
  $('.dial_me').remove();
  var justStartedTalking = 1;
  if (person == "Guarde_MerryvalePsud"){
    let textHalte1 = "\"Halte, "+localStorage.race+" ! Il y a taxe! Tu payer ou tu partir.\"";
    let textPortesFermees1 = "\"Tu être pas du coin ? Oui, maintenant, portes de la ville sont fermées.\"";
    let textTopo1 = "<i>*il crache de l'argile au sol*</i>&nbsp;&nbsp; \"En ce moment, beaucoup marauds. Surtout à la porte Nord, de l'autre côté. De ce côté, ça va. Montagnes de la Bruisse empêchent marauds Nord de passer Sud. <br>Et au Soufflant, bandits volent leurs propres affaires !<i>*il ricane puis se reprend*</i><br>Et horde invisible abîmer la ville, donc ici nous guardons, tu vois?\"";
    let textPrix = "\"80 pièces d'or.<br>Attention, une fois toi rentré en ville, jamais ressortir par cette porte.\"";
    //
    let dialQuit1 = "<a id='dialQuit' class='dial_me'>Ca sent l'embrouille ici, je m'en vais.</a>";
    let dialQuit2 = "<a id='dialQuit' class='dial_me'>Tant pis pour moi alors ! Bonne journée à vous, c'était un agréable brin de causette !</a>";
    let dialQuit3 = "<a id='dialQuit' class='dial_me'>AH ! Ca rentre pas vraiment dans mon budget, je reviendrai alors !</a>";
    let dialHistoire_AskWhyPeage1 = "<a id='dialHistoire_AskWhyPeage' class='dial_me'>Une taxe pour rentrer en ville ? Mais qu'est-ce-que c'est que cette arnaque ?</a>";
    let dialHistoire_AskWhatsHappening1 = "<a id='dialHistoire_AskWhatsHappening' class='dial_me'>Ah c'est donc récent ! Mais quel intérêt à part faire fuir les visiteurs ?</a>";
    let dialHistoire_LaQuoi1 = "<a id='dialHistoire_LaQuoi' class='dial_me'>La QUOI invisible ?</a>";
    let dialAskAboutTax1 = "<a id='dialAskAboutTax' class='dial_me'>Une taxe ? On parle de combien ?</a>";
    let dialAskAboutTax2 = "<a id='dialAskAboutTax' class='dial_me'>J'ai cru comprendre oui ! Et la taxe est à combien ?</a>";
    let dialAskAboutTax3 = "<a id='dialAskAboutTax' class='dial_me'>Dur dur quoi. Je dois payer combien pour passer et éviter de me refaire cracher dessus ?</a>";
    let dialPay1 = "<a id='dialPay' class='dial_me'>Pas de souc' ! J'ai toujours un peu de feraille sur moi. <i>(donner 80 pièces d'or)</i></a>";
    if (justStartedTalking == 1){
      $('#Dialog_TextBubble').html(textHalte1);
      $('#Dialog_TextLines').append(dialHistoire_AskWhyPeage1+dialAskAboutTax1+dialQuit1);
    }
    $(document).on('click', '.dial_me', function(){ $('.dial_me').remove(); });
    $(document).on('click', '#dialQuit', function(){closeDialog();});
    $(document).on('click', '#dialHistoire_AskWhyPeage', function(){
      $('#Dialog_TextBubble').html(textPortesFermees1);
      $('#Dialog_TextLines').append(dialHistoire_AskWhatsHappening1+dialAskAboutTax2+dialQuit2);
    });
    $(document).on('click', '#dialHistoire_AskWhatsHappening', function(){
      $('#Dialog_TextBubble').html(textTopo1);
      $('#Dialog_TextLines').append(dialHistoire_LaQuoi1+dialAskAboutTax3+dialQuit2);
    });
    $(document).on('click', '#dialAskAboutTax', function(){
      $('#Dialog_TextBubble').html(textPrix);
      $('#Dialog_TextLines').append(dialPay1+dialQuit3);
    });
  }
}
function closeDialog(){
  $('#dialogWindow').css('bottom','-100%');
}
