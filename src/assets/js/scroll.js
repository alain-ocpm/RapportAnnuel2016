var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 0}});

if (/Mobi/.test(navigator.userAgent)) {
    // Test for mobile device
}

else {
  // Anything that isn't considered a mobile device

  //General
  $(".text-anim-fadeup").each(function() {
    var tween = TweenMax.from($(this), 0.3, {autoAlpha: 0, scale: 0.8, y: "+=15", ease:Power1.easeOut});
    var scene = new ScrollMagic.Scene({triggerElement: this})
                  .setTween(tween)
                  .addTo(controller);
  });

  //Welcome
  new ScrollMagic.Scene({triggerElement: "#welcome"})
    .setTween(TweenMax.from("#welcome", 0.3, {autoAlpha: 0, ease:Linear.easeNone}))
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#welcome"})
    .setTween(TweenMax.from("#welcome h1", 0.5, {autoAlpha: 0, x: "-=100", ease:Power1.easeOut}))
    .offset(100)
    .addTo(controller);

  //President
  new ScrollMagic.Scene({triggerElement: "#president"})
    .setTween(TweenMax.from("#president-bubble01", 0.5, {autoAlpha: 0, y: "+=100", ease:Power1.easeOut}))
    .offset(200)
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#president"})
    .setTween(TweenMax.from("#president h1", 0.5, {autoAlpha: 0, x: "-=100", ease:Power1.easeOut}))
    .offset(250)
    .addTo(controller);
}
