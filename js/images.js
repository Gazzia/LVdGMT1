/*jshint esversion: 6 */
function refImg(){
  var PropMouchePercentage = 4;
  $(".UIBG_img, .UIBG_imgFG, .UIBG_Prop").fadeOut(500, function(){
    var page = localStorage.numpage;
    $("#decoTopLeft, #decoTopRight, .iconPageImg, .UIBG_img, .UIBG_imgFG, #illustr").attr("src","");
    if (page=="Classe"){
      $(".iconPageImg").attr("src","images/icons/page/footsteps.png");
      $("#UIBG_imgFull").attr("src","images/bg/full/Full_Classe.png");
    }
    if (page=="ClasseMage"){
      $(".iconPageImg").attr("src","images/icons/page/magic-hat.png");
      $("#UIBG_imgFull").attr("src","images/bg/full/Full_Classe.png");
    }
    if (page=="ClasseGuerrier"){
      $(".iconPageImg").attr("src","images/icons/page/farmer.png");
      $("#UIBG_imgFull").attr("src","images/bg/full/Full_Classe.png");
    }
    if (page=="ClasseEloquent"){
      $(".iconPageImg").attr("src","images/icons/page/comb.png");
      $("#UIBG_imgFull").attr("src","images/bg/full/Full_Classe.png");
    }
    if (page=="ClasseHabile"){
      $(".iconPageImg").attr("src","images/icons/page/stealth.png");
      $("#UIBG_imgFull").attr("src","images/bg/full/Full_Classe.png");
    }
    if (page==2){
      $("#decoTopLeft").attr("src","images/bg/top/2.0_Left.png");
      $("#decoTopRight").attr("src","images/bg/top/1.0_Right.png");
      $(".iconPageImg").attr("src","images/icons/page/hills.png");
      $("#UIBG_imgFull").attr("src","images/bg/full/Full_2.png");
      $("#UIBG_imgFullBG").attr("src","images/bg/full/FullBG_2.png");
    }
    if (page==2.1){
      $("#decoTopLeft").attr("src","images/bg/top/2.0_Left.png");
      $("#decoTopRight").attr("src","images/bg/top/1.0_Right.png");
      $(".iconPageImg").attr("src","images/icons/page/arbre_normal.png");
      $("#UIBG_imgFullFG").attr("src","images/bg/full/FullFG_2.1.png");
      $("#UIBG_imgFull").attr("src","images/bg/full/Full_2.1.png");
    }
    if (page==2.11){
      PropMouchePercentage = 9;
      $("#decoTopLeft").attr("src","images/bg/top/2.0_Left.png");
      $("#decoTopRight").attr("src","images/bg/top/1.0_Right.png");
      $(".iconPageImg").attr("src","images/icons/page/stream.png");
      $("#UIBG_imgFull").attr("src","images/bg/full/Full_2.11.png");
    }
    if (page==2.2){
      $(".iconPageImg").attr("src","images/icons/page/cabin.png");
      $("#UIBG_imgLFG").attr("src","images/bg/mid/2.2_Left.png");
      $("#UIBG_imgLBG").attr("src","images/bg/midbg/2.2_Left.png");
      $("#UIBG_imgRBG").attr("src","images/bg/midbg/2.2_Right.png");
    }
    if (page==2.211){
      $(".iconPageImg").attr("src","images/icons/page/morgue.png");
    }
    if (page==2.22){
      $("#decoTopLeft").attr("src","images/bg/top/2.0_Left.png");
      $("#decoTopRight").attr("src","images/bg/top/1.0_Right.png");
      $(".iconPageImg").attr("src","images/icons/page/cabin2.png");
      $("#UIBG_imgLBG").attr("src","images/bg/midbg/2.22_Left.png");
      $("#UIBG_imgRBG").attr("src","images/bg/midbg/2.22_Right.png");
    }
    if (page==3){
      $("#decoTopLeft").attr("src","images/bg/top/2.0_Left.png");
      $("#decoTopRight").attr("src","images/bg/top/1.0_Right.png");
      $(".iconPageImg").attr("src","images/icons/page/greatwall.png");
    }
    if (page==3.1){
      $(".iconPageImg").attr("src","images/icons/page/helm.png");
    }
    if (page==3.2){
      $(".iconPageImg").attr("src","images/icons/page/dig-hole.png");
    }
    if (page==4){
      $(".iconPageImg").attr("src","images/icons/page/load.png");
    }
    if (page==5.1){
      $(".iconPageImg").attr("src","images/icons/page/greatwall.png");
    }
    if (page==5.11){
      $(".iconPageImg").attr("src","images/icons/page/head2.png");
    }
    if (page==5.2){
      $(".iconPageImg").attr("src","images/icons/page/cobble.png");
    }
    if (page==5.3){
      $(".iconPageImg").attr("src","images/icons/page/cobble.png");
    }
    if (page==5.31){
      $(".iconPageImg").attr("src","images/icons/page/caduceus.png");
    }
    if (page==6.1){
      $(".iconPageImg").attr("src","images/icons/page/cobble.png");
    }
    if (page==6.11){
      $(".iconPageImg").attr("src","images/icons/page/pray.png");
    }
    if (page==6.111){
      $(".iconPageImg").attr("src","images/icons/page/pray.png");
    }
    if (page==6.1111){
      $(".iconPageImg").attr("src","images/icons/page/shamanGMT1.png");
    }
    var PropMoucheChance = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    if (PropMoucheChance <= PropMouchePercentage){$('#propMouches').show();}
    else {$('#propMouches').hide();}
    $('#propMouches').css({'left': Math.floor(Math.random() * (80 - 10 + 1) + 10)+'%','bottom': Math.floor(Math.random() * (40 - 2 + 1) + 2)+'%'});
    changeColor();
  });
  $(".UIBG_img, .UIBG_imgFG, .bgProp").fadeIn(300);
}

var oddNuageF = (Math.floor(Math.random() * 2) + 1);
if (oddNuageF == 1){ $("#uiBG_cloudsFG").css("background-image","url(images/bg/clouds/Fore01.png)");}
if (oddNuageF == 2){$("#uiBG_cloudsFG").css("background-image","url(images/bg/clouds/Fore02.png)");}
var oddNuageB = (Math.floor(Math.random() * 2) + 1);
if (oddNuageB == 1){$("#uiBG_cloudsBG").css("background-image","url(images/bg/clouds/Back01.png)");}
if (oddNuageB == 2){$("#uiBG_cloudsBG").css("background-image","url(images/bg/clouds/Back02.png)");}
$(function() {
  var x = 0;
  setInterval(function() {
    x -= 1;
    $('#uiBG_cloudsFG').css('background-position-x', x);
  }, 70);
});
$(function() {
  var x = 0;
  setInterval(function() {
    x -= 1;
    $('#uiBG_cloudsBG').css('background-position-x', x);
  }, 120);
});

function changeColor(){
  var colorTransitionTime = 0;
  if (localStorage.time == "SunnyAfternoon"){
    $("#uiBG").css({"background-image":"linear-gradient(to bottom, #d7eff5, #c4e8fa 60%)","transition":"filter 0.5s ease-in"});
    $('.uiBG_clouds').css('filter','');
    colorTransitionTime= Math.floor(Math.random() * (10000 - 4000 + 1) + 4000);
    $(".UIBG_img").css({"filter":"hue-rotate(-4deg) saturate(105%)","transition":"filter 4s ease-in"});
    $("#uiBG").css("filter","contrast(105%)");
    setTimeout(function(){
      if (localStorage.time == "SunnyAfternoon"){
        $(".UIBG_img").css("filter","hue-rotate(5deg) saturate(90%)");
        $("#uiBG").css({"filter":"contrast(95%)","transition":"filter 4s ease-in"});
      }
    }, colorTransitionTime);
    setTimeout(function(){
      if (localStorage.time == "SunnyAfternoon"){changeColor();}
    }, Math.floor(Math.random() * (colorTransitionTime+7000 - colorTransitionTime+2000 + 1) + colorTransitionTime+2000));
  }
  if (localStorage.time == "SunnyEvening"){
    $('#uiBG').css({'background-image':'linear-gradient(to bottom, #6e7376, #d69270 60%)','transition':'filter 0.5s ease-in'});
    $('.uiBG_clouds').css('filter','sepia(41%) opacity(7%)');
    $('.UIBG_img').css({'filter':'hue-rotate(325deg) brightness(65%) sepia(24%) contrast(96%) saturate(112%)','transition':'filter 0.5s ease-in'});
  }
  if (localStorage.time == 'SunnyNight'){
    $('#uiBG').css({'background-image':'linear-gradient(#32373a, #404040 60%)','transition':'filter 0.5s ease-in'});
    $('.uiBG_clouds').css('filter','sepia(41%) opacity(7%) brightness(0%)');
    $('.UIBG_img').css({'filter':'hue-rotate(20deg) brightness(25%) sepia(74%) contrast(89%) saturate(49.6%)','transition':'filter 0.5s ease-in'});
  }
  if (localStorage.time == 'SunnyMorning'){
    $('#uiBG').css({'background-image':'linear-gradient(#4f5365, #d5aebf 60%)','transition':'filter 0.5s ease-in'});
    $('.uiBG_clouds').css('filter','sepia(41%) opacity(7%) brightness(0%)');
    $('.UIBG_img').css({'filter':'brightness(67%) sepia(30%) contrast(80%) saturate(94%) hue-rotate(9deg)','transition':'filter 0.5s ease-in'});
  }
}
