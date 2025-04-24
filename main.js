function getWeather() {
const apiKey = '8e455ceca4e833e0bfaef58aa8ef4c2a'
let city = document.getElementById('city').value;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`


//Fetch the weather data from the API
fetch(url)
.then(res => res.json() )
.then(data => {
    const name = data.name;
    const temp = data.main.temp;
    const weather = data.weather[0].main;

    document.getElementById('output').textContent = 
        `City: ${name}\nTemperature: ${temp}°C\nWeather: ${weather}`;
    })
    .catch(() => {
      document.getElementById('output').textContent = 'Error fetching weather data.';
    });
}