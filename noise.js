$(document).ready( function() {
  $('.c').click(function() {
    let letter = `${$(this).text()}`
     let audio = document.getElementById(letter + "Audio");
     audio.play();
  });
});
