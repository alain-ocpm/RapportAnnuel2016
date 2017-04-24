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

  //Activities
  new ScrollMagic.Scene({triggerElement: "#activities"})
    .setTween(TweenMax.from("#activities .section-header", 0.3, {autoAlpha: 0, ease:Linear.easeNone}))
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#activities"})
    .setTween(TweenMax.from("#activities #jar03", 0.5, {x: "-=1000", delay: 0.5, ease:Power2.easeOut}))
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#activities"})
    .setTween(TweenMax.from("#activities #jar02", 0.5, {x: "-=1000", delay: 0.8, ease:Power2.easeOut}))
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#activities"})
    .setTween(TweenMax.from("#activities #jar01", 0.5, {x: "-=1000", delay: 1.1, ease:Power2.easeOut}))
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#activities"})
    .setTween(TweenMax.from("#activities h1", 0.3, {autoAlpha: 0, x: "+=100", delay: 1.5, ease:Power1.easeOut}))
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#act-01"})
    .setTween(TweenMax.from("#act-01 .activity-header", 0.3, {autoAlpha: 0, ease:Linear.easeNone}))
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#act-02"})
    .setTween(TweenMax.from("#act-02 .activity-header", 0.3, {autoAlpha: 0, ease:Linear.easeNone}))
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#act-03"})
    .setTween(TweenMax.from("#act-03 .activity-header", 0.3, {autoAlpha: 0, ease:Linear.easeNone}))
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#act-04"})
    .setTween(TweenMax.from("#act-04 .activity-header", 0.3, {autoAlpha: 0, ease:Linear.easeNone}))
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#act-05"})
    .setTween(TweenMax.from("#act-05 .activity-header", 0.3, {autoAlpha: 0, ease:Linear.easeNone}))
    .addTo(controller);

  //Communications
  new ScrollMagic.Scene({triggerElement: "#communications"})
    .setTween(TweenMax.from("#communications .section-header", 0.3, {autoAlpha: 0, ease:Linear.easeNone}))
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#communications"})
    .setTween(TweenMax.from("#communications #speaker", 0.5, {x: "-=1000", y: "+=300", delay: 0.5, ease:Power2.easeOut}))
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#communications"})
    .setTween(TweenMax.from("#communications h1", 0.3, {autoAlpha: 0, x: "-=100", delay: 1, ease:Power1.easeOut}))
    .addTo(controller);

  //external
  new ScrollMagic.Scene({triggerElement: "#external"})
    .setTween(TweenMax.from("#external .section-header", 0.3, {autoAlpha: 0, ease:Linear.easeNone}))
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#external"})
    .setTween(TweenMax.from("#external h1", 0.3, {autoAlpha: 0, x: "-=100", delay: 0.4, ease:Power1.easeOut}))
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#external"})
    .setTween(TweenMax.to("#external #cloud01", 200, {x: "-=1000", repeat: -1, yoyo: true, ease:Linear.easeNone}))
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#external"})
    .setTween(TweenMax.to("#external #cloud02", 200, {x: "+=500", repeat: -1, yoyo: true, ease:Linear.easeNone}))
    .addTo(controller);
}
