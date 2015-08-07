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
      $boardItem.eq(0).delay(1000).fadeOut();
      // $boardItem.eq(1).animate( {right: "25%"}, {duration:750, queue:false} );
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

  $('#board a.direct').on('click', function(e) {
    e.preventDefault();
    var url = this.href;
    setTimeout(function() {
      $('#content').removeClass('hidden');
    }, 2000);
    $('#content').load(url + ' #content > *').hide().fadeIn(5000);
  });

  $(document).on({
    mouseenter: function() {
      $(this).addClass('hover');
    },
    mouseleave: function() {
      $(this).removeClass('hover');
    },
    click: function(e) {
        if (!$(this).hasClass('hover')) {
          $(this).addClass('hover');
          $(this).find('.expand').css({
            bottom: 0
          })
        }
      }
    }
  }, '.img');

  $(document).load(function() {
    if (Modernizr.touch) {
      $('.close-overlay').removeClass('gone');
      $('.expand').css({
        width: 60,
        height: 60,
        bottom: '200%',
        transition: 'all 1.0s',
        WebkitTransition: 'all 1.0s',
        MozTransition: 'all 1.0s',
        Otransition: 'all 1.0s'
      });
    }
  });

  // $(document).on({
  //   click: function(e) {
  //     if (Modernizr.touch) {
  //       $('.close-overlay').removeClass('gone');
  //       if(!$(this).hasClass('hover')) {
  //         $(this).addClass('hover');
  //       }
  //     }
  //   }
  // }, '.img');
  //
  // if (Modernizr.touch) {
  //   $('.close-overlay').removeClass('gone');
  //   $('.expand').css({
  //     width: 60,
  //     height: 60,
  //     bottom: '200%',
  //     transition: 'all 1.0s',
  //     WebkitTransition: 'all 1.0s',
  //     MozTransition: 'all 1.0s',
  //     Otransition: 'all 1.0s'
  //   });
  //   $('.img').on('click', function(e) {
  //     if (!$(this).hasClass('hover')) {
  //       $(this).addClass('hover');
  //       $(this).find('.expand').css({
  //         bottom: 0
  //       })
  //     }
  //   });
  //   $('.close-overlay').on('click', function(e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     $(this).siblings('.expand').css({
  //       bottom: '200%'
  //     });
  //     if($(this).closest('.img').hasClass('hover')) {
  //       $(this).closest('.img').removeClass('hover');
  //     }
  //   });
  // } else {
  //   $('.img').on('mouseenter', function() {
  //     $(this).addClass('hover');
  //   });
  //   $('.img').on('mouseleave', function() {
  //     $(this).removeClass('hover');
  //   });
  // }

});
