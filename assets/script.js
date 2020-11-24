$(document).ready(function () {
  var searchBtn = $("#searchButton");



  // search button within form 
  searchBtn.on("click", function (event) {
    event.preventDefault();
    // setting up var
    var cityLat;
    var cityLon;
    var cityEL = $("#cityName").val();
    var searchedCity = localStorage.getItem("#cityName");
    var API_KEY = "0368fc91275f10ac609c0d8c6957a966"


    // current weather queryURL
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityEL + '&appid=' + API_KEY;


    // 5 day queryurl
    var futureURL = 'api.openweathermap.org/data/2.5/forecast?q=' + cityEL + '&appid=' + API_KEY;


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
      var cityTemp = (response.main.temp - 273.15) * 1.80 + 32;
      console.log(cityTemp);
      var cityHum = response.main.humidity;
      console.log(cityHum);
      var cityWind = response.wind.speed;
      console.log(cityWind);
      
      // name of city date and picture
      // $("#currentCity").html("<h1>", cityName + " " + cityDate + "</h1>");

      // tempeture
      // var currentTemp = ;

      // humidity
      // var currentHum = ;

      // wind speed
      // var currentWSp = ;


      // Uv index queryurl




      // uv index

      // uvURL
      var uvURL = 'http://api.openweathermap.org/data/2.5/uvi?lat=' + cityLat + '&lon=' + cityLon + '&appid=' + API_KEY;
      // var currentUV = ;



    });



















  });









});
