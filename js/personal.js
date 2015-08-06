$(function(){
  var $boardItem = $('#board .board-item');

  $boardItem.on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    if ($boardItem.eq(0).is($this)) {
      $boardItem.eq(1).animate( {left: "500%"}, {duration:2000, queue:false} ).delay(1000).fadeOut();
      setTimeout(function() {
        $boardItem.eq(2).animate( {left: "500%"}, {duration:2000, queue:false} ).delay(1000).fadeOut();
      }, 500);
      setTimeout(function() {
        $boardItem.eq(3).animate( {left: "600%"}, {duration:2000, queue:false} ).delay(500).fadeOut();
      }, 1000);
    } else if ($boardItem.eq(1).is($this)) {
      $boardItem.eq(1).animate( {right: "25%"}, {duration:750, queue:false} );
      setTimeout(function() {
        $boardItem.eq(2).animate( {left: "500%"}, {duration:2000, queue:false} ).delay(1000).fadeOut();
      }, 500);
      setTimeout(function() {
        $boardItem.eq(3).animate( {left: "600%"}, {duration:2000, queue:false} ).delay(500).fadeOut();
      }, 1000);
    } else if ($boardItem.eq(2).is($this)) {
      $boardItem.eq(2).animate( {right: "50%"}, {duration:1510, queue:false} );
      setTimeout(function() {
        $boardItem.eq(1).animate( {right: "25%"}, {duration:1000, queue:false} );
      }, 500);
      setTimeout(function() {
        $boardItem.eq(3).animate( {left: "600%"}, {duration:2000, queue:false} ).delay(500).fadeOut();
      }, 1000);
    } else if ($boardItem.eq(3).is($this)) {
      $boardItem.eq(3).animate( {right: "75%"}, {duration:2000, queue:false} );
      setTimeout(function() {
        $boardItem.eq(2).animate( {right: "50%"}, {duration:1500, queue:false} );
      }, 500);
      setTimeout(function() {
        $boardItem.eq(1).animate( {right: "25%"}, {duration:1000, queue:false} );
      }, 1000);
    }
  });

  if (Modernizr.touch) {
    $('.close-overlay').removeClass('gone');
    $('.img').on('click', function(e) {
      e.preventDefault();
      if (!$(this).hasClass('hover')) {
        $(this).addClass('hover');
      }
    });
    $('.close-overlay').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if($(this).closest('.img').hasClass('hover')) {
        $(this).closest('.img').removeClass('hover');
      }
    });
  } else {
    $('.img').on('mouseenter', function() {
      $(this).addClass('hover');
    });
    $('.img').on('mouseleave', function() {
      $(this).removeClass('hover');
    });
  }
});
