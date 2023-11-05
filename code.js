let weather = {
    apiKey : "05784fda5d684bb3bb57ba12db4322c7",
    fetchWeather: function (){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=39.933&lon=32.859&units=metric&appid=05784fda5d684bb3bb57ba12db4322c7"
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather : function(data) {
        const {name} = data;
        const { icon , description} = data.weather[0];
        const {temp , humidity } = data.main
        const {speed} = data.wind
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name ;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector(".description").innerText = description ;
        document.querySelector(".temp").innerText =  temp +"°C" ;
        document.querySelector(".humidity").innerText = "Humidity " + humidity +"%" ;
        document.querySelector(".wind").innerText = "Wind speed " + speed+" Km/h" ;
    },
    search: function(){
        this.fetchWeather(document.querySelector("search-bar").value)
    }
}
weather.fetchWeather()
document.querySelector(".search-button").addEventListener("click",function(){
    weather.search();
})
