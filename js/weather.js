const spanLocation = document.querySelector("#weather span:first-child");
const spanWeather = document.querySelector("#weather span:last-child");
const API_KEY = "4e9db12b8847366cf7888c1247b13fb7";
function onCurrent(position) {
  let lat = "37.5370815";
  let lon = "127.091646";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      spanLocation.innerText = `지역 : ${data.name}`;
      spanWeather.innerText = `날씨 : ${data.weather[0].main} 온도 : ${data.main.temp} 도 `;
    });
}
function disCurrent() {
  alert("위치할당에 실패했구마");
}
navigator.geolocation.getCurrentPosition(onCurrent, disCurrent);
