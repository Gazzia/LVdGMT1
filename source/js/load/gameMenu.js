var gameMenu = {
   isShown: false,
   show: function () {
      overlay.show_important();
      $(".gameMenu").css('display', 'block');
      delay(function(){
         $(`.gameMenu`).css('animation', 'fadeInScrollUp 0.5s ease forwards');
         delay(function(){
            gameMenu.isShown = true;
         }, 500);
      }, 1);
   },
   hide: function () {
      $(`.gameMenu`).css('animation', 'fadeOutScrollDown 0.5s ease forwards');
      overlay.hide_important();
      delay(function(){
         $(".gameMenu").css('display', 'none');
         gameMenu.isShown = false;
      }, 500);
   },
   toggle: function () {
      this.isShown ? this.hide() : this.show();
   },
};