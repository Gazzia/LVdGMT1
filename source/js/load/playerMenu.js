var playerMenu = {
   isShown: false,
   show: function () {
      $(`.playerMenu`).css('bottom', '0');
      playerMenu.isShown = true;
   },
   hide: function () {
      $(`.playerMenu`).css('bottom', '-85vh');
      playerMenu.isShown = false;
   },
   toggle: function () {
      this.isShown ? this.hide() : this.show();
   },
};