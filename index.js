const muteBtn = document.querySelector(".isMuted");
const playBtn = document.querySelector(".isPlay");
const videoConfig = document.querySelector(".videoConfig");

muteBtn.addEventListener("click", () => {
  console.log("클릭");
  if (videoConfig.muted === true) {
    videoConfig.muted = false;
  } else {
    videoConfig.muted = true;
  }
});

playBtn.addEventListener("click", () => {
  console.log("클릭");
  console.log(videoConfig.paused);
  if (videoConfig.paused === false) {
    videoConfig.pause();
  } else {
    videoConfig.play();
  }
});
