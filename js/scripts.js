$(document).ready(function() {
  $("#trigger-about").click(function() {
    $('.content').hide();
    $('#about').show();
  });

  $("#trigger-rules").click(function() {
    $('.content').hide();
    $('#rules').show();
  });

  $("#trigger-links").click(function() {
    $('.content').hide();
    $('#links').show();
  });
});
