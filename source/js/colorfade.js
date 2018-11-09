function toggle_color(div, color2, time) {
  var $selector = document.querySelector(div);
  var color1 = $selector.style.backgroundColor;
  setTransitionDurations($selector, time);
  $selector.style.backgroundColor = $selector.style.backgroundColor === color1 ? color2 : color1;
  console.log($selector.style.backgroundColor);
}

function getStringFromMs(ms) {
  // convert ms to string
  // i.e. 1000 => '1ms'
  return ms + 'ms';
}

function setTransitionDurations($selector, ms) {
  var transitionSeconds = getStringFromMs(ms);
  // you need to set the transition for
  // each browser for max compatibility
  var prefixes = ['-webkit', '-o', '-moz'];
  prefixes.forEach(function(prefix) {
    $selector.style.setProperty(prefix + '-transition-duration', transitionSeconds);
  });
  $selector.style.transitionDuration = transitionSeconds;
}
