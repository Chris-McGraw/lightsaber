$(document).ready(function(){

/* ----- Variable Declarations ----- */

  var saberStatus = false;
  var muteStatus = false;

  var saberOn = document.getElementById("saberOn");
  var saberIdle = document.getElementById("saberIdle");
  var saberOff = document.getElementById("saberOff");

  var saberHit_1 = document.getElementById("saberHit-1");
  var saberHit_2 = document.getElementById("saberHit-2");
  var saberHit_3 = document.getElementById("saberHit-3");
  var saberStrike_1 = document.getElementById("saberStrike-1");
  var saberStrike_2 = document.getElementById("saberStrike-2");
  var saberStrike_3 = document.getElementById("saberStrike-3");
  var bladeSounds = [saberHit_1, saberHit_2, saberHit_3, saberStrike_1, saberStrike_2, saberStrike_3];

/* ----- Function Declarations ----- */

  function muteToggle() {
    if(muteStatus === false) {
      $("#mute-button").removeClass("fa-volume-up");
      $("#mute-button").addClass("fa-volume-off");
      saberOn.muted= true;
      saberIdle.muted = true;
      saberOff.muted= true;
      bladeSounds.forEach(function(sound){
        sound.muted = true;
      });
      muteStatus = true;
    }
    else if(muteStatus === true) {
      $("#mute-button").removeClass("fa-volume-off");
      $("#mute-button").addClass("fa-volume-up");
      saberOn.muted= false;
      saberIdle.muted = false;
      saberOff.muted= false;
      bladeSounds.forEach(function(sound){
        sound.muted = false;
      });
      muteStatus = false;
    }
  }

  function playOn() {
    saberOn.volume = 0.6;
    saberOn.play();
    saberOff.pause();
    saberOff.currentTime = 0;
  }

  function playOff() {
    saberOff.volume = 0.6;
    saberOff.play();
    saberOn.pause();
    saberOn.currentTime = 0;
  }

  function playIdle() {
    saberIdle.volume = 0.5;
    saberIdle.play();
  }

  function stopIdle() {
    saberIdle.pause();
    saberIdle.currentTime = 0;
  }

  function saberToggle() {
    if(saberStatus === false) {
      playOn();
      playIdle();
      $("#blade").toggleClass("extend");
      $(".blade-tip").toggleClass("hidden");
      saberStatus = true;
    }
    else if (saberStatus === true) {
      playOff();
      stopIdle();
      $("#blade").toggleClass("extend");
      $(".blade-tip").toggleClass("hidden");
      saberStatus = false;
    }
  }

  function randomBladeSound() {
    bladeSounds.forEach(function(sound){
      sound.volume = 0.5;
      sound.pause();
      sound.currentTime = 0;
    });
    var randomNum = Math.floor((Math.random() * 6));
    bladeSounds[randomNum].play();
  }

  function bladeHitFlash() {
    $("#blade-flash").toggleClass("hidden");
    setTimeout(function() {
      $("#blade-flash").toggleClass("hidden")}, 50);
  }


/* ----- Lightsaber & Mute Toggle Function Calls ----- */
  $(".saber").on("click", function() {
    saberToggle();
  });

  $(".saber .lens-accent-top").on("click", function() {
    saberToggle();
  });

  $(".saber .lens-accent").on("click", function() {
    saberToggle();
  });

  $(".saber .emitter-accent").on("click", function() {
    saberToggle();
  });

  $(".saber .hilt-accent-top").on("click", function() {
    saberToggle();
  });

  $(".saber .hilt-accent-1").on("click", function() {
    saberToggle();
  });

  $(".saber .hilt-accent-2").on("click", function() {
    saberToggle();
  });

  $(".saber .cell-stub-left").on("click", function() {
    saberToggle();
  });

  $(".saber .cell-stub-mid").on("click", function() {
    saberToggle();
  });

  $(".saber .cell-stub-right").on("click", function() {
    saberToggle();
  });

  $("#blade").on("click", function() {
    randomBladeSound();
    bladeHitFlash();
  });

  $("#mute-button").on("click", function() {
    muteToggle();
  });
});
