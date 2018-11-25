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
String.prototype.addLineBreaks = function(){
   // grâce a cette méthode, une ligne serait sautée ici->//donc ces mots seraient écris sur la ligne suivante
   return this.replace(/\/{2}/g, "<br>");
};
String.prototype.bold = function(){
   // *grâce a cette méthode, ce texte serait en gras* et pas celui là
   return this.replace(/\*+([^*]*)\*/g, "<strong>$1</strong>");
};
String.prototype.format = function(){
   return this.genreIt().setTrigs().addLineBreaks().bold();
};