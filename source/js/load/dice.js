var dice = {
   throws: 0,
   launch() {
      var cube = document.getElementById('cube');
      dice.result = random(1, 20);

      cube.className = 'show-' + random(1, 20);
      delay(function () {
         cube.className = 'show-' + random(1, 20);
         delay(function () {
            cube.className = 'show-' + random(1, 20);
            delay(function () {
               cube.className = 'show-' + dice.result;
               delay(function () {
                  chance.getResult(dice.result);
               }, 500);
            }, 400);
         }, 400);
      }, 400);
   },


   show() {
      $('#d20').css({
         'display': 'block',
         'animation': 'fadeIn 0.3s ease forwards',
      }).on('click', function () {
         dice.launch();
         $('.chance .clickOnDiceMsg').css('display', 'none');
         $('#d20').off();
      });
   },

   hide() {
      $('#d20').css('animation', 'fadeOut 0.3s ease forwards');
      delay(function () {
         $('#d20').css('display', 'none');
      }, 300);
   }
};