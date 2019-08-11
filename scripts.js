
  var $target = $('.topbar');
  inView('.tile').on('enter', function(el){
    var color = $(el).css('background-color');
    console.log(color);
    $target.css('background-color', color );
  });
