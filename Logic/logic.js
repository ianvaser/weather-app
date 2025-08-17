const apiKey = "ed0ad8f86bd7b8e9af5a8176955bac29";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const defaultCity = "London";

searchBtn = document.querySelector(".search-button");
searchBox = document.querySelector(".search-box");

async function getWeather(city){
    if (!city) {
        city = defaultCity;
    }
    const response = await fetch( apiUrl + city + "&appid=" + apiKey );
    var data = await response.json();
    if (data.cod === 200) {
        const weather = {
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            wind: data.wind.speed,
            humidity: data.main.humidity,
        };
        
        document.getElementById("city-name").innerText = weather.city;
        document.getElementById("temperature").innerText = weather.temperature + "°C";
        document.getElementById("wind-speed").innerText = weather.wind + " km/h";
        document.getElementById("humidity").innerText = weather.humidity + "%";
        
        if(data.weather[0].main === "Clouds") {
            document.getElementById("weather-icon").src = "./images/clouds.png";
        }
        else if(data.weather[0].main === "Clear") {
            document.getElementById("weather-icon").src = "./images/clear.png";
        }
        else if(data.weather[0].main === "Rain") {
            document.getElementById("weather-icon").src = "./images/rain.png";
        }
        else if(data.weather[0].main === "Snow") {
            document.getElementById("weather-icon").src = "./images/snow.png";
        }
        else if(data.weather[0].main === "Drizzle") {
            document.getElementById("weather-icon").src = "./images/drizzle.png";
        }
        else if(data.weather[0].main === "Thunderstorm") {
            document.getElementById("weather-icon").src = "./images/thunderstorm.png";
        }

        document.getElementById("weather-result").style.display = "block";
    }   
    else {
        alert("No weather found for the specified city. Please try again.");
    }
}


searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const cityInput = searchBox.value.trim();
    if (cityInput) {
        getWeather(cityInput);
    } else {
        getWeather(defaultCity);
    }
});


