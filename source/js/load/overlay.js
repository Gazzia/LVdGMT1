var overlay = {
   isShown: false,
   show(color = 0) {
      if (color) {
         if (color == "testDark") $(".overlay").css('background-color', 'rgba(49, 35, 17, 0.8)');
      } else {
         $(".overlay").css('background-color', 'rgba(61, 49, 25, 0.4)');
      }
      if (!this.isShown) {
         $(".overlay").css({
            animation: "fadeIn .5s ease forwards",
            display: "block"
         });
         this.isShown = true;
      }
   },
   hide() {
      if (this.isShown) {
         $(".overlay").css("animation", "fadeOut .5s ease forwards");
         this.isShown = false;
         delay(function () {
            $(".modal, .overlay").css("display", "none");
         }, 500);
      }
   }
};