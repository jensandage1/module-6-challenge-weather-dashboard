var APIKey = "4023e75f24d6e229beec978ad1d80ad9"; 

var searchBtn = document.getElementById("search-button");
var inputField = document.getElementById("search-city");
var cityName;


searchBtn.onclick = getInput;

function getInput(){
    cityName = inputField.value;
    getApi();
}

function getApi() {
    var queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=imperial`; 
    fetch(queryUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data); // This will output the data you got from the API to the console.
        var temp1 = data.main.temp;
        var wind1 = data.wind.speed;
        var humidity1 = data.main.humidity;
        var name1 = data.name;
    
        JSON.parse(temp1, wind1, humidity1, name1);
        var currentTemp = document.getElementById("temperature");//i want the current conditions for searched city to go here.
        currentTemp.innerText= "Temperature (F): " + temp1; 
        var currentWindSpeed = document.getElementById("wind-speed");
        currentWindSpeed.innerText = "Wind Speed: " + wind1;
        var currentHumidity = document.getElementById("humidity");
        currentHumidity.innerText = "Humidity: " + humidity1;
        var cityNameDisplayed = document.getElementById("city-and-date");
        cityNameDisplayed.innerText = name1;
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        getWeather(lat,lon);
    })
    .catch(function (error) {
        console.log('Error:', error); // this is not working. 
        var logErr = document.getElementById("city-conditions");
        var logErr = document.getElementById("search-city");
        logErr.innerText = "please check your spelling and try again."
    });
}

function getWeather(lat, lon) {
    var queryUrl2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`;
    fetch(queryUrl2)
    .then(function (response) {
        return response.json();
    })
    .then (function (data2) {
        var temp2 = data2.list[0].main.temp;
        var wind2 = data2.list[0].wind.speed;
        var humidity2 = data2.list[0].main.humidity;
        var dateAndTime2 = data2.list[0].dt_txt;
        JSON.parse(temp2, wind2, humidity2, dateAndTime2);
     var dailyForecast = dateAndTime2 + "Temperature (F): " + temp2 + "Wind: " + wind2 + "humidity: " + humidity2;  
        
        console.log(data2);


    //for(let i=0; i < data2.list.length; i+=8) {
    //var forecastAll = document.querySelector(".forecast");
    //forecastAll.innerText = data2.list[i];
    var fiveDayForecast1 = document.getElementById("five-day-forecast1");  
    fiveDayForecast1.innerText= dailyForecast;


    var temp22 = data2.list[8].main.temp;
        var wind22 = data2.list[8].wind.speed;
        var humidity22 = data2.list[8].main.humidity;
        var dateAndTime22 = data2.list[8].dt_txt;
        JSON.parse(temp22, wind22, humidity22, dateAndTime22);
     var dailyForecast2 = dateAndTime22 + "Temperature (F): " + temp22 + "Wind: " + wind22 + "humidity: " + humidity22;  
    var fiveDayForecast2 = document.getElementById("five-day-forecast2");
    fiveDayForecast2.innerText = dailyForecast2;
    });
}

function searchCity(){
    $(".flex-container > .search-button").click(() => {
    let textInput = $("#container > #search-city").val();
    localStorage.setItem("city" , textInput)
})
}
searchCity();


function displayPreviousCity(){
    $(".flex-container > #search-city").val(localStorage.getItem("city"));
}
displayPreviousCity();

//click event - display searched city current and 5 day forecast
//save searched city to local storage
//get from local storage and display last 5 searched cities.