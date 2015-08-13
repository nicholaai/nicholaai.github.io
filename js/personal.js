$(function(){
  var $boardItem = $('#board .board-item');
  var $content = $('#content');

  $boardItem.on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    if ($boardItem.eq(0).is($this)) {
      $boardItem.eq(1).animate({width:'toggle'},500);
      $boardItem.eq(2).animate({width:'toggle'},500);
      $boardItem.eq(3).animate({width:'toggle'},500);
    } else if ($boardItem.eq(1).is($this)) {
      $boardItem.eq(0).animate({width:'toggle'},300);
      $boardItem.eq(2).animate({width:'toggle'},600);
      $boardItem.eq(3).animate({width:'toggle'},700);
    } else if ($boardItem.eq(2).is($this)) {
      $boardItem.eq(0).animate({width:'toggle'},500);
      $boardItem.eq(1).animate({width:'toggle'},500);
      $boardItem.eq(3).animate({width:'toggle'},500);
    } else if ($boardItem.eq(3).is($this)) {
      $boardItem.eq(0).animate({width:'toggle'},700);
      $boardItem.eq(1).animate({width:'toggle'},800);
      $boardItem.eq(2).animate({width:'toggle'},900);
    }
  });

  $('#board a.direct').on('click', function(e) {
    e.preventDefault();
    var url = this.href;
    if ( $content.hasClass('hidden')) {
      setTimeout(function() {
        $content.removeClass('hidden');
      }, 2000);
      $('#content')
        .load(url + ' #content > *', function() { touchScreen(); })
        .hide()
        .fadeIn(4000);
    } else {
      $content
        .empty()
        .addClass('hidden');
    }
  });

  function touchScreen() {
    if (Modernizr.touch) {
      $('.close-overlay').removeClass('gone');
      $('.description').css('fontSize', '2em');
      $('.expand').css({
        width: 60,
        height: 60,
        bottom: '200%',
        transition: 'all 1.0s',
        WebkitTransition: 'all 1.0s',
        MozTransition: 'all 1.0s',
        Otransition: 'all 1.0s'
      });
      $('.img').on('click', function(e) {
        if (!$(this).hasClass('hover')) {
          $(this).addClass('hover');
          $(this).find('.expand').css({
            bottom: 0
          })
        }
      });
      $('.close-overlay').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).siblings('.expand').css({
          bottom: '200%'
        });
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
  }

  touchScreen();
});
