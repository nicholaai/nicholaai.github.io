$(function(){
  var $panel = $('#panels div');

  $panel.on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    if ($panel.eq(0).is($this)) {
      $panel.eq(1).animate( {left: "500%"}, {duration:2000, queue:false} ).delay(1000).fadeOut();
      setTimeout(function() {
        $panel.eq(2).animate( {left: "500%"}, {duration:2000, queue:false} ).delay(1000).fadeOut();
      }, 500);
      setTimeout(function() {
        $panel.eq(3).animate( {left: "600%"}, {duration:2000, queue:false} ).delay(500).fadeOut();
      }, 1000);
    } else if ($panel.eq(1).is($this)) {
      $panel.eq(1).animate( {right: "25%"}, {duration:750, queue:false} );
      setTimeout(function() {
        $panel.eq(2).animate( {left: "500%"}, {duration:2000, queue:false} ).delay(1000).fadeOut();
      }, 500);
      setTimeout(function() {
        $panel.eq(3).animate( {left: "600%"}, {duration:2000, queue:false} ).delay(500).fadeOut();
      }, 1000);
    } else if ($panel.eq(2).is($this)) {
      $panel.eq(2).animate( {right: "50%"}, {duration:1510, queue:false} );
      setTimeout(function() {
        $panel.eq(1).animate( {right: "25%"}, {duration:1000, queue:false} );
      }, 500);
      setTimeout(function() {
        $panel.eq(3).animate( {left: "600%"}, {duration:2000, queue:false} ).delay(500).fadeOut();
      }, 1000);
    } else if ($panel.eq(3).is($this)) {
      $panel.eq(3).animate( {right: "75%"}, {duration:2000, queue:false} );
      setTimeout(function() {
        $panel.eq(2).animate( {right: "50%"}, {duration:1500, queue:false} );
      }, 500);
      setTimeout(function() {
        $panel.eq(1).animate( {right: "25%"}, {duration:1000, queue:false} );
      }, 1000);
    }
  });
});
