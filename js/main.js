// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = function () {};
        }
    }
}());

//center a absolutely positioned element, given window and obj to be centered
function center($window, $obj){
  var top, left;
  var win_height = $window.height();
  var win_width = $window.width();
  var obj_height = $obj.height();
  var obj_width = $obj.width();
  
  //keep obj on screen
  if(win_height > obj_height)
    top = win_height/2 - obj_height/2;
  else
    top = 0;
  if(win_width > obj_width)
    left = win_width/2 - obj_width/2;
  else
    left = 0;
    
  //set to center
  $obj.css('top', top);
  $obj.css('left', left);
}

function updateClock(clock){
  now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  
  console.log($('.H0 li').height());
  
  var hours = [Math.floor(h/10), h%10];
  var minutes = [Math.floor(m/10), m%10];
  var seconds = [Math.floor(s/10), s%10];
  
  clock.$H0.css('top', (-1)*hours[0]*clock.unitHeight);
  clock.$H1.css('top', (-1)*hours[1]*clock.unitHeight);
  clock.$M0.css('top', (-1)*minutes[0]*clock.unitHeight);
  clock.$M1.css('top', (-1)*minutes[1]*clock.unitHeight);
  clock.$S0.css('top', (-1)*seconds[0]*clock.unitHeight);
  clock.$S1.css('top', (-1)*seconds[1]*clock.unitHeight);
}

$(document).ready(function(e){
  var $widgetCont = $('#widget-cont');
  var $clockCont = $('#clock-cont');
  var clock = {
    unitHeight: 26,
    $H0: $('.H0'),
    $H1: $('.H1'),
    $M0: $('.M0'),
    $M1: $('.M1'),
    $S0: $('.S0'),
    $S1: $('.S1')
  };
  center($(this), $widgetCont);
  //clock object contains 6 digit columns
  updateClock(clock);
  setTimeout(function(){
    $clockCont.removeClass('invis');
  }, 500);
  
  //center element when window is resized
  $(window).resize(function(e){
    center($(this), $widgetCont);
  });
  
  setInterval(function(){
    updateClock(clock);
  }, 1000);
 
  
});
