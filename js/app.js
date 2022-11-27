// Selectors:
const musicContainer = document.querySelector("#music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const audio = document.querySelector("#music");
const progressContainer = document.querySelector("#progress-container");
const progress = document.querySelector("#progress");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");
const musicImage = document.querySelector(".music-image");

// Song titles:
const songs = [
  "Alan walker",
  "Dancing",
  "Dil Chahta Hai",
  "Dua Lipa",
  "Dubay",
  "Janoney",
  "Mama Cass",
  "Petula Clark",
];

let songIndex = 1;

// Load Song details
loadSong(songs[songIndex]);

// Update Song Details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
  musicImage.src = `images/${song}.jpg`;
}

// Event Listener
// Play:
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Play song function:
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

// Pause song function:
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  audio.pause();
}

// Song Confirm:
let playSongConfirm = musicContainer.classList.contains("play");

if (playSongConfirm) {
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
} else {
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");
}

// Change Song:
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// prev song function:
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// next song function:
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Time song update:
audio.addEventListener("timeupdate", updateProgress);

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  //   console.log(duration, currenTime);
  const progressPercent = (currentTime / duration) * 100;
  //   console.log(progressPercent);

  progress.style.width = `${progressPercent}%`;
  let progressWidth = progress.style.width;

  if (progressWidth === "100%") {
    playBtn.querySelector("i.fas").classList.remove("fa-pause");
    playBtn.querySelector("i.fas").classList.add("fa-play");
    cover.style.animation = "unset";
    cover.style.transform = "rotate(0deg)";
  }
}

// Click on progress bar:
progressContainer.addEventListener("click", setProgress);

function setProgress(e) {
  const width = this.clientWidth;
  //   console.log(width);
  const clickX = e.offsetX;
  //   console.log(clickX);
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

/* Start Loader JS */
$(document).ready(function () {
  var counter = 0;
  var c = 0;
  var i = setInterval(function () {
    $(".loading-page .counter h1").html(c + "%");
    $(".loading-page .counter hr").css("width", c + "%");
    counter++;
    c++;

    if (counter == 101) {
      clearInterval(i);
    }
  }, 50);
});

const loader = document.querySelector(".loader-container");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.zIndex = "-1";
  }, 5000);
});
/* End Loader JS */
