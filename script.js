var APIKey = "4023e75f24d6e229beec978ad1d80ad9"; 
var cityName = "Chicago"; 
var queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`; 


function getApi() {
    fetch(queryUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data); // This will output the data you got from the API to the console.
        var currentInfo = document.getElementById("city-conditions");//i want the current conditions for searched city to go here.
        currentInfo.innterHTML= (data); 
    })
    .catch(function (error) {
        console.log('Error:', error); // If something goes wrong, this will output the error.
        var logErr = document.getElementById("cityconditions");
        logErr.textContent = "please check your spelling and try again."
    });
   
}
getApi();

$("#container > #search-button").click(() => {
    let textInput = $("#container > #search-city").val();
    localStorage.setItem("city" , textInput)
});

function displayPreviousCity(){
    $("#container > #search-city").val(localStorage.getItem("city"));
}
displayPreviousCity();

//click event - display searched city current and 5 day forecast
//save searched city to local storage
//get from local storage and display last 5 searched cities 



cityName.textContent=("");