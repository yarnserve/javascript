// 26a8f813a56d73684d04cdff5a1f7720
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const weather = document.querySelector(".weather");

const API_KEY = "26a8f813a56d73684d04cdff5a1f7720";

async function getWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  weather.textContent = `${data.main.temp}℃, ${data.name}`;
}

function saveCoords(coords) {
  localStorage.setItem("coords", JSON.stringify(coords));
  getWeather(coords.latitude, coords.longitude);
}

function geoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const coords = {
    latitude,
    longitude,
  };
  saveCoords(coords);
}

function geoError() {
  console.log("위치 정보를 허용하지 않았습니다.");
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(geoSucces, geoError);
}

function loadCoords() {
  const COORDS = JSON.parse(localStorage.getItem("coords"));
  getWeather(COORDS.latitude, COORDS.longitude);
}

function init() {
  if (localStorage.getItem("coords")) {
    loadCoords();
  } else {
    askCoords();
  }
}

init();
