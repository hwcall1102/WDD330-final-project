import {getGeolocationForLocalIpLat, getGeolocationForLocalIpLon} from "./utils.mjs"
// home java weather API's and random card generator

const myLat = await getGeolocationForLocalIpLat()
const myLong = await getGeolocationForLocalIpLon()

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const tempHigh = document.querySelector('#high');
const humidity = document.querySelector('#humidity');
const dayOne = document.querySelector('#day-one');
const foreOne = document.querySelector('#fore-one');
const dayTwo = document.querySelector('#day-two');
const foreTwo = document.querySelector('#fore-two');
const dayThree = document.querySelector('#day-three');
const foreThree = document.querySelector('#fore-three');

// create required variables for the URL
const myKey = 'cb467b1eb003fad255f28a2c2646b6fa';

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
const foreURL =`//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

export default async function apiFetch() {
    try {
    const response = await fetch(myURL);
    if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }

    try {
    const response = await fetch(foreURL);
    if (response.ok) {
        const foreData = await response.json();
        console.log(foreData)
        displayForeResults(foreData);
        await console.log(foreData);
    }
    else {
        throw Error(await resonse.text());
    }
    } catch (error) {
        console.log(error);
    }

};

// Display the JSON data onto my webpage
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg; F`;
    const iconSRC = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('SRC', iconSRC);
    let desc = data.weather[0].description;
    const capDesc = desc.charAt(0).toUpperCase() + desc.slice(1);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = `${capDesc}`;
    tempHigh.innerHTML = `${data.main.temp_max.toFixed(0)}&deg; / ${data.main.temp_min.toFixed(0)}&deg; F`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
        
};

function displayForeResults(data) {
dayOne.innerHTML = `${toWeekday(data.list[1].dt)}:  `;
foreOne.innerHTML = `${data.list[1].main.temp_max.toFixed(0)}&deg;/${data.list[0].main.temp_min.toFixed(0)}&deg; F`;
dayTwo.innerHTML = `${toWeekday(data.list[9].dt)}:  `;
foreTwo.innerHTML = `${data.list[9].main.temp_max.toFixed(0)}&deg;/${data.list[8].main.temp_min.toFixed(0)}&deg; F`;
dayThree.innerHTML = `${toWeekday(data.list[17].dt)}:  `;
foreThree.innerHTML = `${data.list[17].main.temp_max.toFixed(0)}&deg;/${data.list[16].main.temp_min.toFixed(0)}&deg; F`;
}

function toWeekday(epoch) {
let date = new Date(epoch * 1000);
let weekday = date.toLocaleString('en-us', { weekday: 'long'});
let weekdayCap = weekday.charAt(0).toUpperCase() + weekday.slice(1);

return weekdayCap
}

