const apiKey = "ed0ad8f86bd7b8e9af5a8176955bac29";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=london";
async function getWeather(city){
    const response = await fetch( apiUrl + "&appid=" + apiKey + "&q=" + city);
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
        document.getElementById("wind-speed").innerText = weather.wind + " m/s";
        document.getElementById("humidity").innerText = weather.humidity + "%";
    }
    else {
        alert("Error fetching weather data:", data.message);
    }
}

getWeather();