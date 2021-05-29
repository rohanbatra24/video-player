const video = document.querySelector("video");
const progressRange = document.querySelector(".progress-range");
const progressBar = document.querySelector(".progress-bar");
const playBtn = document.getElementById("play-btn");
const volumrIcon = document.getElementById("volume-icon");

// Play & Pause ---- ------------------------------- //

const showPlayIcon = (params) => {
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
};

const togglePlay = (params) => {
  if (video.paused) {
    video.play();
    playBtn.classList.replace("fa-play", "fa-pause");
    playBtn.setAttribute("title", "Pause");
  } else {
    video.pause();
    showPlayIcon();
  }
};

//  on video end, show play btn icon

video.addEventListener("ended", showPlayIcon);

// Progress Bar ---------------------------------- //

// Volume Controls --------------------------- //

// Change Playback Speed -------------------- //

// Fullscreen ------------------------------- //

// event listners
playBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
