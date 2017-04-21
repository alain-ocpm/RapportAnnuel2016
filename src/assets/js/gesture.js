var device = document.getElementById('slider');
var wrapper = document.getElementById('wrapper');
var slideLength = $(".slide").length;

if(!/Mobi/.test(navigator.userAgent)) {
  $(device).css("display", "none");
}

else {
  $("#activities-content").css("display", "none");
}

// Calculate wrapper and individual slide with
// relative to the parent (box model ftw)
$(wrapper).css("width", slideLength * 100 + "%");
/*$(".slide")
.each(function(index) {
  $(this).css("width", 100 / slideLength + "%");
});*/
$(".slide")
.each(function(index) {
  //Might have to repeat this one on window resize?
  $(this).css("width", ($("#wrapper").width()) / slideLength + "px");
});

var offsetX = 0;
var snapPosition = 0;

function snap_to(offset) {

  var difference;
  var minimumDiff;
  var slideWidth = $(".slide:first-child").outerWidth();
  var snap;

  // Of all possible snap values, find out which is the closest
  // to current offset
  for (var i = 0; i < $(".slide").length; i++) {
    // Calculate the discrepancy between offset and possible snap loc.
    difference = Math.abs(offset - (0 - i * slideWidth));
    //console.log($("#wrapper").width());

    // Finds out if there is a better difference
    if (minimumDiff === undefined || difference < minimumDiff) {
      minimumDiff = difference;
      snap = (0 - i * slideWidth);
    }
  }

  return snap;
};

var swipeChecker = false;

/*var swipeHandler = new Hammer(device);
swipeHandler.get("swipe").set({ direction: Hammer.DIRECTION_VERTICAL });
swipeHandler
.on("swipe", function(ev) {
  console.log("swipe");
})
.on("swipeup", function(ev) {
  alert("up");
})
.on("swipedown", function(ev) {
  alert("down");
});*/

var panHandler = new Hammer(device, {touchAction: "pan-y"});
panHandler.get("pan").set({ direction: Hammer.DIRECTION_ALL });
panHandler
.on("pan", function(ev) {
  ev.preventDefault();
})
.on("panleft panright", function(ev) {
  offsetX = snapPosition + ev.deltaX;

  $(wrapper).css('-webkit-transform', 'translate3d(' + offsetX + 'px,0px,0px)');
  $(wrapper).css('transform', 'translate3d(' + offsetX + 'px,0px,0px)');
})
.on("panend", function(ev) {
    $(wrapper).addClass('animate');
    snapPosition = snap_to(offsetX);
    $(wrapper).css('-webkit-transform', 'translate3d(' + snapPosition + 'px, 0px, 0px)')
});
