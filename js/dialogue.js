function dialogue(person) {
  bubble = '#dialogueWindow .mainblock .bubble';
  choix = '#dialogueWindow .mainblock .choix';
  choix_a = '#dialogueWindow .mainblock .choix a, #dialogueWindow .mainblock .choix br';
  choix_ico = '#dialogueWindow .mainblock .choix .icon';
  $('#dialogueWindow').css('bottom', '0');
  $(choix_a + "," + choix_ico).remove();
  var justStartedTalking = 1;
  if (person == "Guarde_MerryvalePsud") {
    let textHalte1 = "\"Halte, " + localStorage.race + " ! Il y a taxe! Tu payer ou tu partir.\"";
    let textPortesFermees1 = "\"Tu être pas du coin ? Oui, maintenant, portes de la ville sont fermées.\"";
    let textTopo1 = "<i>*il crache de l'argile au sol*</i>&nbsp;&nbsp; \"En ce moment, beaucoup marauds. C'est ce que l'Assis a dit. <br>Donc ici nous guardons, tu comprends?\"";
    let textPrix = "\"80 pièces d'or.<br>Attention, une fois toi rentré en ville, pas ressortir par cette porte. Nuage de craie va pas tarder à arriver.\"";
    let textChaleur = "\"Chaleur dérange pas. Fait durcir l'Argile.\"";
    let textPasVitalisé = "\"Golems de Sang faibles. Peuvent être tués par l'épée et vieillir. Golems d'Argile durs.\"";
    let textMyChoice = "\"Mon choix, oui.\"";
    let textNoBandits = "\"Pas mon problème. On dit que je dois garder ici, alors je garde ici. Mon travail c'est garder ici.\"";
    let textAssis = "\"Celui qui dirige l'Assise de ville. Donc Assis dirige la ville.\"";
    let textElection = "\"Elu par grandes Familles de la ville. Celles qui ont du pouvoir.\"";
    let textCraie = "\"Gros nuage poussière de craie qui arrive de Grisval. Pas rester ici avec tes poumons " + localStorage.race + ", tu vas étouffer.\"";
    let textChangeSubject = "\"Si tu veux, " + localStorage.race + ".\"";
    let textCharmingWin = "\"Je dois pas faire ça, " + localStorage.race + ".. Mais j'ai peine pour toi. Rentre mais te fais pas remarquer.\" (Persuasion réussie)";
    let textCharmingLoose = "\"Je peux pas faire ça, " + localStorage.race + ". Payes ou pars.\" (Persuasion échouée)";
    let textDésoPasDéso = "\"C'est comme ça.\"";
    //
    let dialQuit1 = "<a id='dialQuit'>Ca sent l'embrouille ici, je m'en vais.</a><div class='icon leave' title='Partir'></div><br>";
    let dialQuit2 = "<a id='dialQuit'>Tant pis pour moi alors ! Bonne journée à vous, c'était un agréable brin de causette !</a><div class='icon leave' title='Partir'></div><br>";
    let dialQuit3 = "<a id='dialQuit'>AH ! Ca rentre pas vraiment dans mon budget, je reviendrai alors !</a><div class='icon leave' title='Partir'></div><br>";
    let dialQuit4 = "<a id='dialQuit'>Je dois y aller.</a><div class='icon leave' title='Partir'></div><br>";
    let dialQuit5 = "<a id='dialQuit'>J'ai encore quelques petites choses à faire dans le Soufflant mais merci !</a><div class='icon leave' title='Partir'></div><br>";
    let dialQuit6 = "<a id='dialQuit'>Je n'ai vraiment pas assez d'argent ! Je reviendrai - j'éspère.</a><div class='icon leave' title='Partir'></div><br>";
    let dialQuit7 = "<a id='dialQuit'>En fait je n'ai pas de question. Je reviendrai.</a><div class='icon leave' title='Partir'></div><br>";
    let dialHistoire_AskWhyPeage1 = "<a id='dialHistoire_AskWhyPeage'>Une taxe pour rentrer en ville ? Mais qu'est-ce-que c'est que cette arnaque ?</a><br>";
    let dialHistoire_AskWhyPeage2 = "<a id='dialHistoire_AskWhyPeage'>Et donc vous dites qu'il y a une taxe pour rentrer en ville ? Pourquoi ?</a><br>";
    let dialHistoire_AskAboutChaleur1 = "<a id='dialHistoire_AskAboutChaleur'>Vous devez avoir chaud là-dessous !</a><br>";
    let dialHistoire_AskAboutChaleur2 = "<a id='dialHistoire_AskAboutChaleur'>Vous n'avez pas trop chaud là-dessous ?</a><br>";
    let dialHistoire_VousEtesArgile = "<a id='dialHistoire_VousEtesArgile'>Un Golem d'Argile ! Vous êtes le premier que je rencontre, tous les autres avaient été vitalisés !</a><br>";
    let dialHistoire_YourChoice = "<a id='dialHistoire_YourChoice'>C'est un choix.</a><br>";
    let dialHistoire_AskWhatsHappening1 = "<a id='dialHistoire_AskWhatsHappening'>C'est donc récent ! Mais quel intérêt à part faire fuir les visiteurs ?</a><br>";
    let dialHistoire_AskWhatsHappening2 = "<a id='dialHistoire_AskWhatsHappening'>Et pourquoi doit-on payer une taxe ?</a><br>";
    let dialHistoire_AskWhatsHappening3 = "<a id='dialHistoire_AskWhatsHappening'>Pourquoi doit-on payer une taxe ?</a><br>";
    if (localStorage.combatWon_RatSoufflant == 0) {
      dialHistoire_NoBandits1 = "<a id='dialHistoire_NoBandits'>Je n'ai pas croisé de bandits sur le chemin.</a><br>";
      dialHistoire_NoBandits2 = "<a id='dialHistoire_NoBandits'>En tout cas je n'ai pas croisé de bandits sur le chemin !</a><br>";
    }
    if (localStorage.combatWon_RatSoufflant == "1") {
      dialHistoire_NoBandits1 = "<a id='dialHistoire_NoBandits'>Je n'ai pas croisé de bandits sur le chemin. Juste un rat de la taille d'un petit chien que j'ai dérangé en train de manger quelqu'un.</a><br>";
      dialHistoire_NoBandits2 = "<a id='dialHistoire_NoBandits'>En tout cas je n'ai pas croisé de bandits sur le chemin ! Juste un rat de la taille d'un petit chien que j'ai dérangé en train de manger quelqu'un.</a><br>";
    }
    let dialAskAboutAssis1 = "<a id='dialAskAboutAssis'>L'Assis ?</a><br>";
    let dialEnter = "<a id='dialEnter'>Merci énormément !</a><br>";
    let dialAskAboutAssis2 = "<a id='dialAskAboutAssis'>Vous parliez d'un Assis ? Qu'est-ce que c'est ?</a><br>";
    let dialAskAboutVote1 = "<a id='dialAskAboutVote'>Il est élu ?</a><br>";
    let dialAskAboutTax1 = "<a id='dialAskAboutTax'>Une taxe ? On parle de combien ?</a><br>";
    let dialAskAboutTax2 = "<a id='dialAskAboutTax'>J'ai cru comprendre oui.. Et la taxe est à combien ?</a><br>";
    let dialAskAboutTax3 = "<a id='dialAskAboutTax'>Dur dur quoi. Je dois payer combien pour passer et éviter de me refaire cracher dessus ?</a><br>";
    let dialAskAboutTax4 = "<a id='dialAskAboutTax'>A combien est la taxe dont vous parliez ?</a><br>";
    let dialAskAboutCraie1 = "<a id='dialAskAboutCraie'>Un nuage de craie ?</a><br>";
    let dialPay1 = "<a id='dialPay'>Pas de souc' ! J'ai toujours un peu de feraille sur moi.</a><div class='icon money' title='Payer 80 OR'></div><br>";
    let dialPay2 = "<a id='dialPay'>Ok.. Je vais payer les 80 pièces.</a><div class='icon money' title='Payer 80 OR'></div><br>";
    let dialChangeSubject1 = "<a id='dialChangeSubject'>Oh.. Hmmm, j'avais une autre question.</i></a><br>";
    let dialCharm1 = "<a id='dialCharm'>Je vous en prie, laissez-moi entrer ! [Persuasion]</a><div class='icon chance' title='Réussite : 1/3'></div><div class='icon carac' title='Nécessitait 3 de Charisme'></div><br>";
    let dialTantPis = "<a id='dialTantPis'>Tans pis..</a><br>";
    if (localStorage.talkedToGuard == 0) {
      setTimeout(function() {
        localStorage.talkedToGuard = 1;
        refAllbutImg();
      }, 2000);
    }
    if (justStartedTalking == 1) {
      $(bubble).html(textHalte1);
      $(choix).append(dialHistoire_AskWhyPeage1 + dialAskAboutTax1 + dialHistoire_AskAboutChaleur1 + dialQuit1);
    }
    $(document).on('click', choix_a, function() {
      $(choix_a + "," + choix_ico).remove();
    });
    $(document).on('click', '#dialQuit', function() {
      closeDialogue();
    });
    $(document).on('click', '#dialHistoire_AskWhyPeage', function() {
      $(bubble).html(textPortesFermees1);
      $(choix).append(dialHistoire_AskWhatsHappening1 + dialAskAboutTax2 + dialQuit2);
    });
    $(document).on('click', '#dialHistoire_AskWhatsHappening', function() {
      $(bubble).html(textTopo1);
      $(choix).append(dialHistoire_NoBandits1 + dialAskAboutAssis1 + dialAskAboutTax3 + dialHistoire_AskAboutChaleur1 + dialQuit2);
    });
    $(document).on('click', '#dialAskAboutTax', function() {
      $(bubble).html(textPrix);
      $(choix).append(dialAskAboutCraie1 + dialHistoire_AskWhatsHappening2);
      if (localStorage.totalChar >= 3 && localStorage.failedToSeduceGuard == 0) {
        $(choix).append(dialCharm1);
      }
      if (localStorage.plGold >= 80) {
        $(choix).append(dialPay1 + dialQuit5);
      }
      if (localStorage.plGold < 80) {
        $(choix).append(dialQuit3);
      }
    });
    $(document).on('click', '#dialHistoire_AskAboutChaleur', function() {
      $(bubble).html(textChaleur);
      $(choix).append(dialHistoire_VousEtesArgile + dialQuit4);
    });
    $(document).on('click', '#dialHistoire_VousEtesArgile', function() {
      $(bubble).html(textPasVitalisé);
      $(choix).append(dialHistoire_YourChoice + dialQuit4);
    });
    $(document).on('click', '#dialHistoire_YourChoice', function() {
      $(bubble).html(textMyChoice);
      $(choix).append(dialHistoire_AskWhyPeage2 + dialAskAboutTax4 + dialQuit4);
    });
    $(document).on('click', '#dialHistoire_NoBandits', function() {
      $(bubble).html(textNoBandits);
      $(choix).append(dialAskAboutAssis2 + dialAskAboutTax4 + dialQuit4);
    });
    $(document).on('click', '#dialAskAboutAssis', function() {
      $(bubble).html(textAssis);
      $(choix).append(dialAskAboutVote1 + dialQuit4);
    });
    $(document).on('click', '#dialAskAboutVote', function() {
      $(bubble).html(textElection);
      $(choix).append(dialHistoire_NoBandits2 + dialAskAboutTax4 + dialQuit4);
    });
    $(document).on('click', '#dialAskAboutCraie', function() {
      $(bubble).html(textCraie);
      $(choix).append(dialChangeSubject1);
      if (localStorage.plGold >= 80) {
        $(choix).append(dialPay2 + dialQuit5);
      }
      if (localStorage.plGold < 80) {
        $(choix).append(dialQuit6);
      }
    });
    $(document).on('click', '#dialChangeSubject', function() {
      $(bubble).html(textChangeSubject);
      $(choix).append(dialHistoire_AskWhatsHappening3 + dialAskAboutTax4 + dialHistoire_AskAboutChaleur2 + dialQuit7);
    });
    $(document).on('click', '#dialTantPis', function() {
      $(bubble).html(textDésoPasDéso);
      $(choix).append(dialHistoire_AskWhatsHappening3 + dialAskAboutTax4 + dialHistoire_AskAboutChaleur2 + dialQuit7);
    });
    $(document).on('click', '#dialCharm', function() {
      var charmChance = Math.floor(Math.random() * (3 - 1 + 1) + 1);
      if (charmChance == 1) {
        $(bubble).html(textCharmingWin);
        $(choix).append(dialEnter);
      } else {
        localStorage.failedToSeduceGuard = 1;
        $(bubble).html(textCharmingLoose);
        $(choix).append(dialTantPis);
      }
    });
    $(document).on('click', '#dialPay', function() {
      localStorage.plGold = Number(localStorage.plGold) - 80;
      setPage("Pouce", "Merryvale", "PorteSud");
      refAll();
      closeDialogue();
      banner('Merryvale');
    });
    $(document).on('click', '#dialEnter', function() {
      setpage("Pouce", "Merryvale", "PorteSud");
      refAll();
      closeDialogue();
      banner('Merryvale');
      setTimeout(function() {
        getXp(50);
      });
    });
  }
}

function closeDialogue() {
  $('#dialogueWindow').css('bottom', '-100%');
}
