
const apikey = "55945ba9759b368a40b7952203297d85";
const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=`;


const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherimg"); // ✅ This line fixes the error

async function checkweather(city) {
  const response = await fetch(`${apiurl}${city}&units=metric&appid=${apikey}`);

  if (response.status === 401) {
    alert("Invalid API Key");
    return;
  }
  if (response.status === 404) {
    alert("City not found");
    return;
  }

  const data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "clear.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "mist.png";
  } else if (data.weather[0].main === "Snow") {
    weatherIcon.src = "snow.png";
  } 
console.log("Weather:", data.weather[0].main);
console.log("Image path:", weatherIcon.src);
}
    searchbtn.addEventListener("click", () => {
        checkweather(search.value);
    });


