$(document).ready(function() {
  $("#trigger-about").click(function() {
    $('#content').children().hide();
    $('#about').show();
  });

  $("#trigger-venues").click(function() {
    $('#content').children().hide();
    $('#venues').show();
  });

  $("#trigger-rules").click(function() {
    $('#content').children().hide();
    $('#rules').show();
  });

  $("#trigger-links").click(function() {
    $('#content').children().hide();
    $('#links').show();
  });
});
