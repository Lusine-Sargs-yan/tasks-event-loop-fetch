const displayTimer = document.querySelector("#timer");
console.log(displayTimer);
const startButton = document.querySelector(".start-btn");
const pauseButton = document.querySelector(".pause-btn");
const resetButton = document.querySelector(".reset-btn");
const userInput = document.createElement("input");

const formatTime = (temp) => {
  return temp < 10 ? '0' + temp : temp;
};

let interval;

function setTimer(duration) {
  let timer = duration;
  let minutes = parseInt(timer / 60, 10);
  let seconds = parseInt(timer % 60, 10);
  console.log(duration, 'duration1:::');

  //displayTimer.textContent = `${formatTime(minutes)}m : ${formatTime(seconds)}s`;
  

  if (--timer < 0) {
    console.log(duration, 'duration2');
    timer = duration;
    console.log(timer, 'timer');
  }
  displayTimer.textContent = `${formatTime(minutes)}m : ${formatTime(seconds)}s`;
  

  console.log(duration, 'duration:::');
  return duration;

}

function startTimer(duration) {// ինչու առանձին արգումենտ տամ, եթե setTimer=ում արդեն գրեմ եմ, նույն կոդը գրեմ՞
  // pauseTimer();
  interval = setInterval(() => {
    setTimer(300);
  }, 1000);
  console.log( interval = setInterval(() => {setTimer(); }, 1000));
}

function pauseTimer() {
  clearInterval(interval);
}

function resetTimer() {
  displayTimer.textContent = "00m : 00s";
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
setTimer(300);
