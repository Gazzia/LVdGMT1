var playerMenu = {
      isShown: false,
      show: function () {
         $(`.playerMenu`).css('bottom', "0px");
         playerMenu.isShown = true;
      },
      hide: function () {
         $(`.playerMenu`).css('bottom', `-${$("nav.playerMenu").height() - $("nav.playerMenu .head").height()}px`); playerMenu.isShown = false;
            },
            toggle: function () {
               this.isShown ? this.hide() : this.show();
            },
      };