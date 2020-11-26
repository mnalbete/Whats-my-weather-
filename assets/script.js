$(document).ready(function () {
  var searchBtn = $("#searchButton");

  function buildQuaryURL() {
    var cityEL = $("#cityName").val();
    var searchedCity = localStorage.getItem("#cityName");
    var API_KEY = "0368fc91275f10ac609c0d8c6957a966";
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityEL + '&appid=' + API_KEY;
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      var cityLat = response.coord.lat;
      var cityLon = response.coord.lon;
      var cityName = response.name;
      var cityDate = moment().format("MM/DD/YYYY");
      var cityIcon = response.weather[0].icon;
      var weatherIconURL = "http://openweathermap.org/img/w/" + cityIcon + ".png";
      var cityTemp = (response.main.temp - 273.15) * 1.80 + 32;
      var cityHum = response.main.humidity;
      var cityWind = response.wind.speed;
      cityUVURL(cityLat, cityLon);

      $("#searchedcityName").text(cityName);
      $("#searchedcityDate").text(cityDate);
      $("#searchedcityIcon").attr("src", weatherIconURL);
      $("#searchedcityTemp").text("Temp: " + cityTemp.toFixed(2) + " °F");
      $("#searchedcityHum").text("Humidity: " + cityHum + "%");
      $("#searchedcityWind").text("Wind Speed: " + cityWind);
    });
  };

  function cityUVURL(cityLat, cityLon) {
    var API_KEY = "0368fc91275f10ac609c0d8c6957a966";
    var uvURL = 'https://api.openweathermap.org/data/2.5/uvi?lat=' + cityLat + '&lon=' + cityLon + '&appid=' + API_KEY;

    $.ajax({
      url: uvURL,
      method: "GET"
    }).then(function (response) {
      // console.log(response);
      var cityUV = response.value;

      $("#searchedcityUV").text("UV Index: " + cityUV)
    });
  };

  // 5 day queryurl

  function fivedayURL() {
    var cityEL = $("#cityName").val();
    var API_KEY = "0368fc91275f10ac609c0d8c6957a966";
    var futureURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityEL + '&appid=' + API_KEY;

    $.ajax({
      url: futureURL,
      method: "GET"
    }).then(function (response) {
      console.log(response.list);

      for (var i = 0; i < 7; i++) {

        var dateOne = moment().add(i, "days").startOf("day").format("MM/DD/YYYY");
        var dateOneIcon = response.list[i].weather[0].icon;
        var dateOneIconURL = "https://openweathermap.org/img/w/" + dateOneIcon + ".png";
        var dateOneTemp = (response.list[i].main.temp - 273.15) * 1.80 + 32;
        var dateOneHum = response.list[i].main.humidity;


        $("#fivedaydate" + i).text(dateOne);
        $("#fivedayIcon" + i).attr("src", dateOneIconURL);
        $("#fivedayTemp" + i).text("Temp: " + dateOneTemp.toFixed(2) + " °F");
        $("#fivedayHum" + i).text("Humidity: " + dateOneHum + "%");

      }

    });
  };

  // search button within form 
  searchBtn.on("click", function (event) {
    event.preventDefault();
    buildQuaryURL();
    fivedayURL();
  });
});
