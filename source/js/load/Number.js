Number.prototype.money_convert = function () {
   return {
      or: Math.floor(this / 10000),
      argent: Math.floor(this / 100) % 100,
      cuivre: this % 100,
   };

};
Number.prototype.money_verbose = function () {
   var arr = [];
   var converted = this.money_convert();
   if (converted.or){
      if (converted.or > 1) arr.push(`${converted.or} pièces d'or`);
      if (converted.or == 1) arr.push(`${converted.or} pièce d'or`);
   }
   if (converted.argent) {
      if (converted.argent > 1) arr.push(`${converted.argent} pièces d'argent`);
      if (converted.argent == 1) arr.push(`${converted.argent} pièce d'argent`);
   }
   if (converted.cuivre) {
      if (converted.cuivre > 1) arr.push(`${converted.cuivre} pièces de cuivre`);
      if (converted.cuivre == 1) arr.push(`${converted.cuivre} pièce de cuivre`);
   }
   return arr;
};
Number.prototype.money_phrase = function () {
   var verb = this.money_verbose();
   var string = "";
   for (moneyType in verb) {
      string += verb[moneyType];
      if (moneyType < (verb.length - 1)) {
         if (verb.length == 3 && moneyType == 0) {
            string += ", ";
         } else {
            string += " et ";
         }
      }
   }
   if (string == "") string = "Pas d'argent";
   return string;
};