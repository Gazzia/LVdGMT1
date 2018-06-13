function sidebar_makeActiveMenu(menu) {
  $('.active').removeClass('active');
  $('.menus').hide(200);
  $("#openMenu" + menu).addClass('active');
  $('#menu' + menu).show(200);
  if (menu == "Save") {
    for (i = 1; i <= 3; i++) {
      if (localStorage['save' + i] != undefined && localStorage['save' + i] != 0) {
        $('#save' + i + ' .time').html(localStorage['save' + i + 'Time']);
      } else {
        $('#save' + i + ' .time').html('Vide');
      }
    }
  }
  if (menu == "Options" || menu == "Options_Sound") {
    $('.asideRight').css('background-color', 'rgb(127, 171, 156)');
    $('.asideRight nav').css('background-color', 'rgb(115, 155, 145)');
    $('.asideRight header').css({
      'background-color': 'rgb(115, 155, 145)',
      'color': 'rgb(66, 91, 84)'
    });
    if (localStorage.Setting_SoundOn == 1 && $('.soundbox.sounds').hasClass('active') == false) {
      $('.soundbox.sounds').addClass('active');
    }
    if (localStorage.Setting_SoundOn == 0 && $('.soundbox.sounds').hasClass('active') == true) {
      $('.soundbox.sounds').removeClass('active');
    }
    if (localStorage.Setting_MusicOn == 1 && $('.soundbox.music').hasClass('active') == false) {
      $('.soundbox.music').addClass('active');
    }
    if (localStorage.Setting_MusicOn == 0 && $('.soundbox.music').hasClass('active') == true) {
      $('.soundbox.music').removeClass('active');
    }
  } else {
    $('.asideRight').css('background-color', '#d2c6b4');
    $('.asideRight nav').css('background-color', '#97907f');
    $('.asideRight header').css({
      'background-color': 'rgb(216, 206, 195)',
      'color': 'rgb(118, 99, 92)'
    });
  }
}

function openInventory() {
  isInvOpen = 1;
  refInv();
  fullRefSel();
  $('.mask.deep.lightgrey').fadeIn(700);
  $('#InvLPane').css('left', '0');
  $('#InvTRPane').css('top', '0');
  $('#InvBRPane').css('bottom', '0');
  if (isInvOpen == 1) {
    $(".mask").click(function() {
      closeInventory();
    });
  }
}

function closeInventory() {
  isInvOpen = 0;
  $('.mask.deep.lightgrey').fadeOut(700);
  $('#InvLPane').css('left', '-60%');
  $('#InvTRPane').css('top', '-100%');
  $('#InvBRPane').css('bottom', '-100%');
}

function expandHistoireBlock() {
  $(".leftblock").css({
    'width': '50vw'
  });
  $(".leftblock footer").fadeOut(300);
  setTimeout(function() {
    $(".leftblock").css({
      'height': '98vh',
      'top': '-9vh'
    }).addClass('clickToClose');
  }, 300);
}

function alerte(context, data1) {
  if (context == 'returnToMenu?') {
    $('#alerte header').html('Retour au menu');
    $('#alerte main').html('Êtes-vous sûr de vouloir retourner au menu ?<br>Toute progression non-sauvegardée sera perdue.');
    $('#alerte .btn1').html('Oui').attr('onclick', 'window.location="Intro.html";').show();
    $('#alerte .btn2').html('Non').attr('onclick', 'closeAlerte()').show();
    dialogColor('green');
  }
  if (context == 'triedSaving') {
    $('#alerte header').html('Sauvegarde impossible');
    $('#alerte main').html("Vous ne pouvez pas sauvegarder, cette fonction n'est pas encore complêtement implémentée dans le jeu.");
    $('#alerte .btn1').html('Ok').attr('onclick', 'closeAlerte()').show();
    dialogColor('green');
  }
  if (context == 'overwriteSave') {
    $('#alerte header').html('Sauvegarde pleine !');
    $('#alerte main').html("Cette sauvegarde est déjà pleine, voulez-vous l'écraser et la remplacer par une nouvelle ?.");
    $('#alerte .btn1').html('Oui').attr('onclick', 'save("' + data1 + '");closeAlerte();').show();
    $('#alerte .btn2').html('Non').attr('onclick', 'closeAlerte();').show();
    dialogColor('green');
  }
  openAlerte();
}

function openDialog() {
  $('#dialog').css('left', '15%');
  $('.mask.light.brown').fadeIn(700);
}

function closeDialog() {
  $('#dialog').css('left', '-65%');
  $('.mask').fadeOut(700);
  $('#dialog a').hide();
}

function openAlerte() {
  $('#alerte').css('top', 'calc(50% - ' + $('#alerte').height() + 'px)').show();
  $('.mask.light.brown').fadeIn(700);
}

function closeAlerte() {
  $('#alerte').fadeOut(200);
  $('.mask').fadeOut(700);
  setTimeout(function() {
    $('#alerte a').hide();
  }, 200);
}

function foundGold(amount, storageEvent) {
  closeDialog();
  setTimeout(function() {
    localStorage[storageEvent] = 1;
    refAllbutImg();
    transaction(amount, "+");
    setTimeout(function() {
      setSound("UI", "gold");
    }, 3300);
  }, 250);
}

function transaction(amount, positivity) {
  $('.mask.light.brown').fadeIn(700);
  $("#transactions").css('transition', 'none');
  $("#transactions .gold").html(positivity + amount + " or !");
  setTimeout(function() {
    $("#transactions").css({
      'left': 'calc(50% - 25vh)',
      'bottom': 'calc(50% - 10vh)',
      'height': '20vh',
      'width': '50vh'
    });
    $("#transactions").fadeIn(400);
    $("#transactions.title").css('background-color', '#e2b948');
    setTimeout(function() {
      $("#transactions.title").css('background-color', '#d4ba45');
      setTimeout(function() {
        $("#transactions.gold").html("");
        $("#transactions").css({
          'transition': 'all 0.5s ease',
          'left': '69%',
          'width': '5px'
        });
        setTimeout(function() {
          $('.mask').fadeOut(700);
          $("#transactions").css({
            'bottom': '3%'
          });
          setTimeout(function() {
            $("#transactions").css({
              'height': '0'
            }).fadeOut(100);
            refAllbutImg();
          }, 260);
        }, 300);
      }, 1400);
    }, 600);
  }, 1000);
  setTimeout(function() {
    localStorage.plGold = Number(localStorage.plGold) + Number(amount);
    refAllbutImg();
  }, 3500);
}

function foundItem(item) {
  setSound("UI", "takeStuff");
  setTimeout(function() {
    localStorage[window[item].LSName] = 1;
    $('#dialog a').hide();
    $("#dialog .text").html(window[item].FoundText);
    $("#dialog .image").css("background-image", "url(images/" + window[item].Img + ")");
    if (window[item].Type == "arme") {
      $('#dialog .icon').html(iconWeapon);
      $("#dialog .title").html("Nouvelle arme !");
      $('#dialog a.nb1').html('Prendre').attr('onclick', 'closeDialog()').show();
      $('#dialog a.nb2').html('Prendre et équipper').attr('onclick', 'localStorage.inv_selected_arme="' + window[item].Short + '"; closeDialog(); refAllbutImg();').show();
    }
    if (window[item].Type == "tool") {
      $("#dialog .title").html("Nouvel outil !");
      $('#dialog a.nb1').html('Ok').attr('onclick', 'closeDialog()').show();
    }
    dialogColor('orange');
  }, 200);
}

function dialogColor(paramColor) {
  var mainColor;
  var textColor;
  var backColor;
  if (paramColor == "red") {
    mainColor = '#d44568';
    textColor = '#c2786c';
    backColor = '#f0dccc';
  }
  if (paramColor == "orange") {
    mainColor = '#d4a245';
    textColor = '#c29b6c';
    backColor = '#f0e2cc';
  }
  if (paramColor == "green") {
    mainColor = 'rgb(127, 171, 156)';
    textColor = 'rgb(66, 91, 84)';
    backColor = 'rgb(216, 223, 221)';
  }
  $('#dialog .title, #dialog a, #alerte header, #alerte a').css('background-color', mainColor);
  $('#dialog .image').css('border-left-color', mainColor);
  $('#dialog .icon svg').css('fill', mainColor);
  $('#dialog .text, #alerte main').css('color', textColor);
  $('#dialog .content, #alerte').css('background-image', 'linear-gradient(white, ' + backColor + ')');
}

function banner(ville) {
  $(".townBanner").html(ville).fadeIn(900);
  setTimeout(function() {
    $(".townBanner").fadeOut(900);
  }, 2000);
}
