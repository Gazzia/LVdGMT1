var extrasDB = {
  time:{
    long_soufflant(){
      if ((time.daysPlayed == 0 && time.period == "nuit") || (time.daysPlayed == 1 && time.hours <= 4)) {
        //IF c'est la première nuit :
        extraBlock("Le soleil est déjà couché, et vous ne voyez plus grand chose.. peut-être serait-il temps de se hâter vers Merryvale ?", 'time');
      }
      if (time.daysPlayed == 1 && time.period != "nuit") {
        //IF c'est le deuxième jour mais pas la nuit:
        extraBlock("Cela fait déjà un jour entier que vous êtes dans la plaine.. Ne serait-il pas une bonne idée d'essayer d'atteindre Merryvale ?", 'time');
      }
      if ((time.daysPlayed == 1 && time.hours >= 21) || time.daysPlayed > 1) {
        //IF c'est la première nuit :
        extraBlock("Cela fait beaucoup trop longtemps que vous êtes ici. Vous n'êtes plus derrière l'écran ? Ouu vous avez eu un problème ? Je dois appeler les urgences ?", 'time');
      }
    }
  },
};
