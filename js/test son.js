function setSound(soundtype, sound){
  localStorage['sound'+soundtype] = sound;
  if (localStorage.Setting_SoundOn==1){
    // localStorage['audiotype'+soundtype] = sound;
    // window.open("audio"+soundtype+".html", "audio"+soundtype);
    if (soundtype == "EnvB"){
      plEnvB = document.getElementById("playerEnvB");
      if (sound == 'Nature'){
        var envNb = Math.floor(Math.random() * 4) + 1;
      	if (envNb == 1) {track ="sound/env/nature/windCricketA1.mp3";EnvBvolume=0;}
      	if (envNb == 2) {track ="sound/env/nature/windCricketA2.mp3";EnvBvolume=0;}
      	if (envNb == 3) {track ="sound/env/nature/windCricketB1.mp3";EnvBvolume=0;}
      	if (envNb == 4) {track ="sound/env/nature/windCricketB2.mp3";EnvBvolume=0;}
      }
      if (sound == 'CityCalm'){track ="sound/env/city/normal01.mp3";EnvBvolume=1;}
      //Ambiances précises
      if (sound == "CreakingHouse"){track="sound/env/creakinghouse.mp3";EnvBvolume=0.2;}
      //
      $('#playerEnvB').html('<source type="audio/mpeg" id="sourceEnvB" src="'+track+'">');
      if (sound == "None"){$('#playerEnvB').html('');}
      document.getElementById("playerEnvB").volume = EnvBvolume;
    }
    if (soundtype == "EnvF"){
      var playerEnvF = document.getElementById("playerEnvF");
      if (sound == 'Stream'){track ="sound/env/streamFlowing.mp3";EnvFvolume=0.5;}
      if (sound == 'StreamAfar'){track ="sound/env/streamAfar.mp3";EnvFvolume=0.46;}
      if (sound == "ratRun"){track="sound/env/ratRunning.mp3";EnvFvolume=0.7;}
      if (sound == "bunchOfFlies"){track="sound/env/bunchOfFlies.mp3";EnvFvolume=0.7;}
      if (sound == "Snoring"){track="sound/env/snoring.mp3";EnvFvolume=0.2;}
      //
      $('#playerEnvF').html('<source type="audio/mpeg" id="sourceEnvF" src="'+track+'">');
      if (sound == "None"){$('#playerEnvF').html('');}
      document.getElementById("playerEnvF").volume = EnvFvolume;
    }
    if (soundtype == "Music"){
      var playerMusic = document.getElementById('playerMusic');
      if (sound == 'Intro'){
        var envNb = Math.floor(Math.random() * 4) + 1;
        if (envNb == 1) {track ="sound/music/Carlos Viola - Memories.mp3";Musicvolume=0.3;}
        if (envNb == 2) {track ="sound/music/Carlos Viola - Rest In Peace.mp3";Musicvolume=0.3;}
        if (envNb == 3) {track ="sound/music/Carlos Viola - My Last Regrets.mp3";Musicvolume=0.3;}
        if (envNb == 4) {track ="sound/music/Carlos Viola - Letter from a friend.mp3";Musicvolume=0.3;}
      }
      if (sound == 'Sunny'){
      	var envNb = Math.floor(Math.random() * 6) + 1;
      	if (envNb == 1) {track ="sound/music/sunny/Derek Fiechter - Waltz of the Forest Nymphs.mp3";Musicvolume=0.3;}
      	if (envNb == 2) {track ="sound/music/sunny/Vivaldi - Violin Concerto in F Minor Op 8-4 Winter Largo.mp3";Musicvolume=0.15;}
      	if (envNb == 3) {track ="sound/music/sunny/The Flashbulb - Hello, Im Benn.mp3";Musicvolume=0.3;}
      	if (envNb == 4) {track ="sound/music/sunny/Evelyn Stein - Quiet Resource.mp3";Musicvolume=0.3;}
      	if (envNb == 5) {track ="sound/music/sunny/Ensemble Galilei - Carol Of The Birds.mp3";Musicvolume=0.3;}
      	if (envNb == 6) {track ="sound/music/sunny/Brandon Fiechter - Whispering Oaks.mp3";Musicvolume=0.3;}
      }
      if (sound == 'CityHappy'){track ="sound/music/cityHappy/Brandon Fiechter - Timber Town.mp3";Musicvolume=0.1;}
      if (sound == "MystDark_House"){track="sound/music/mysterious dark/Carlos Viola - A house in silence.mp3";Musicvolume=0.3;}
      if (sound == "Battle1"){track="sound/music/battle/Paul Haslinger - A Chance To Escape.mp3";Musicvolume=0.15;}
      //
      $('#playerMusic').html('<source type="audio/mpeg" id="sourceMusic" src="'+track+'">');
      if (sound == "None"){$('#playerMusic').html('');}
      document.getElementById("playerMusic").volume = Musicvolume;
      $("#playerMusic").bind('ended', function(){
        alert("Player stopped");
        setSound('Music', localStorage.soundMusic);
      });
    }
  }
}
