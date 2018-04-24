/**/
  // $("html, body").css("padding-bottom","500px");

// NUAGES
var oddNuageF = (Math.floor(Math.random() * 2) + 1);
if (oddNuageF == 1){ $("#uiBG_cloudsFG").css("background-image","url(images/Deco/clouds/Fore01.png)");}
if (oddNuageF == 2){$("#uiBG_cloudsFG").css("background-image","url(images/Deco/clouds/Fore02.png)");}
var oddNuageB = (Math.floor(Math.random() * 2) + 1);
if (oddNuageB == 1){$("#uiBG_cloudsBG").css("background-image","url(images/Deco/clouds/Back01.png)");}
if (oddNuageB == 2){$("#uiBG_cloudsBG").css("background-image","url(images/Deco/clouds/Back02.png)");}

$(function(){
      var x = 0;
      setInterval(function(){
          x-=1;
          $('#uiBG_cloudsFG').css('background-position-x', x);
      }, 70);
  });
$(function(){
        var x = 0;
        setInterval(function(){
            x-=1;
            $('#uiBG_cloudsBG').css('background-position-x', x);
        }, 120);
    });
