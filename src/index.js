function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let percievedElement = document.querySelector("#percieved");
  let pressureElement = document.querySelector("#pressure");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
  percievedElement.innerHTML = Math.round(response.data.temperature.feels_like);
  pressureElement.innerHTML = Math.round(response.data.temperature.pressure);
  dateElement.innerHTML = formatDate(response.data.time * 1000);
}

let apiKey = "o63900578bab8e2291a011f640b7t390";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Copenhagen&key=o63900578bab8e2291a011f640b7t390&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
