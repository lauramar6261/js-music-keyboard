$(document).ready( function() {
  $('button').click(function() {
    let letter = `${$(this).text()}`
     let audio = document.getElementById(letter + "Audio");
     audio.play();
  });
});
