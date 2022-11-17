function aani(sound)// Tästä tulee äänet napille
{
  aani = sound.id;
  var audio = new Audio(aani+'.mp3');
  audio.play();
}

/*function stop(sound)// Tämä ei toimi
{
  aani = sound.id;
  var audio = new Audio(aani+'.mp3');
  audio.pause(this);
}*/
