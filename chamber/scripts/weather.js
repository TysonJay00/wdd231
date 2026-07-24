const town = document.querySelector('#town');
const graphic = document.querySelector('#graphic');
const description = document.querySelector('#description');
const temperature = document.querySelector('#temperature');


const myKey = "c3c57850095e2446fb70570ce19947df"
const myLat = "20.971306724108405"
const myLong = "-89.6051946264474"

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=metric&appid=${myKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&units=metric&appid=${myKey}`;

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);

            const forecastResponse = await fetch(forecastURL);
            const forecastData = await forecastResponse.json();

            displayForecast(forecastData);

        } else {
            throw Error(await response.text());

        }

    } catch (error) {
        console.log(error);
    }
}
function displayForecast(data) {
    const forecast = document.querySelector("#forecast");

    const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00")
    );

    forecast.innerHTML += "";

    dailyForecasts.slice(0, 3).forEach(day => {
        const date = new Date(day.dt_txt);

        forecast.innerHTML += `
            <div class="forecast-day">
               <h3>${date.toLocaleDateString("en-us", { weekday: "long" })}</h3>
               <p>${Math.round(day.main.temp)}&deg;C</p>
               <p>${day.weather[0].description}
            </div>
        `;
    })

}



function displayResults(data) {
    console.log("hello")
    town.innerHTML = data.name
    description.innerHTML = data.weather[0].description
    temperature.innerHTML = `${data.main.temp}&deg;C`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    graphic.setAttribute('src', iconsrc)
    graphic.setAttribute('alt', data.weather[0].description)
}

apiFetch();
