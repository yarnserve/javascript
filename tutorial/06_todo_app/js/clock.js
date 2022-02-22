const clock = document.querySelector(".clock");

function getTime() {
  const now = new Date();

  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const HOUR = hour < 10 ? `0${hour}` : `${hour}`;
  const MIN = min < 10 ? `0${min}` : `${min}`;
  const SEC = sec < 10 ? `0${sec}` : `${sec}`;

  clock.textContent = `${HOUR}:${MIN}:${SEC}`;
}

function init() {
  getTime();
  setInterval(getTime, 50);
}

init();
