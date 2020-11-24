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

      // name of city date and picture
      // var currentCity = $("<h1>")response.name;

      // tempeture
      // var currentTemp = ;

      // humidity
      // var currentHum = ;

      // wind speed
      // var currentWSp = ;


      // Uv index queryurl

      
      var uvURL = 'http://api.openweathermap.org/data/2.5/uvi?lat=' + cityLat + '&lon=' + cityLon + '&appid=' + API_KEY;

      // uv index
      // var currentUV = ;



    });



















  });









});
