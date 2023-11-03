var sound = new Howl({
    src: ['musica/Moon Ride.mp3']
  });
  
  document.getElementById('playButton').addEventListener('click', function(){
    sound.play();
  });
  
  document.getElementById('pauseButton').addEventListener('click', function(){
    sound.pause();
  });
  
  document.getElementById('stopButton').addEventListener('click', function(){
    sound.stop();
  });
  
  document.getElementById('volUpButton').addEventListener('click', function(){
    var vol = sound.volume();
    vol += 0.1;
    if (vol > 1) {
      vol = 1;
    }
    sound.volume(vol);
  });
  
  document.getElementById('volDownButton').addEventListener('click', function(){
    var vol = sound.volume();
    vol -= 0.1;
    if (vol < 0) {
      vol = 0;
    }
    sound.volume(vol);
  });
  