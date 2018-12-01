var overlay = {
   isShown: false,
   isShown_important: false,
   show(color = 0) {
      if (color) {
         if (color == "testDark") $(".overlay.normal").css('background-color', 'rgba(49, 35, 17, 0.8)');
      } else {
         $(".overlay.normal").css('background-color', 'rgba(62, 53, 33, 0.64)');
      }
      if (!this.isShown) {
         $(".overlay.normal").css({
            animation: "fadeIn .5s ease forwards",
            display: "block"
         });
         this.isShown = true;
      }
   },
   hide() {
      if (this.isShown) {
         $(".overlay.normal").css("animation", "fadeOut .5s ease forwards");
         this.isShown = false;
         delay(function () {
            $(".modal, .overlay.normal").css("display", "none");
         }, 500);
      }
   },
   show_important() {
      if (!this.isShown_important) {
         $(".overlay.important").css({
            animation: "fadeIn .5s ease forwards",
            display: "block"
         });
         this.isShown_important = true;
      }
   },
   hide_important() {
      if (this.isShown_important) {
         $(".overlay.important").css("animation", "fadeOut .5s ease forwards");
         this.isShown_important = false;
         delay(function () {
            $(".overlay.important").css("display", "none");
         }, 500);
      }
   },
};