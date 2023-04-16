const API_KEY = '748f4b314dbd6bf1972fb41e4e0fde56';
const fetchData = position => {
    const { latitude, longitude } = position.coords;
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=es&units=metric&appid=${API_KEY}`)
        .then(Response => Response.json())
        .then(data => setWeatherData(data));


};
const setWeatherData = data => {
    console.log(data);
    const WeatherData = {
        location: data.name,
        description: data.weather[0].description,
        temperature: data.main.temp + "°",
    }
    Object.keys(WeatherData).forEach(key => {

        document.getElementById(key).textContent = WeatherData[key]
    });
};
const loadPage = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
};