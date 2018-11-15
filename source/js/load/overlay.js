var overlay = {
   isShown: false,
   show() {
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
         delay(function () {
            $(".modal, .overlay").css("display", "none");
            this.isShown = false;
         }, 500);
      }
   }
};