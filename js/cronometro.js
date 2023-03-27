const startBtn = document.querySelector("[data-start]");
const pauseBtn = document.querySelector("[data-pause]");
const stopBtn = document.querySelector("[data-stop]");
const timeEl = document.querySelector("[data-time]");

let interval;
let sec = 0,
  min = 0,
  hr = 0;

const renderTimer = (hr, min, sec) => {
  const hrValue = hr < 10 ? "0" + hr : hr;
  const minlue = min < 10 ? "0" + min : min;
  const secValue = sec < 10 ? "0" + sec : sec;

  timeEl.innerHTML = hrValue + ":" + minlue + ":" + secValue;
};

function startTimer(startValue) {
  startBtn.setAttribute("disabled", "true");
  startBtn.innerHTML = "Start";
  pauseBtn.removeAttribute("disabled");
  stopBtn.removeAttribute("disabled");

  if (startValue === "start" || startValue === "restart") {
    (hr = 0), (min = 0), (sec = sec != 0 ? -1 : 0);

    interval = setInterval(() => {
      sec++;
      while (sec === 60) {
        sec = 0;
        min++;
      }
      while (min === 60) {
        min = 0;
        hr++;
      }
      renderTimer(hr, min, sec);
    }, 1000);
  } else if (startValue === "continue") {
    interval = setInterval(() => {
      sec++;
      while (sec === 60) {
        sec = 0;
        min++;
      }
      while (min === 60) {
        min = 0;
        hr++;
      }
      renderTimer(hr, min, sec);
    }, 1000);
  }
}

const pauseTimer = () => {
  startBtn.removeAttribute("disabled");
  startBtn.setAttribute("data-start", "continue");
  startBtn.innerHTML = "Continuar";
  pauseBtn.setAttribute("disabled", "true");
  clearInterval(interval);
};

const stopTime = () => {
  startBtn.removeAttribute("disabled");
  startBtn.setAttribute("data-start", "restart");
  pauseBtn.setAttribute("disabled", "true");
  stopBtn.setAttribute("disabled", "true");
  startBtn.innerHTML = "Reiniciar";
  clearInterval(interval);
};

startBtn.addEventListener("click", () => {
  const startValue = startBtn.getAttribute("data-start");
  startTimer(startValue);
});

pauseBtn.addEventListener("click", () => {
  pauseTimer();
});

stopBtn.addEventListener("click", () => {
  stopTime();
});
