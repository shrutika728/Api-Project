async function getWeather(){
    const city = document.getElementById('city').value;
    if (!city){
        alert("Please enter city");
        return
    }
    const apikey = `be55b364aa7824dc30c6cff46409b554`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error('city not found');
        }
        const wData =await response.json();
        console.log(wData)
        weatherInformation(wData)
    } catch (error){
        alert (error.message)
    }
    
}

function weatherInformation(data){
    const weatherData = document.getElementById('weatherData');
    const dataHTML = `<h1 class="fw-medium fst-italic">${data.name}, ${data.sys.country}</h1><p><strong>Humidity: </strong>${data.main.humidity}</p>
    <p><strong>Temprature: </strong>${data.main.temp}</p><p><strong>Description: </strong>${data.weather[0].description}</p><p><strong>Weather: </strong>${data.weather[0].main}</p>
    <p><strong>Visibility: </strong>${data.visibility}</p>`;
    weatherData.innerHTML = dataHTML
}

document.getElementById('city').addEventListener('keypress', function (e) {
    if (e.key === "Enter"){
        getWeather()
    }
})
