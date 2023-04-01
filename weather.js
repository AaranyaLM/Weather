const apiKey="9b6d0aa88d6f133dc229ec48ec83c0fe"
const form= document.querySelector("form")
const weather= document.querySelector("#weather")
const search= document.querySelector("#search")
const title= document.querySelector("#title")


const getWeather= async(city)=>{
    title.innerHTML=``
    weather.innerHTML=`<p>Loading...</p>`
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const response= await fetch(url)
    const data=await response.json()
    
    return showWeather(data)
}

const showWeather=(data)=>{
    console.log(data)
    if(data.cod=="404"){
        weather.innerHTML=`
            <h2 style=" position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);"> City not found </h2>
        `
        return
    }
    title.innerHTML=`
        <h1>${data.name}</h1>
        <h2></h2>
    `
    weather.innerHTML=`
    <div class="column-1">
        <img src="<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
        <h3>${data.weather[0].main}</h3>
    </div>

    <div class="column-2">

        <div class="item">

            <div class="item-title">
                Temperature
            </div>
            <div class="item-content">
                ${data.main.temp}°C
            </div>
        </div>

        <div class="item">
            <div class="item-title">
                Rainfall
            </div>
            <div class="item-content">
                ${data.main.rain}
            </div>
        </div>

        <div class="item">
            <div class="item-title">
                Windspeed
            </div>
            <div class="item-content">
                ${data.wind.speed}
            </div>
        </div>

        <div class="item">
            <div class="item-title">
                Humidity
            </div>
            <div class="item-content">
                ${data.main.humidity}
            </div>
        </div>

        </div>
    </div>
    `
}
getWeather("Aylesbury Vale")
form.addEventListener("submit",function(event){
    getWeather(search.value)
    event.preventDefault()
})