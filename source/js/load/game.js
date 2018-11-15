var game = {
  pageID:0,
  page:{},
  scene:{},
  loadPage: function(pageID) {
    game.pageID = pageID;
    game.page = new Page(pageList[pageID]);
  	$("main .textbox.title").html(game.page.title);
  	$("main .textbox.scene").html(game.page.fluff);
    $("main .extrasContainer").html('');

  	game.scene = game.page.scenes[game.page.sceneID - 1];
  	$("main .textbox.story").html(game.scene.story());
    game.scene.extras();
    game.page.refBackground();
  },
  refreshPage: function() {
  	$("main .textbox.title").html(game.page.title);
  	$("main .textbox.scene").html(game.page.fluff);
    $("main .extrasContainer").html('');

  	game.scene = game.page.scenes[game.page.sceneID - 1];
  	$("main .textbox.story").html(game.scene.story());
    game.scene.extras();
    game.page.refBackground();
  },
  ui:{
    isHidden:false,
    show(){
      $('main.main').css('animation','show-ui-main 0.6s ease forwards');
      $('nav.gameMenu').css('animation','show-ui-nav 0.6s ease forwards');
      this.isHidden=false;
    },
    hide(){
      $('main.main').css('animation','hide-ui-main 0.6s ease forwards');
      $('nav.gameMenu').css('animation','hide-ui-nav 0.6s ease forwards');
      this.isHidden=true;
    },
    toggle(){
      this.isHidden? this.show() : this.hide();
    }
  }
};
