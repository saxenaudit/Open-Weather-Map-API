console.time("fetch weather");

async function getWeather() {
  const cityName = document.getElementById("city").value;
  alert("Fetching data for: " + cityName);
  let uri_weather_api =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    ",in&units=metric&appid=Your-API-Key-Here";

  //units - set to meter (could be changed to imperial)
  //appid = Your-API-Key-Here
  //in = country code (in -> india's code)
  //get all the above info from Open Weather API's Docs

  const response = await fetch(uri_weather_api); //fetching data from API
  const data = await response.json(); //convert to JSON

  console.log(data); //debug purpose
  //extracting required valued from JSON resonse
  console.log(data.main.temp);
  const icon = data.weather[0].icon;
  let uri_icon = "https://openweathermap.org/img/w/" + icon + ".png";
  console.log(uri_icon);

  //set value on frontend
  document.getElementById("icon").src = uri_icon;
  document.getElementById("temp").textContent = data.main.temp;
  document.getElementById("feels").textContent = data.main.feels_like;
  document.getElementById("humidity").textContent = data.main.humidity;
  document.getElementById("description").textContent =
    data.weather[0].description;
}

console.timeEnd("fetch weather");
