var APIKey = "e681938589867340f32e0fe262dead4c";
var cityInput = document.getElementById("search-city");
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q={chicago}&appid={e681938589867340f32e0fe262dead4c}";

function getApi() {
   
    fetch(queryUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

    })
    
}
