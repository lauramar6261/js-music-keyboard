$(document).ready( function() {
  $('button').click(function() {
     let letter = `${$(this).text()}`
     let audio = document.getElementById(letter + "Audio");
     audio.play();
  });

  document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    let audio = document.getElementById(keyName + "Audio");
    audio.play();
  });
});
