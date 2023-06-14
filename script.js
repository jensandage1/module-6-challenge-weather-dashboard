var APIKey = "4023e75f24d6e229beec978ad1d80ad9"; 

var searchBtn = document.getElementById("search-button");
var inputField = document.getElementById("search-city");
var cityName;
var citiesForm = document.getElementById("cities-form");



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
        var currentDate = dayjs().format('MM/DD/YYYY');
        cityNameDisplayed.innerText = name1 + " - " +  currentDate ;
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
        var dateOnly = dateAndTime2.split(" ")[0] ;
        JSON.parse(temp2, wind2, humidity2, dateAndTime2);
     var dailyForecast = dateOnly + "\n" + "Temp (F): " + temp2 + "\n" +  " Wind: " + wind2 + " MPH" + "\n" + " Humidity: " + humidity2 + "%";  
        
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
        var dateOnly = dateAndTime3.split(" ")[0] ;
        JSON.parse(temp3, wind3, humidity3, dateAndTime3);
     var dailyForecast2 = dateOnly + "\n" + "Temp (F): " + temp3 +  "\n" +"Wind: " + wind3 + " MPH" + "\n" + "Humidity: " + humidity3 + "%";  
    var fiveDayForecast2 = document.getElementById("five-day-forecast2");
    fiveDayForecast2.innerText = dailyForecast2;

   
    var temp4 = data2.list[16].main.temp;
        var wind4 = data2.list[16].wind.speed;
        var humidity4 = data2.list[16].main.humidity;
        var dateAndTime4 = data2.list[16].dt_txt;
        var dateOnly = dateAndTime4.split(" ")[0] ;
        JSON.parse(temp4, wind4, humidity4, dateAndTime4);
     var dailyForecast3 = dateOnly + "\n" + "Temp (F): " +  temp4 + "\n" + "Wind: " + wind4 + " MPH" + "\n" + "Humidity: " + humidity4 + "%";  
    var fiveDayForecast3 = document.getElementById("five-day-forecast3");
    fiveDayForecast3.innerText = dailyForecast3;

    var temp5 = data2.list[24].main.temp;
        var wind5 = data2.list[24].wind.speed;
        var humidity5 = data2.list[24].main.humidity;
        var dateAndTime5 = data2.list[24].dt_txt;
        var dateOnly = dateAndTime5.split(" ")[0] ;
        JSON.parse(temp5, wind5, humidity5, dateAndTime5);
     var dailyForecast4 = dateOnly + "\n" + "Temp (F): " + temp5 + "\n" + "Wind: "  + wind5 + " MPH" +  "\n" + "Humidity: " + humidity5 + "%";  
    var fiveDayForecast4 = document.getElementById("five-day-forecast4");
    fiveDayForecast4.innerText = dailyForecast4;

    var temp6 = data2.list[32].main.temp;
        var wind6 = data2.list[32].wind.speed;
        var humidity6 = data2.list[32].main.humidity;
        var dateAndTime6 = data2.list[32].dt_txt;
        var dateOnly = dateAndTime6.split(" ")[0] ;
        JSON.parse(temp6, wind6, humidity6, dateAndTime6);
     var dailyForecast5 = dateOnly + "\n" + "Temp (F): " + temp6 + "\n" + "Wind: " + " MPH" + wind6 + "\n" + "Humidity: " + humidity6 + "%";  
    var fiveDayForecast5 = document.getElementById("five-day-forecast5");
    fiveDayForecast5.innerText = dailyForecast5;
    //I know writing them all out is not the easiest way to do this, but I couldn't get the for loop to work. 
});
}

var searchedCities = JSON.parse(localStorage.getItem("searchedCities")) || [];

function setCity() {
    let textInput = inputField.value;
    searchedCities.unshift(textInput);

    if(searchedCities.length > 5) {
        searchedCities.pop();
    }

    localStorage.setItem("searchedCities", JSON.stringify(searchedCities));
    
    displaySearchedCities();
}


function displaySearchedCities() {
     var cityElement = $("#previous-cities-list");
        cityElement.empty();
    for (let i=0; i < searchedCities.length; i++) {
        //first loop looks for element with id "list-item1"
        //console.log(cityElement);
        var listItem = $("<li></li>");
        listItem.text(searchedCities[i]);
        //console.log(searchedCities[i]);
        cityElement.append(listItem);
        $(listItem).on("click", function(){
    cityName = searchedCities[i];
    getApi();
        });

    
        
    }
}

function formatDate(inputDate) {
    var date = new Date(inputDate);
    console.log(date);
    if (!isNaN(date.getTime())) {
        // Months use 0 index.
        return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    }
}



displaySearchedCities();

searchBtn.addEventListener("click", setCity);

