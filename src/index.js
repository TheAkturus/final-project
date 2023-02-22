function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let percievedElement = document.querySelector("#percieved");
  let pressureElement = document.querySelector("#pressure");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
  percievedElement.innerHTML = Math.round(response.data.temperature.feels_like);
  pressureElement.innerHTML = Math.round(response.data.temperature.pressure);
}

let apiKey = "o63900578bab8e2291a011f640b7t390";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Copenhagen&key=o63900578bab8e2291a011f640b7t390&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
