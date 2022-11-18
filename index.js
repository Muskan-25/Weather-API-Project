var API_Key = `98e2d33c4b9a71762c9a4369f96a0a11`;
var weather = document.querySelector("#weather");
var formm = document.querySelector("form");
var search = document.querySelector("#search");

formm.addEventListener("submit", function(event) {
    getWeather(search.value);
    event.preventDefault();
    if (search.value == 0) {
        Swal.fire({
            title: 'Please enter the name of a city',
            confirmButtonText: 'OK',
            confirmButton: '3rem'
        })
    }

})

async function getWeather(city) {
    var API_Call = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;
    var response = await fetch(API_Call);
    const data = await response.json();
    console.log(data);
    return setWeather(data);
}

function setWeather(data) {
    var typeofweather = data.weather[0].main;
    weather.innerHTML = `
    <h2 id="cityname">${data.name}</h2>
    <div class="col-6 leftcol">
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div class="col-6 rightcol">
        <h3>${data.main.temp} °C</h3>
        <p>${typeofweather}</p>
    </div>`;
    var bodybg = document.querySelector("body");
    bodybg.style.background = "#0000052";

    if (typeofweather === "Clouds" || typeofweather === "Partly cloudy") {
        bodybg.style.background = "url('https://images.unsplash.com/photo-1572162522099-7a0c28d7691b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
    } else if (typeofweather === "Sunny") {
        bodybg.style.background = "url('https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')";
    } else if (typeofweather === "Rain") {
        bodybg.style.background = "url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80')";
    } else if (typeofweather === "Clear") {
        bodybg.style.background = "url('https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')";
    } else if (typeofweather === "Thundstorm") {
        bodybg.style.background = "url('https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
    } else if (typeofweather === "Heavy rain") {
        bodybg.style.background = "url('https://images.unsplash.com/photo-1548232979-6c557ee14752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')";
    } else if (typeofweather === "Snow") {
        bodybg.style.background = "url('https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
    } else {
        bodybg.style.background = "url('https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80') no-repeat";
    }
}
console.log("jjij");