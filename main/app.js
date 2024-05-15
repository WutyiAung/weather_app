let searchInput = document.querySelector(".search-input");
let btn = document.querySelector(".search-btn");
let weather = document.querySelector(".weather");
let weatherIcon = document.querySelector(".weather-icon");

btn.addEventListener("click", () => {
    checkWeather(searchInput.value);
});

const apiKey ="cc36a08530754970f6fdeb225746f684";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
   const response = await fetch(apiURL + city + `&appid=${apiKey}`);
   if(response.status === 404){
    const error = document.querySelector(".error");
    error.style.display = "block";
   } else {
     var data = await response.json();
     console.log(data);
     weather.style.display = "block";

     document.querySelector(".city").textContent = data.name;
     document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
     document.querySelector(".humidity").textContent = data.main.humidity + "%";
     document.querySelector(".wind").textContent = data.wind.speed + " km/h";
     let weather_condition = data.weather[0].main;
     switch(weather_condition){
        case "Clouds":
        weatherIcon.src = "/image/brokern.png";
        break;

        case "Clear":
            weatherIcon.src = "/image/sun.png";
            break;

        case "Drizzle":
            weatherIcon.src = "/image/rain.png";
            break;

        case "Rain":
            weatherIcon.src = "/image/shower.png";
            break;

        case "Mist":
            weatherIcon.src = "/image/mist.png";
            break;

        default:
            break;
     }
     searchInput.value = "";
   }
}