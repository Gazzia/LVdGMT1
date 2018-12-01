weird = {
   isActive: false,
   activate(){
      this.isActive = true;
      $("html").css({
         "background-color": "black",
      });
      $("body").css({
         "box-shadow": "0 0 3vh 2vh rgb(255, 0, 151), 0 0 9vh 10vh rgb(0, 255, 221), 0 0 15vh 10vh rgb(255, 0, 255), 0 0 25vh 15vh rgb(0, 255, 22)",
         "animation":"weird_activate 10s ease forwards"
      });
      el = "<div id=coucoulol>Bienvenue dans le hardmode</div>";
      $("html").append(el);
   },
   desactivate() {
      this.isActive = false;
      $("html").css({
         "background-color": "white",
      });
      $("body").css({
         "box-shadow": "none",
         "animation": "weird_desactivate 2s ease forwards"
      });
      $("#coucoulol").remove();
   },
   toggle(){
      !this.isActive? this.activate() : this.desactivate();
   }

};

var spell_val = new Spell("lol", function () {
   weird.toggle();
});