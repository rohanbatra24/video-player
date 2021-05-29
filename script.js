const video = document.querySelector("video");
const progressRange = document.querySelector(".progress-range");
const progressBar = document.querySelector(".progress-bar");
const playBtn = document.getElementById("play-btn");
const volumrIcon = document.getElementById("volume-icon");

// Play & Pause ---- ------------------------------- //
const togglePlay = (params) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

// Progress Bar ---------------------------------- //

// Volume Controls --------------------------- //

// Change Playback Speed -------------------- //

// Fullscreen ------------------------------- //

// event listners
playBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
