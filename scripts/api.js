const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey = "c3c57850095e2446fb70570ce19947df"
const myLat = "49.75370707545249"
const myLong = "6.635075805122934"

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=metric&appid=${myKey}`;


async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);

        } else {
            throw Error(await response.text());

        }
    } catch (error) {
        console.log(error);
    }


}

function displayResults(data) {
    town.innerHTML = data.name
    description.innerHTML = data.weather[0].description
    temperature.innerHTML = `${data.main.temp}&deg;C`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    graphic.setAttribute('SRC', iconsrc)
    graphic.setAttribute('alt', data.weather[0].description)
}

apiFetch();

