$(function($) {
  var init = function() {
    $(".marker").tooltip({
      position: {
        my: "left+35 center+60",
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
  var posX = $('#marker01').data('pos-x');
  var posY = $('#marker01').data('pos-y');

  $('#marker01').css('left', posX + "%");
  $('#marker01').css('top', posY + "%");
  }

  init();
  main();
});
