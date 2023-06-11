var APIKey = "4023e75f24d6e229beec978ad1d80ad9"; 

var searchBtn = document.getElementById("search-button");
var inputField = document.getElementById("search-city");
var cityName;

searchBtn.onclick = getInput;

function getInput(){
    cityName = inputField.value;
    getApi();
    return cityName;
}

function getApi() {
    var queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`; 
    fetch(queryUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data); // This will output the data you got from the API to the console.
        var currentInfo = document.getElementById("city-conditions");//i want the current conditions for searched city to go here.
        currentInfo.innterHTML= data; 
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        getWeather(lat,lon);
    })
    .catch(function (error) {
        console.log('Error:', error); // If something goes wrong, this will output the error.
        var logErr = document.getElementById("city-conditions");
        //var logErr = document.getElementById("search-city");
        logErr.textContent = "please check your spelling and try again."
    });
}

function getWeather(lat, lon) {
    var queryUrl2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`;
    fetch(queryUrl2)
    .then(function (response) {
        return response.json();
    })
    .then (function (data2) {
        console.log(data2);
    })
   // for(var i=0; i < data2.length; i+8) {
    //data2.value[i];
   // }

}

//`https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`
//getApi();

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
//get from local storage and display last 5 searched cities 

