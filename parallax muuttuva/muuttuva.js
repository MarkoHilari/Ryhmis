function aani(sound)
{
  aani = sound.id;
  var audio = new Audio(aani+'.mp3');
  audio.play();

}

function stop(sound){
  aani2 = sound.id;
  var audio = new Audio(aani2+'.mp3');
  audio.stop();
}
