const apiKey = "0ba87f85dd567af3011a8ad16292a5e4";
const city = "Cancun,mx";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(res => res.json())
  .then(data => {
    const weather = `${data.name}: ${Math.round(data.main.temp)}°C, ${data.weather[0].description}`;
    document.getElementById("weather").textContent = weather;
  })
  .catch(() => {
    document.getElementById("weather").textContent = "Weather unavailable";
  });
