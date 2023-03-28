const secondsHand = document.querySelector(".hand.seconds");
const minutesHand = document.querySelector(".hand.minutes");
const hoursHand = document.querySelector(".hand.hours");
const secondsDigital = document.querySelector("#seconds");
const minutesDigital = document.querySelector("#minutes");
const hoursDigital = document.querySelector("#hours");

function renderDigital(time) {
  return time < 10 ? "0" + time : time;
}

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () => {
  const currentDate = new Date();

  const currentSec = currentDate.getSeconds() / 60;
  const currentMin = (currentSec + currentDate.getMinutes()) / 60;
  const currentHour = (currentMin + currentDate.getHours()) / 12;

  setRotation(secondsHand, currentSec);
  setRotation(minutesHand, currentMin);
  setRotation(hoursHand, currentHour);

  const todayDate = new Date();

  const todaySec = todayDate.getSeconds();
  const todayMin = todayDate.getMinutes();
  const todayHours = todayDate.getHours();

  secondsDigital.textContent = renderDigital(todaySec);
  minutesDigital.textContent = renderDigital(todayMin);
  hoursDigital.textContent = renderDigital(todayHours);
};

setInterval(setClock, 1000);
