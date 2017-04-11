var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 0}});

if (/Mobi/.test(navigator.userAgent)) {
    // Test for mobile device
}

else {
  // Anything that isn't considered a mobile device

  //Welcome
  new ScrollMagic.Scene({triggerElement: "#welcome"})
    .setClassToggle("#welcome h1", "anim")
    .offset(100)
    .addTo(controller);

  //President
  new ScrollMagic.Scene({triggerElement: "#president"})
    .setClassToggle("#president-bubble01", "anim")
    .offset(250)
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#president"})
    .setClassToggle("#president h1", "anim")
    .offset(250)
    .addTo(controller);
}
