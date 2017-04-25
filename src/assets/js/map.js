$(function($) {
  var init = function() {
    $(".marker").tooltip({
      position: {
        my: "left+30 center+35",
        at: "center top",
        collision: "none",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "tail" )
            .appendTo( this );
        }
      },
      classes: {
          "ui-tooltip": "bubble"
      },
    });
  }

  var main = function() {

  for(var i=0;i<$('.marker').length;i++){
    var posX = $('#marker' + i).data('pos-x');
    var posY = $('#marker' + i).data('pos-y');

    $('#marker' + i).css('left', posX + "%");
    $('#marker' + i).css('top', posY + "%");
  }

  }

  init();
  main();
});
