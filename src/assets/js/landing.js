/*var img = "<div class='bg-bubble'></div>"

$("#landing").append(img);*/

var srcs = ["assets/img/bubble.svg", "assets/img/bubble_peach.svg", "assets/img/bubble_savana.svg", "assets/img/bubble_sky.svg", "assets/img/bubble_teal.svg"];
var srcs_f = ["assets/img/bubble_f.svg", "assets/img/bubble_peach_f.svg", "assets/img/bubble_savana_f.svg", "assets/img/bubble_sky_f.svg", "assets/img/bubble_teal_f.svg"];

function setSource(flipped) {
  if(flipped)
    return(srcs_f[Math.floor(Math.random() * srcs.length)]);
  else
    return(srcs[Math.floor(Math.random() * srcs.length)]);
}

function setClasses() {
  if(Math.random() < 0.5)
    return("bg-bubble");
  else
    return("bg-bubble-f");

}

function appendImg() {
  var flipped = Math.random() < 0.5;

  if(flipped){
    $("#landing").append($("<img />")
      .attr("src", setSource(flipped))
      .attr("alt", "bubble")
      .addClass("bg-bubble-f")
      .css("width", Math.random() * 30 + 10 + "%")
    )
  }

  else{
    $("#landing").append($("<img />")
      .attr("src", setSource(flipped))
      .attr("alt", "bubble")
      .addClass("bg-bubble")
      .css("width", Math.random() * 30 + 10 + "%")
    )
  }

  if(document.getElementsByClassName('bg-bubble').length >= 15)
    clearInterval(interval);
}

var interval = setInterval(appendImg, 1000);
