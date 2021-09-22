// apiKey: "24247963ed8b1d343c95f05460e64231",

let weather = {
    "apiKey" : "24247963ed8b1d343c95f05460e64231",
    fetchWeather: function(city){
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q="+ city 
            + "&units=metric&lang=es&appid=" 
            +this.apiKey
            )
                .then((response) => response.json())
                .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon,description } = data.weather[0];
        const { temp,humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Clima en " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humedad: " + humidity + "%";
        document.querySelector(".wind").innerText = "Velocidad de viento: " + speed + "Km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name + "')";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};



document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Guadalajara");



