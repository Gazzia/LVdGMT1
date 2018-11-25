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
      if (converted.or > 1) arr.push(`${converted.or} lunes d'or`);
      if (converted.or == 1) arr.push(`${converted.or} lune d'or`);
   }
   if (converted.argent) {
      if (converted.argent > 1) arr.push(`${converted.argent} lunes d'argent`);
      if (converted.argent == 1) arr.push(`${converted.argent} lune d'argent`);
   }
   if (converted.cuivre) {
      if (converted.cuivre > 1) arr.push(`${converted.cuivre} lunes de cuivre`);
      if (converted.cuivre == 1) arr.push(`${converted.cuivre} lune de cuivre`);
   }
   return arr;
};
Number.prototype.money_iconize = function () {
   var arr = [];
   var converted = this.money_convert();
   if (converted.or){
      if (converted.or > 1) arr.push(`${converted.or}<div class="coinIcon or"></div>`);
      if (converted.or == 1) arr.push(`${converted.or}<div class="coinIcon or"></div>`);
   }
   if (converted.argent) {
      if (converted.argent > 1) arr.push(`${converted.argent}<div class="coinIcon argent"></div>`);
      if (converted.argent == 1) arr.push(`${converted.argent}<div class="coinIcon argent"></div>`);
   }
   if (converted.cuivre) {
      if (converted.cuivre > 1) arr.push(`${converted.cuivre}<div class="coinIcon cuivre"></div>`);
      if (converted.cuivre == 1) arr.push(`${converted.cuivre}<div class="coinIcon cuivre"></div>`);
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
Number.prototype.money_icons = function () {
   var icons = this.money_iconize();
   var string = "";
   for (moneyType in icons) {
      string += icons[moneyType];
      if (moneyType < (icons.length - 1)) {
         string += " ";
      }
   }
   if (string == "") string = `0 <div class='coinIcon cuivre'></div>`;
   return string;
};