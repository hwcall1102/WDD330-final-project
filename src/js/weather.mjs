import {getGeolocationForLocalIpLat, getGeolocationForLocalIpLon} from "./utils.mjs"
// home java weather API's and random card generator

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const tempHigh = document.querySelector('#high');
const humidity = document.querySelector('#humidity');
const dayOne = document.querySelector('#day-one');
const iconOne = document.querySelector('#icon-one');
const foreOne = document.querySelector('#fore-one');
const dayTwo = document.querySelector('#day-two');
const iconTwo = document.querySelector('#icon-two');
const foreTwo = document.querySelector('#fore-two');
const dayThree = document.querySelector('#day-three');
const iconThree = document.querySelector('#icon-three');
const foreThree = document.querySelector('#fore-three');

// create required variables for the URL
const myKey = 'cb467b1eb003fad255f28a2c2646b6fa';


export default async function apiFetch() {
    try {
        // to use await functionality calls for geolocation for lat and long and myurl must ben encapsulated in a async function, moved within the api fetch function
        const myLat = await getGeolocationForLocalIpLat()
        const myLong = await getGeolocationForLocalIpLon()

        const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;


    
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
        const myLat = await getGeolocationForLocalIpLat()
        const myLong = await getGeolocationForLocalIpLon()

    const foreURL =`//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
    
    const response = await fetch(foreURL);
    if (response.ok) {
        const foreData = await response.json();
        console.log(foreData)
        displayForeResults(foreData);
    }
    else {
        throw Error(await response.text());
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
    dayOne.innerHTML = `${toWeekday(data.list[3].dt)}  `;
    foreOne.innerHTML = `${data.list[5].main.temp_max.toFixed(0)}&deg; / ${data.list[2].main.temp_min.toFixed(0)}&deg; F`;
    const iconOneSRC = `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`;
    iconOne.setAttribute('SRC', iconOneSRC);
    iconOne.setAttribute('alt', data.list[3].weather[0].description);
    dayTwo.innerHTML = `${toWeekday(data.list[11].dt)}  `;
    foreTwo.innerHTML = `${data.list[13].main.temp_max.toFixed(0)}&deg; / ${data.list[9].main.temp_min.toFixed(0)}&deg; F`;
    const iconTwoSRC = `https://openweathermap.org/img/wn/${data.list[10].weather[0].icon}@2x.png`;
    iconTwo.setAttribute('SRC', iconTwoSRC);
    iconTwo.setAttribute('alt', data.list[11].weather[0].description);
    dayThree.innerHTML = `${toWeekday(data.list[19].dt)}  `;
    foreThree.innerHTML = `${data.list[21].main.temp_max.toFixed(0)}&deg; / ${data.list[17].main.temp_min.toFixed(0)}&deg; F`;
    const iconThreeSRC = `https://openweathermap.org/img/wn/${data.list[19].weather[0].icon}@2x.png`;
    iconThree.setAttribute('SRC', iconThreeSRC);
    iconThree.setAttribute('alt', data.list[18].weather[0].description);
}

function toWeekday(epoch) {
let date = new Date(epoch * 1000);
let weekday = date.toLocaleString('en-us', { weekday: 'long'});
let weekdayCap = weekday.charAt(0).toUpperCase() + weekday.slice(1);

return weekdayCap
}

var cards = document.querySelectorAll('.card');

[...cards].forEach((card) =>{
    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
    });
});

const card = document.querySelector('#weather .card');
const weatherSection = document.getElementById('weather');

const observer = new MutationObserver(() => {
  if (card.classList.contains('is-flipped')) {
    weatherSection.classList.add('is-flipped');
  } else {
    weatherSection.classList.remove('is-flipped');
  }
});

observer.observe(card, {
  attributes: true,
  attributeFilter: ['class']
})