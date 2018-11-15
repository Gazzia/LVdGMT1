(function() {
  function sdrag(onDrag, onStop, direction) {
    var startX = 0;
    var startY = 0;
    var element = this;
    var dragging = false;

    function move(e) {
      var fix = {};
      onDrag && onDrag(element, e.pageX, startX, e.pageY, startY, fix);
      if ('vertical' !== direction) {
        var pageX = ('pageX' in fix) ? fix.pageX : e.pageX;
        if ('startX' in fix) {
          startX = fix.startX;
        }
        if (false === ('skipX' in fix)) {
          element.style.left = (pageX - startX) + 'px';
        }
      }
      if ('horizontal' !== direction) {
        var pageY = ('pageY' in fix) ? fix.pageY : e.pageY;
        if ('startY' in fix) {
          startY = fix.startY;
        }
        if (false === ('skipY' in fix)) {
          element.style.top = (pageY - startY) + 'px';
        }
      }
    }

    function startDragging(e) {
      if (e.currentTarget instanceof HTMLElement || e.currentTarget instanceof SVGElement) {
        dragging = true;

        var left = element.style.left ? parseInt(element.style.left) : 0;
        var top = element.style.top ? parseInt(element.style.top) : 0;
        startX = e.pageX - left;
        startY = e.pageY - top;
        window.addEventListener('mousemove', move);
      } else {
        throw new Error("Your target must be an html element");
      }
    }

    this.addEventListener('mousedown', startDragging);
    window.addEventListener('mouseup', function(e) {
      if (true === dragging) {
        dragging = false;
        window.removeEventListener('mousemove', move);
        onStop && onStop(element, e.pageX, startX, e.pageY, startY);
      }
    });
  }

  Element.prototype.sdrag = sdrag;
})();
document.querySelectorAll('#actionmenu')[0].sdrag();
