const displayTimer = document.querySelector('#timer');
console.log(displayTimer);
const startButton = document.querySelector('.start-btn');
const pauseButton = document.querySelector('.pause-btn');
const resetButton = document.querySelector('.reset-btn');
const userInput = document.createElement('input');

let countDowninterval;
let secondsLeftms;// milliseconds
let endTime;
let  stopBtnClicked = false;

const formatTime = (temp) => {
  return temp < 10 ? '0' + temp : temp;
};

const setTimer = (endTime) => {
  secondsLeftms = endTime - Date.now();
  const secondsLeft = Math.round(secondsLeft / 1000);
  let hours = Math.floor(secondsLeft / 3600);
  let minutes = Math.floor(secondsLeft / 60)  -(hours * 60);
  let seconds = secondsLeftms % 60;

  if(secondsLeft < 0) {
    return;
  }
  displayTimer.textContent = `${formatTime(minutes)}m : ${formatTime(seconds)}s`;


}
setTimer(300)



// let interval;

// function setTimer(duration) {
//   let timer = duration;
//   let minutes = parseInt(timer / 60, 10);
//   let seconds = parseInt(timer % 60, 10);

//   if(--timer < 0) { 
//     timer = duration; 
//   }

//   displayTimer.textContent = `${formatTime(minutes)}m : ${formatTime(seconds)}s`;
// }

// function startTimer() {
//   // pauseTimer();

//   interval = setInterval(() => {
//     setTimer();
//   }, 1000);
// }

// function pauseTimer() {
//   clearInterval(interval);
// }

// function  resetTimer() {
//  displayTimer.textContent = '00m : 00s';
// }

// startButton.addEventListener('click', startTimer);
// pauseButton.addEventListener('click', pauseTimer);
// resetButton.addEventListener('click', resetTimer);
// setTimer(300);



// const getMinutesAndSeconds = () => {
//   let secLeft = totalSeconds - timeRemaining;
//   let seconds = secLeft % 60;
//   let minutes = Math.floor(secLeft / 60);

//   return `${formatTime(minutes)}m : ${formatTime(seconds)}s`
// };
// console.log(getMinutesAndSeconds());

// const renderTimer = () => {
//   displayTimer.textContent = getMinutesAndSeconds();

//   // if(timeRemaining >= totalSeconds) {
//   //   pauseTimer();
//   // }
// };

// const startTimer = () => {

//   interval = setInterval(() => {
//     timeRemaining += 1;
//     renderTimer();

//   }, 1000);
// };

// const pauseTimer = () => {
//   clearInterval(interval);
//   renderTimer();

// }

// const resetTimer = () => {
//   clearInterval(interval);
//   displayTimer.textContent = '00m : 00s';

// };
// startButton.addEventListener('click', startTimer);
// pauseButton.addEventListener('click', pauseTimer);
// resetButton.addEventListener('click', resetTimer);



// renderTimer();

// displayTimer.textContent = 0;
// let interval;
// let currentCount = 0;
// let now = new Date().getTime();
// //console.log(now);
// let target = new Date(now + currentCount * 1000);
// //console.log(target);//Wed Mar 31 2021 12:40:45 GMT+0400 (Armenia Standard Time)

// let timeRemaining = (target - now) / 1000;
// //console.log(timeRemaining, 'mm');


// const getRemaining = (timeDuration) => {
//   // let now = new Date().getTime();
//   // console.log(now);
//   let target = new Date(now + timeDuration * 1000);
//   // console.log(target);//Wed Mar 31 2021 12:40:45 GMT+0400 (Armenia Standard Time)

//   // let timeRemaining = (target - now) / 1000;
//   // console.log(timeRemaining, 'mm');

//   let minutes = parseInt(timeRemaining / 60, 10);
//   console.log(minutes, 'minutes');
//   let seconds = parseInt(timeRemaining % 60, 10);
//   console.log(seconds, 'sec');
//   if(minutes === 0 && seconds === 0) {
//     clearInterval(interval);
//   }
//   displayTimer.textContent = `${formatTime(minutes)}m : ${formatTime(seconds)}s`;

//   timeRemaining--;


//   //return `${formatTime(minutes)}m : ${formatTime(seconds)}s`;;


// };

// console.log(getRemaining(300));

// // const renderTimer = () => {
// //   displayTimer.innerHTML = getRemaining();
// // }
// // renderTimer();

// const startTimer = () => {
//   const value = input.value;
//   if(currentCount === 0) {
//     if(isNaN(value)) {
//       alert('please enter number');
//     } else {
//       timeRemaining = value;
//       interval = setInterval(getRemaining, 1000)

//     }
//   }
// }


// getRemaining(300)
// const getMyTime = () => {
//   let remindering = getRemaining();
//   let minutes = parseInt(remindering / 60, 10);
//   let seconds = parseInt(remindering % 60, 10);
//   console.log(seconds, 'jj');
// }
// getMyTime();

//displayTimer.textContent = 0;
// let interval;
// const startTimer = (duration, display) => {
//   let timer = duration;
//   // let minutes;
//   // let seconds;

//   interval = setInterval(function() {
//     let minutes = parseInt(timer / 60, 10);
//     let seconds = parseInt(timer % 60, 10);

//     // minutes = minutes < 10 ? '0' + minutes : minutes;
//     // seconds = seconds < 10 ? '0' + seconds : seconds;

//     display.textContent = `${formatTime(minutes)}m : ${formatTime(seconds)}s`;
//     //display.style.backgroundColor = 'lightgreen';

//     if(--timer < 0) { // -- the same as -= 1;
//       timer = duration; 
//     }
    
//     if(minutes === 0 && seconds === 0) {
//       clearInterval(interval);
//     }

//   }, 1000);





// };
// // startButton.addEventListener('click', () => {
// //   console.log(displayTimer.value);
// // })

// window.onload = function() {
//   let displayElem = document.querySelector('#timer');
//   startTimer(300, displayElem);
// }

