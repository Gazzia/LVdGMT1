// Liste des variables de texte : 
//
// ___AUTOUR DU PLAYER_____________________________
//       -Nom (affichage) : @name
//       -Genre (conditionnel): {m:texte}{f:texte}
//       -Race :
//          •Affichage :
//             -singulier genré : @race ou @Race
//             -pluriel genré : @races ou @Races
//             -pluriel non-genré : @racesM ou @RacesM
//          •Conditionnel :
//             @race{Angulain:texte|Humain:texte2|Autre:texte3}
//
// ___MISE EN PAGE__________________________________
//       Retour à la ligne : //
//       Gras : *texte*
//       Image : {img:nom_de_l'image}
//       Image (avec texte qui la contourne) : {img_inline:nom_de_l'image}
//       Objects clickable : {c:objet} ou {c:texte alternatif|objet}

String.prototype.masculinize = function () {
   // grâce a cette méthode, {m:ces mots} n'apparaissent que si le player est un homme
   // et {f:ces mots} n'apparaîtraient pas
   return this.replace(/\{f:+[^}]*\}/g, "").replace(/\{m:([^}]*)\}/g, "$1");
};
String.prototype.feminize = function () {
   // grâce a cette méthode, {f:ces mots} n'apparaissent que si le player est une femme
   // et {m:ces mots} n'apparaîtraient pas
   return this.replace(/\{m:+[^}]*\}/g, "").replace(/\{f:([^}]*)\}/g, "$1");
};
String.prototype.genreIt = function () {
   if (player.genre == "m") {
      return this.masculinize();
   } else {
      return this.feminize();
   }
};
String.prototype.setTrigs = function () {
   // grâce a cette méthode, {c:ces mots} seraient un trigger clickable
   var rawTrigs = this.replace(/\{c:([^}|]*)\}/g, "<a class='click' data-trigger='$1'>$1</a>");
   var rawAndAlternTrigs = rawTrigs.replace(/\{c:([^|]*)+\|([^}]*)\}/g, "<a class='click' data-trigger='$2'>$1</a>");
   return rawAndAlternTrigs;
};
String.prototype.addLineBreaks = function () {
   // grâce a cette méthode, une ligne serait sautée ici->//donc ces mots seraient écris sur la ligne suivante
   return this.replace(/\/{2}/g, "<br>");
};
String.prototype.bold = function () {
   // *grâce a cette méthode, ce texte serait en gras* et pas celui là
   return this.replace(/\*+([^*]*)\*/g, "<strong>$1</strong>");
};
String.prototype.img = function () {
   return this.replace(/\{img:([^}]*)\}/g, `<img class="img-story" src="../assets/img/story/$1.png" alt="L'image n'a pas pu être chargée.." onError="this.style.opacity='0.6';"/>`);
};
String.prototype.inlineImg = function () {
   return this.replace(/\{img_inline:([^}]*)\}/g, `<img class="img-story inline" src="../assets/img/story/$1.png" alt="L'image n'a pas pu être chargée.." onError="this.style.opacity='0.6';"/>`);
};
String.prototype.race = function () {
   //traitement de @race ou @Race ou @races ou @racesM
   var RacesNames = [
      ["Humain", "Humaine"],
      ["Ferré", "Ferrée"],
      ["Angulain", "Angulaine"],
      ["Oculain", "Oculaine"],
      ["Golem", "Golemme"],
      ["Feûlain", "Feûline"]
   ];
   var this2 = this.replace(/@racesM(?!{)/g, player.race.toLocaleLowerCase() + "s").replace(/@RacesM(?!{)/g, player.race.toTitleCase() + "s");
   //genré
   if (player.genre == "m") {
      return this2.replace(/@race(?!{)/g, player.race.toLocaleLowerCase()).replace(/@Race(?!{)/g, player.race.toTitleCase()).replace(/@races(?!{)/g, player.race.toLocaleLowerCase() + "s").replace(/@Races(?!{)/g, player.race.toTitleCase() + "s");
   } else {
      var feminineRaceName;
      for (race of RacesNames) {
         if (player.race == race[0]) feminineRaceName = race[1];
      }
      return this2.replace(/@race(?!{)/g, feminineRaceName.toLocaleLowerCase()).replace(/@Race(?!{)/g, feminineRaceName.toTitleCase()).replace(/@races(?!{)/g, feminineRaceName.toLocaleLowerCase() + "s").replace(/@Races(?!{)/g, feminineRaceName.toTitleCase() + "s");
   }
};
String.prototype.raceTreatment = function () {
   //traitement de @race{Angulain:blabla|Homme:blibli|Autre:bloublou}

   var raceRegx;
   switch (player.race) {
      case "Angulain":
         raceRegx = new RegExp("@race{(?:[^}]*)Angulain:([^|]*)(?:[^}]*)\}");
         break;
      case "Feûlain":
         raceRegx = new RegExp("@race{(?:[^}]*)Feûlain:([^|]*)(?:[^}]*)\}");
         break;
      case "Ferré":
         raceRegx = new RegExp("@race{(?:[^}]*)Ferré:([^|]*)(?:[^}]*)\}");
         break;
      case "Oculain":
         raceRegx = new RegExp("@race{(?:[^}]*)Oculain:([^|]*)(?:[^}]*)\}");
         break;
      case "Golem":
         raceRegx = new RegExp("@race{(?:[^}]*)Golem:([^|]*)(?:[^}]*)\}");
         break;
      default:
         raceRegx = new RegExp("@race{(?:[^}]*)Homme:([^|]*)(?:[^}]*)\}");
   }
   if (raceRegx.test(this)) {
      return this.replace(raceRegx, "$1");
   } else {
      return this.replace(/@race{(?:[^}]*)Autre:([^|]*)(?:[^}]*)\}/g, "$1");
   }
};
String.prototype.playerName = function () {
   // grâce a cette méthode, {f:ces mots} n'apparaissent que si le player est une femme
   // et {m:ces mots} n'apparaîtraient pas
   return this.replace(/@name/g, player.name.toTitleCase());
};
String.prototype.format = function () {
   return this.genreIt().setTrigs().addLineBreaks().bold().img().inlineImg().race().raceTreatment().playerName();
};

String.prototype.toTitleCase = function () {
   // grâce a cette méthode, {f:ces mots} n'apparaissent que si le player est une femme
   // et {m:ces mots} n'apparaîtraient pas
   return this.toLocaleLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toLocaleUpperCase() + s.substring(1))
      .join(' ');
};
