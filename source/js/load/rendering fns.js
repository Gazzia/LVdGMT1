function isOverflown(fullElem) {
   let re = /([^ ]*) ([^ ]*)/g;
   var result = re.exec(fullElem);
   var parent = result[1];
   var container = result[2];
   var elem = $(`${fullElem}`)[0];
   
   var overflowing = elem.scrollHeight > elem.clientHeight || elem.scrollWidth > elem.clientWidth;
   if (overflowing) {
      elem.scrollTop=0;
      $(`${parent} .overflowIndicator, ${parent} .overflowGradient.bot`).css('opacity', 1);
      $(`${parent} ${container}`).on("wheel", function (event) {
         delay(function () {
            if (elem.scrollTop >= (elem.scrollTopMax) - ((window.innerHeight) / 100) * 6.5)
               $(`${parent} .overflowIndicator, ${parent} .overflowGradient.bot`).css('opacity', 0);
            else
               $(`${parent} .overflowIndicator, ${parent} .overflowGradient.bot`).css('opacity', 1);

            if (elem.scrollTop > ((window.innerHeight)/100)*2.7)
               $(`${parent} .overflowGradient.top`).css('opacity', 1);
            else
               $(`${parent} .overflowGradient.top`).css('opacity', 0);
         }, 200);
      }, false);
   } else {
      $(`${parent} ${container}`)[0].scrollTop = 0;
      $(`${parent} .overflowGradient, ${parent} .overflowIndicator`).css('opacity', 0);
   }
}