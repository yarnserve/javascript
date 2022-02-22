// 26a8f813a56d73684d04cdff5a1f7720
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const weather = document.querySelector(".weather");

function geoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(latitude);
  console.log(longitude);
}

function geoError() {
  console.log("위치 정보를 허용하지 않았습니다.");
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(geoSucces, geoError);
}

function init() {
  askCoords();
}

init();
