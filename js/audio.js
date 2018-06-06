function setSound(soundtype, sound){
  localStorage['sound'+soundtype] = sound;
  if (localStorage.Setting_SoundOn==1){
    if (soundtype == "EnvB"){
      $('#playerEnvB').html('');
      plEnvB = document.getElementById("playerEnvB");
      plEnvB.pause();
      plEnvB.currentTime = 0;
      if (sound == "stop"){$('#playerEnvB').html('');}
      if (sound == 'Nature'){
        var envNb = Math.floor(Math.random() * 4) + 1;
      	if (envNb == 1) {envBtrack ="sound/env/nature/windCricketA1.mp3";playEnvB(envBtrack);plEnvB.volume=0.2;}
      	if (envNb == 2) {envBtrack ="sound/env/nature/windCricketA2.mp3";playEnvB(envBtrack);plEnvB.volume=0.2;}
      	if (envNb == 3) {envBtrack ="sound/env/nature/windCricketB1.mp3";playEnvB(envBtrack);plEnvB.volume=0.4;}
      	if (envNb == 4) {envBtrack ="sound/env/nature/windCricketB2.mp3";playEnvB(envBtrack);plEnvB.volume=0.4;}
      }
      if (sound == 'CityCalm'){envBtrack ="sound/env/city/normal01.mp3";playEnvB(envBtrack);plEnvB.volume=1;}
      //Ambiances précises
      if (sound == "CreakingHouse"){envBtrack="sound/env/creakinghouse.mp3";playEnvB(envBtrack);plEnvB.volume=0.2;}
      //
    }
    if (soundtype == "EnvF"){
      $('#playerEnvF').html('');
      var plEnvF = document.getElementById("playerEnvF");
      plEnvF.pause();
      plEnvF.currentTime = 0;
      if (sound == 'Stream'){envFtrack ="sound/env/streamFlowing.mp3";playEnvF(envFtrack);plEnvF.volume=0.5;}
      if (sound == 'StreamAfar'){envFtrack ="sound/env/streamAfar.mp3";playEnvF(envFtrack);plEnvF.volume=0.46;}
      if (sound == "ratRun"){envFtrack="sound/env/ratRunning.mp3";playEnvF(envFtrack);plEnvF.volume=0.7;}
      if (sound == "bunchOfFlies"){envFtrack="sound/env/bunchOfFlies.mp3";playEnvF(envFtrack);plEnvF.volume=0.7;}
      if (sound == "Snoring"){envFtrack="sound/env/snoring.mp3";playEnvF(envFtrack);plEnvF.volume=0.2;}
    }
    if (soundtype == "Music"){
      $('#playerMusic').html('');
      var plMusic = document.getElementById('playerMusic');
      plMusic.pause();
      plMusic.currentTime = 0;
      if (sound == 'Intro'){
        let envNb = Math.floor(Math.random() * 4) + 1;
        if (envNb == 1) {musictrack ="sound/music/Carlos Viola - Memories.mp3";playMusic(musictrack);plMusic.volume=0.3;}
        if (envNb == 2) {musictrack ="sound/music/Carlos Viola - Rest In Peace.mp3";playMusic(musictrack);plMusic.volume=0.3;}
        if (envNb == 3) {musictrack ="sound/music/Carlos Viola - My Last Regrets.mp3";playMusic(musictrack);plMusic.volume=0.3;}
        if (envNb == 4) {musictrack ="sound/music/Carlos Viola - Letter from a friend.mp3";playMusic(musictrack);plMusic.volume=0.3;}
      }
      if (sound == 'Sunny'){
      	let envNb = Math.floor(Math.random() * 6) + 1;
      	if (envNb == 1) {musictrack ="sound/music/sunny/Derek Fiechter - Waltz of the Forest Nymphs.mp3";playMusic(musictrack);plMusic.volume=0.3;}
      	if (envNb == 2) {musictrack ="sound/music/sunny/Vivaldi - Violin Concerto in F Minor Op 8-4 Winter Largo.mp3";playMusic(musictrack);plMusic.volume=0.15;}
      	if (envNb == 3) {musictrack ="sound/music/sunny/The Flashbulb - Hello, Im Benn.mp3";playMusic(musictrack);plMusic.volume=0.3;}
      	if (envNb == 4) {musictrack ="sound/music/sunny/Evelyn Stein - Quiet Resource.mp3";playMusic(musictrack);plMusic.volume=0.3;}
      	if (envNb == 5) {musictrack ="sound/music/sunny/Ensemble Galilei - Carol Of The Birds.mp3";playMusic(musictrack);plMusic.volume=0.3;}
      	if (envNb == 6) {musictrack ="sound/music/sunny/Brandon Fiechter - Whispering Oaks.mp3";playMusic(musictrack);plMusic.volume=0.3;}
      }
      if (sound == 'CityHappy'){musictrack ="sound/music/cityHappy/Brandon Fiechter - Timber Town.mp3";playMusic(musictrack);plMusic.volume=0.1;}
      if (sound == "MystDark_House"){musictrack="sound/music/mysterious dark/Carlos Viola - A house in silence.mp3";playMusic(musictrack);plMusic.volume=0.3;}
      if (sound == "Battle1"){musictrack="sound/music/battle/Paul Haslinger - A Chance To Escape.mp3";playMusic(musictrack);plMusic.volume=0.15;}
      //
      if (sound == "stop"){$('#playerMusic').html('');}
      $("#playerMusic").bind('ended', function(){
        setSound('Music', localStorage.soundMusic);
      });
    }
    if (soundtype == "UI"){
      $('#playerUI').html('');
      var plUI = document.getElementById("playerUI");
      plUI.pause();
      plUI.currentTime = 0;
      if (sound == 'takeStuff'){UItrack ="sound/UI/stuff.mp3";playUI(UItrack);plUI.volume=0.3;}
      if (sound == 'gold'){UItrack ="sound/UI/gold.mp3";playUI(UItrack);plUI.volume=0.3;}
      if (sound == "doorKnockOpen"){UItrack="sound/UI/doorKnockOpen.mp3";playUI(UItrack);plUI.volume=0.7;}
      if (sound == "doorKnock"){UItrack="sound/UI/knockDoor.mp3";playUI(UItrack);plUI.volume=0.7;}
      if (sound == "fleshSigh"){UItrack="sound/UI/fleshSigh.mp3";playUI(UItrack);plUI.volume=0.8;}
      if (sound == "largeDoorOpen"){UItrack="sound/UI/largeDoorOpen.mp3";playUI(UItrack);plUI.volume=0.7;}
    }
  }
}
function playEnvB(track){
  plEnvB = document.getElementById("playerEnvB");
  plEnvB.load();
  plEnvB.play();
  $('#playerEnvB').html('<source type="audio/mpeg" id="sourceEnvB" src="'+track+'">');
}
function playEnvF(track){
  plEnvF = document.getElementById("playerEnvF");
  plEnvF.load();
  plEnvF.play();
  $('#playerEnvF').html('<source type="audio/mpeg" id="sourceEnvF" src="'+track+'">');
}
function playMusic(track){
  plMusic = document.getElementById("playerMusic");
  plMusic.load();
  plMusic.play();
  $('#playerMusic').html('<source type="audio/mpeg" id="sourceEnvF" src="'+track+'">');
}
function playUI(track){
  plUI = document.getElementById("playerUI");
  plUI.load();
  plUI.play();
  $('#playerUI').html('<source type="audio/mpeg" id="sourceEnvF" src="'+track+'">');
}
