let currentAudio ;

function psx() {
  if (currentAudio) {
    currentAudio.pause();
    
  }
  currentAudio = new Audio("sounds/PS1 Startup - QuickSounds.com.mp3");
  currentAudio.play();
}

function ps2() {
  if (currentAudio) {
    currentAudio.pause();
    
  }
  currentAudio = new Audio("sounds/PS2 Startup Screen - QuickSounds.com.mp3");
  currentAudio.play();
}

function ps3() {
  if (currentAudio) {
    currentAudio.pause();
   
  }
  currentAudio = new Audio("sounds/ps3-fat-startup.mp3");
  currentAudio.play();
}

function ps4() {
  if (currentAudio) {
    currentAudio.pause();
    
  }
  currentAudio = new Audio("sounds/PS4 Startup - QuickSounds.com.mp3");
  currentAudio.play();
}

function ps5() {
  if (currentAudio) {
    currentAudio.pause();
    
  }
  currentAudio = new Audio("sounds/ps5_start.mp3");
  currentAudio.play();
}

function win7() {
  if (currentAudio) {
    currentAudio.pause();
   
  }
  currentAudio = new Audio("sounds/windows-7-startup.mp3");
  currentAudio.play();
}

function winxp() {
  if (currentAudio) {
    currentAudio.pause();
   
  }
  currentAudio = new Audio("sounds/windows-xp-startup.mp3");
  currentAudio.play();
}

function win11() {
  if (currentAudio) {
    currentAudio.pause();
    
  }
  currentAudio = new Audio("sounds/windows-11-startup-sound-effect.mp3");
  currentAudio.play();
}
