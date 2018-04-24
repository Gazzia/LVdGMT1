function refImg(){
  // $(".UIBG_img").fadeOut(300, function() {
    var page = localStorage.numpage;
    $("#decoTopLeft, #decoTopRight, .iconPageImg, .UIBG_imgFull, #illustr").attr("src","");
    if (page=="Classe"){
      $("#decoTopLeft").attr("src","images/Deco/top/1.0_Left.png");
      $("#decoTopRight").attr("src","images/Deco/top/1.0_Right.png");
      $(".iconPageImg").attr("src","images/icons/page/footsteps.png");
      $("#UIBG_imgLFG").attr("src","images/Deco/mid/1.0_Left.png");
      $("#UIBG_imgRFG").attr("src","images/Deco/mid/1.0_Right.png");
      $("#illustr").attr("src","images/Illus/illus_1.0.png");
    }
    if (page=="ClasseMage"){
      $(".iconPageImg").attr("src","images/icons/page/magic-hat.png");
      $("#illustr").attr("src","images/Illus/illus_1.1.png");
    }
    if (page=="ClasseGuerrier"){
      $(".iconPageImg").attr("src","images/icons/page/farmer.png");
      $("#illustr").attr("src","images/Illus/illus_1.2.png");
    }
    if (page=="ClasseEloquent"){
      $(".iconPageImg").attr("src","images/icons/page/comb.png");
      $("#illustr").attr("src","images/Illus/illus_1.3.png");
    }
    if (page=="ClasseAgile"){
      $(".iconPageImg").attr("src","images/icons/page/stealth.png");
      $("#illustr").attr("src","images/Illus/illus_1.4.png");
    }
    if (page==2){
      $("#decoTopLeft").attr("src","images/Deco/top/2.0_Left.png");
      $("#decoTopRight").attr("src","images/Deco/top/1.0_Right.png");
      $(".iconPageImg").attr("src","images/icons/page/hills.png");
      $("#UIBG_imgFull").attr("src","images/Deco/full/Full_2.png");
      $("#UIBG_imgFullBG").attr("src","images/Deco/full/FullBG_2.png");
      // $("#UIBG_imgLFG").attr("src","images/Deco/mid/2.0_Left.png");
      // $("#UIBG_imgLBG").attr("src","images/Deco/midbg/2.0_Left.png");
      // $("#UIBG_imgRFG").attr("src","images/Deco/mid/2.0_Right.png");
      // $("#UIBG_imgRBG").attr("src","images/Deco/midbg/2.0_Right.png");
    }
    if (page==2.1){
      $("#decoTopLeft").attr("src","images/Deco/top/2.0_Left.png");
      $("#decoTopRight").attr("src","images/Deco/top/1.0_Right.png");
      $(".iconPageImg").attr("src","images/icons/page/arbre_normal.png");
      $("#UIBG_imgFull").attr("src","images/Deco/full/Full_2.1.png");
      $("#UIBG_imgFullBG").attr("src","images/Deco/full/FullBG_2.1.png");
      // $("#UIBG_imgLFG").attr("src","images/Deco/mid/2.1_Left.png");
      // $("#UIBG_imgLBG").attr("src","images/Deco/midbg/2.1_Left.png");
      // $("#UIBG_imgRFG").attr("src","images/Deco/mid/2.1_Right.png");
      // $("#UIBG_imgRBG").attr("src","images/Deco/midbg/2.1_Left.png");
    }
    if (page==2.11){
      $("#decoTopLeft").attr("src","images/Deco/top/2.0_Left.png");
      $("#decoTopRight").attr("src","images/Deco/top/1.0_Right.png");
      $(".iconPageImg").attr("src","images/icons/page/stream.png");
      $("#UIBG_imgLFG").attr("src","images/Deco/mid/2.11_Left.png");
      $("#UIBG_imgLBG").attr("src","images/Deco/midbg/2.11_Left.png");
      $("#UIBG_imgRFG").attr("src","images/Deco/mid/2.11_Right.png");
      $("#UIBG_imgRBG").attr("src","images/Deco/midbg/2.11_Right.png");
    }
    if (page==2.2){
      $(".iconPageImg").attr("src","images/icons/page/cabin.png");
      $("#UIBG_imgLFG").attr("src","images/Deco/mid/2.2_Left.png");
      $("#UIBG_imgLBG").attr("src","images/Deco/midbg/2.2_Left.png");
      $("#UIBG_imgRBG").attr("src","images/Deco/midbg/2.2_Right.png");
    }
    if (page==2.211){
      $(".iconPageImg").attr("src","images/icons/page/morgue.png");
    }
    if (page==2.22){
      $("#decoTopLeft").attr("src","images/Deco/top/2.0_Left.png");
      $("#decoTopRight").attr("src","images/Deco/top/1.0_Right.png");
      $(".iconPageImg").attr("src","images/icons/page/cabin2.png");
      $("#UIBG_imgLBG").attr("src","images/Deco/midbg/2.22_Left.png");
      $("#UIBG_imgRBG").attr("src","images/Deco/midbg/2.22_Right.png");
    }
    if (page==3){
      $("#decoTopLeft").attr("src","images/Deco/top/2.0_Left.png");
      $("#decoTopRight").attr("src","images/Deco/top/1.0_Right.png");
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
  // });
  // $(".UIBG_img").fadeIn(300);
}
