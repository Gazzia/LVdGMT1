$("*").each( function () {
    var $this = $(this);
    if (parseInt($this.css("fontSize")) < 10) {
        $this.css({ "font-size": "10px" });
    }
})
$(".topBlock_plInfo").each( function () {
    var $this = $(this);
    $this.css({ "font-size": $this.height() - 3 });
	})
$("#plGold").css({ "font-size": $('.goldContainer').height() - 3, "line-height": $('.goldContainer').height() +"px"});
$(".scrollMidRight").css("top", $(".rightblock_title").height());
// $(".scrollMidLeft").css("margin-top", $(".leftblock_title").height());
$(".scrollMidRight").css("height", "calc(100% - 4vh + "+$(".rightblock_title").height()+")");
