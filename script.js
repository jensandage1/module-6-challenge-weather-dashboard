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
    var fiveDayForecast1 = document.getElementById("five-day-forecast1");  
        fiveDayForecast1.innerText= dailyForecast;

    //for(let i=8; i < data2.list.length; i+=8) {
    //var forecastAll = document.querySelector(".forecast");
    //forecastAll.innerText = data2.list[i];

    var temp3 = data2.list[8].main.temp;
        var wind3 = data2.list[8].wind.speed;
        var humidity3 = data2.list[8].main.humidity;
        var dateAndTime3 = data2.list[8].dt_txt;
        JSON.parse(temp3, wind3, humidity3, dateAndTime3);
     var dailyForecast2 = dateAndTime3 + "Temperature (F): " + temp3 + "Wind: " + wind3 + "humidity: " + humidity3;  
    var fiveDayForecast2 = document.getElementById("five-day-forecast2");
    fiveDayForecast2.innerText = dailyForecast2;
   
    var temp4 = data2.list[16].main.temp;
        var wind4 = data2.list[16].wind.speed;
        var humidity4 = data2.list[16].main.humidity;
        var dateAndTime4 = data2.list[16].dt_txt;
        JSON.parse(temp4, wind4, humidity4, dateAndTime4);
     var dailyForecast3 = dateAndTime4 + "Temperature (F): " + temp4 + "Wind: " + wind4 + "humidity: " + humidity4;  
    var fiveDayForecast3 = document.getElementById("five-day-forecast3");
    fiveDayForecast3.innerText = dailyForecast3;

    var temp5 = data2.list[24].main.temp;
        var wind5 = data2.list[24].wind.speed;
        var humidity5 = data2.list[24].main.humidity;
        var dateAndTime5 = data2.list[24].dt_txt;
        JSON.parse(temp5, wind5, humidity5, dateAndTime5);
     var dailyForecast4 = dateAndTime5 + "Temperature (F): " + temp5 + "Wind: " + wind5 + "humidity: " + humidity5;  
    var fiveDayForecast4 = document.getElementById("five-day-forecast4");
    fiveDayForecast4.innerText = dailyForecast4;

    var temp6 = data2.list[32].main.temp;
        var wind6 = data2.list[32].wind.speed;
        var humidity6 = data2.list[32].main.humidity;
        var dateAndTime6 = data2.list[32].dt_txt;
        JSON.parse(temp6, wind6, humidity6, dateAndTime6);
     var dailyForecast5 = dateAndTime6 + "Temperature (F): " + temp6 + "Wind: " + wind6 + "humidity: " + humidity6;  
    var fiveDayForecast5 = document.getElementById("five-day-forecast5");
    fiveDayForecast5.innerText = dailyForecast5;
    //I know writing them all out is not the easiest way to do this, but I couldn't get the for loop to work. 
});
}

var previousCity = document.getElementById("list-item1")

function displayPreviousCity(){
    let displayOutput = localStorage.getItem("nameOfCity");
    previousCity.innerText = displayOutput;
}
displayPreviousCity();

searchBtn.addEventListener("click", function setCity () {
    let textInput = inputField.value;
    localStorage.setItem("nameOfCity", textInput);
});








//click event - display searched city current and 5 day forecast -yes
//save searched city to local storage - yes
//get from local storage and display last 5 searched cities.