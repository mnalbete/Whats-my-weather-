$(document).ready(function () {
  var searchBtn = $("#searchButton");

  function buildQuaryURL() {
    var cityEL = $("#cityName").val();
    var searchedCity = localStorage.getItem("#cityName");
    var API_KEY = "0368fc91275f10ac609c0d8c6957a966";

    // current weather queryURL
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityEL + '&appid=' + API_KEY;

    // ajax 
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);

      // current city search requirements
      
      var cityLat = response.coord.lat;
      console.log(cityLat);
      var cityLon = response.coord.lon;
      console.log(cityLon);
      var cityName = response.name;
      console.log(cityName);
      var cityDate = moment().format("MM/DD/YYYY");
      console.log(cityDate);
      var cityIcon = response.weather[0].icon;
      console.log(cityIcon);
      var weatherIconURL = "http://openweathermap.org/img/w/"+ cityIcon +".png";
      console.log(weatherIconURL);
      var cityTemp = (response.main.temp - 273.15) * 1.80 + 32;
      console.log(cityTemp);
      var cityHum = response.main.humidity;
      console.log(cityHum);
      var cityWind = response.wind.speed;
      console.log(cityWind);
      cityUVURL(cityLat, cityLon);
      
      
      $("#searchedcityName").text(cityName); 
      $("#searchedcityDate").text(cityDate);
      $("#searchedcityIcon").(weatherIconURL);
      
      // temp hum and wind
      $("#searchedcityTemp").text(cityTemp);
      $("#searchedcityHum").text(cityHum);
      $("#searchedcityWind").text(cityWind);
    


    });

  };

  function cityUVURL(cityLat, cityLon) {
    var API_KEY = "0368fc91275f10ac609c0d8c6957a966";
    var uvURL = 'http://api.openweathermap.org/data/2.5/uvi?lat=' + cityLat + '&lon=' + cityLon + '&appid=' + API_KEY;

    $.ajax({
      url: uvURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      var cityUV = response.value;
      // uv
      $("#searchedcityUV").text(cityUV)
    });
  };


  function fivedayURL() {
    // 5 day queryurl
    var cityEL = $("#cityName").val();
    var API_KEY = "0368fc91275f10ac609c0d8c6957a966";
    var futureURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityEL + '&appid=' + API_KEY;

    $.ajax({
      url: futureURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    });

  };



  // search button within form 
  searchBtn.on("click", function (event) {
    event.preventDefault();
    buildQuaryURL();
    fivedayURL();
  });








});
