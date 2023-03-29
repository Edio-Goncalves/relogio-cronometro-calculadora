const minutesEl = document.querySelector("#minutess");
const secondsEl = document.querySelector("#secondss");
const millisecondsEl = document.querySelector("#millisecondss");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

function startTimer() {
  interval = setInterval(() => {
    if (!isPaused) {
      milliseconds += 10;

      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }

      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      millisecondsEl.textContent = formatMilleseconds(milliseconds);
      secondsEl.textContent = formatTimer(seconds);
      minutesEl.textContent = formatTimer(minutes);
    }
  }, 10);

  startBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

function formatTimer(time) {
  return time < 10 ? "0" + time : time;
}

function formatMilleseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
} /* padStart uma função usada com string, e time recebe numero, devemos transformar time em string `${}`*/

function pauseTimer() {
  isPaused = true;
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "block";
}

function resumeTimer() {
  isPaused = false;
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";
}

function resetTimer() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
  millisecondsEl.textContent = "000";

  pauseBtn.style.display = "none";
  resumeBtn.style.display = "none";
  startBtn.style.display = "block";
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);
