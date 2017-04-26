var srcs = ["assets/img/bubble.svg", "assets/img/bubble_peach.svg", "assets/img/bubble_savana.svg", "assets/img/bubble_teal.svg"];
var srcs_f = ["assets/img/bubble_f.svg", "assets/img/bubble_peach_f.svg", "assets/img/bubble_savana_f.svg", "assets/img/bubble_teal_f.svg"];

function setSource(flipped) {
  if(flipped)
    return(srcs_f[Math.floor(Math.random() * srcs.length)]);
  else
    return(srcs[Math.floor(Math.random() * srcs.length)]);
}

function setClasses(flipped) {
  if(flipped)
    return("bg-bubble-f");
  else
    return("bg-bubble");
}

function appendImg() {
  var flipped = Math.random() < 0.5;

  $("#landing").append($("<img />")
    .attr("src", setSource(flipped))
    .attr("alt", "bubble")
    .addClass(setClasses(flipped))
    .css("width", Math.random() * 15 + 5 + "%")
    .css("left", Math.random() * 80 + "%")
    .css("top", Math.random() * 80 + "%")
  )


  if(document.getElementsByClassName('bg-bubble').length >= 30)
    clearInterval(interval);
}

var interval = setInterval(appendImg, 1000);
