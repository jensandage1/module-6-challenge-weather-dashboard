var APIKey = "e681938589867340f32e0fe262dead4c";
var cityInput = document.getElementById("search-city");
var queryUrl = "https://openweathermap.org/api";

function getApi() {
   
    fetch(queryUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        
    })
    
}
