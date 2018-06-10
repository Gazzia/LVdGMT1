function setSound(soundtype, sound) {
  localStorage['sound' + soundtype] = sound;
  if (soundtype == "EnvB") {
    plEnvB = document.getElementById("playerEnvB");
    if (sound == "stop") {
      $('#playerEnvB').html('');
      plEnvB.pause();
      plEnvB.currentTime = 0;
    }
    if (sound == 'Nature') {
      var envNb = Math.floor(Math.random() * 4) + 1;
      if (envNb == 1) {
        envBtrack = "sound/env/nature/windCricketA1.mp3";
        playEnvB(envBtrack);
        plEnvB.volume = 0.2;
      }
      if (envNb == 2) {
        envBtrack = "sound/env/nature/windCricketA2.mp3";
        playEnvB(envBtrack);
        plEnvB.volume = 0.2;
      }
      if (envNb == 3) {
        envBtrack = "sound/env/nature/windCricketB1.mp3";
        playEnvB(envBtrack);
        plEnvB.volume = 0.4;
      }
      if (envNb == 4) {
        envBtrack = "sound/env/nature/windCricketB2.mp3";
        playEnvB(envBtrack);
        plEnvB.volume = 0.4;
      }
    }
    if (sound == 'CityCalm') {
      envBtrack = "sound/env/city/normal01.mp3";
      playEnvB(envBtrack);
      plEnvB.volume = 1;
    }
    //Ambiances précises
    if (sound == "CreakingHouse") {
      envBtrack = "sound/env/creakinghouse.mp3";
      playEnvB(envBtrack);
      plEnvB.volume = 0.2;
    }
    //
  }
  if (soundtype == "EnvF") {
    var plEnvF = document.getElementById("playerEnvF");
    if (sound == "stop") {
      $('#playerEnvF').html('');
      plEnvF.pause();
      plEnvF.currentTime = 0;
    }
    if (sound == 'Stream') {
      envFtrack = "sound/env/streamFlowing.mp3";
      playEnvF(envFtrack);
      plEnvF.volume = 0.5;
    }
    if (sound == 'StreamAfar') {
      envFtrack = "sound/env/streamAfar.mp3";
      playEnvF(envFtrack);
      plEnvF.volume = 0.46;
    }
    if (sound == "ratRun") {
      envFtrack = "sound/env/ratRunning.mp3";
      playEnvF(envFtrack);
      plEnvF.volume = 0.7;
    }
    if (sound == "bunchOfFlies") {
      envFtrack = "sound/env/bunchOfFlies.mp3";
      playEnvF(envFtrack);
      plEnvF.volume = 0.7;
    }
    if (sound == "Snoring") {
      envFtrack = "sound/env/snoring.mp3";
      playEnvF(envFtrack);
      plEnvF.volume = 0.2;
    }
  }
  if (soundtype == "UI") {
    $('#playerUI').html('');
    var plUI = document.getElementById("playerUI");
    plUI.pause();
    plUI.currentTime = 0;
    if (sound == 'takeStuff') {
      UItrack = "sound/UI/stuff.mp3";
      playUI(UItrack);
      plUI.volume = 0.3;
    }
    if (sound == 'gold') {
      UItrack = "sound/UI/gold.mp3";
      playUI(UItrack);
      plUI.volume = 0.3;
    }
    if (sound == "doorKnockOpen") {
      UItrack = "sound/UI/doorKnockOpen.mp3";
      playUI(UItrack);
      plUI.volume = 0.7;
    }
    if (sound == "doorKnock") {
      UItrack = "sound/UI/knockDoor.mp3";
      playUI(UItrack);
      plUI.volume = 0.7;
    }
    if (sound == "fleshSigh") {
      UItrack = "sound/UI/fleshSigh.mp3";
      playUI(UItrack);
      plUI.volume = 0.8;
    }
    if (sound == "largeDoorOpen") {
      UItrack = "sound/UI/largeDoorOpen.mp3";
      playUI(UItrack);
      plUI.volume = 0.7;
    }
  }
  if (soundtype == "Music") {
    var plMusic = document.getElementById('playerMusic');
    if (sound == 'Intro') {
      let envNb = Math.floor(Math.random() * 4) + 1;
      if (envNb == 1) {
        musictrack = "sound/music/CarlosViolaMemories.mp3";
        playMusic(musictrack);
        plMusic.volume = 0.3;
      }
      //Carlos Viola - Memories
      if (envNb == 2) {
        musictrack = "sound/music/CarlosViolaRestInPeace.mp3";
        playMusic(musictrack);
        plMusic.volume = 0.3;
      }
      //Carlos Viola - Rest In Peace
      if (envNb == 3) {
        musictrack = "sound/music/CarlosViolaMyLastRegrets.mp3";
        playMusic(musictrack);
        plMusic.volume = 0.3;
      }
      //Carlos Viola - My Last Regrets
      if (envNb == 4) {
        musictrack = "sound/music/CarlosViolaLetterFromAFriend.mp3";
        playMusic(musictrack);
        plMusic.volume = 0.3;
      }
      //Carlos Viola - Letter from a friend
    }
    if (sound == 'Sunny') {
      let envNb = Math.floor(Math.random() * 6) + 1;
      if (envNb == 1) {
        musictrack = "sound/music/sunny/DerekFiechterWaltzOfTheForestNymphs.mp3";
        playMusic(musictrack);
        plMusic.volume = 0.3;
      }
      //Derek Fiechter - Waltz of the Forest Nymphs
      if (envNb == 2) {
        musictrack = "sound/music/sunny/VivaldiViolinConcertoInFMin.mp3";
        playMusic(musictrack);
        plMusic.volume = 0.15;
      }
      //Vivaldi - Violin Concerto in F Minor Op 8-4 Winter Largo
      if (envNb == 3) {
        musictrack = "sound/music/sunny/TheFlashbulbHelloImBenn.mp3";
        playMusic(musictrack);
        plMusic.volume = 0.25;
      }
      //The Flashbulb - Hello, Im Benn
      if (envNb == 4) {
        musictrack = "sound/music/sunny/EvelynSteinQuietResource.mp3";
        playMusic(musictrack);
        plMusic.volume = 0.25;
      }
      //Evelyn Stein - Quiet Resource
      if (envNb == 5) {
        musictrack = "sound/music/sunny/EnsembleGalileiCarolOfTheBirds.mp3";
        playMusic(musictrack);
        plMusic.volume = 0.25;
      }
      //Ensemble Galilei - Carol Of The Birds
      if (envNb == 6) {
        musictrack = "sound/music/sunny/BrandonFiechterWhisperingOaks.mp3";
        playMusic(musictrack);
        plMusic.volume = 0.25;
      }
      //Brandon Fiechter - Whispering Oaks
    }
    if (sound == 'CityHappy') {
      musictrack = "sound/music/cityHappy/Brandon Fiechter - Timber Town.mp3";
      playMusic(musictrack);
      plMusic.volume = 0.1;
    }
    if (sound == "MystDark_House") {
      musictrack = "sound/music/mysterious dark/Carlos Viola - A house in silence.mp3";
      playMusic(musictrack);
      plMusic.volume = 0.3;
    }
    if (sound == "Battle1") {
      musictrack = "sound/music/battle/Paul Haslinger - A Chance To Escape.mp3";
      playMusic(musictrack);
      plMusic.volume = 0.15;
    }
    //
    if (sound == "stop") {
      $('#playerMusic').html('');
      plMusic.pause();
      plMusic.currentTime = 0;
    }
    $("#playerMusic").bind('ended', function() {
      setSound('Music', localStorage.soundMusic);
    });
  }
}

function playEnvB(track) {
  plEnvB = document.getElementById("playerEnvB");
  if (localStorage.Setting_SoundOn == 1) {
    if (track != $("#sourceEnvB").attr('src')) {
      $('#playerEnvB').html('');
      plEnvB.pause();
      plEnvB.currentTime = 0;
      $('#playerEnvB').html('<source type="audio/mpeg" id="sourceEnvB" src="' + track + '">');
      plEnvB.load();
      plEnvB.play();
    } else {
      if (plEnvB.paused == true) {
        plEnvB.play();
      }
    }
  }
}

function playEnvF(track) {
  plEnvF = document.getElementById("playerEnvF");
  if (localStorage.Setting_SoundOn == 1) {
    if (track != $("#sourceEnvF").attr('src')) {
      $('#playerEnvF').html('');
      plEnvF.pause();
      plEnvF.currentTime = 0;
      $('#playerEnvF').html('<source type="audio/mpeg" id="sourceEnvF" src="' + track + '">');
      plEnvF.load();
      plEnvF.play();
    } else {
      if (plEnvF.paused == true) {
        plEnvF.play();
      }
    }
  }
}

function playMusic(track) {
  plMusic = document.getElementById("playerMusic");
  if (localStorage.Setting_MusicOn == 1) {
    if (track != $("#sourceMusic").attr('src')) {
      $('#playerMusic').html('');
      plMusic.pause();
      plMusic.currentTime = 0;
      $('#playerMusic').html('<source type="audio/mpeg" id="sourceMusic" src="' + track + '">');
      plMusic.load();
      plMusic.play();
    } else {
      if (plMusic.paused == true) {
        plMusic.play();
      }
    }
  }
}

function playUI(track) {
  if (localStorage.Setting_SoundOn == 1) {
    plUI = document.getElementById("playerUI");
    plUI.load();
    plUI.play();
    $('#playerUI').html('<source type="audio/mpeg" id="sourceUI" src="' + track + '">');
  }
}

function pauseSound() {
  plEnvB = document.getElementById("playerEnvB");
  plEnvF = document.getElementById("playerEnvF");
  $('#playerEnvF').html('');
  plEnvF.pause();
  plEnvF.currentTime = 0;
  $('#playerEnvB').html('');
  plEnvB.pause();
  plEnvB.currentTime = 0;
}

function restartSound() {
  setSound('EnvB', localStorage.soundEnvB);
  setSound('EnvF', localStorage.soundEnvF);
}

function pauseMusic() {
  plMusic = document.getElementById("playerMusic");
  $('#playerMusic').html('');
  plMusic.pause();
  plMusic.currentTime = 0;
}

function restartMusic() {
  setSound('Music', localStorage.soundMusic);
}
