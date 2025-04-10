// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// helper to get parameter strings
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = template;
  if(callback) {
    callback(data);
  }
}

export async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("../partials/header.html");
  const footerTemplate = await loadTemplate("../partials/footer.html");

  const headerElement = document.querySelector("#main-header");
  const footerElement = document.querySelector("#main-footer");

  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}

// JavaScript to dynamically add the date


export async function formattedDate () {
  
  async function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  const currentDate = new Date();

  // Format the current date
  const formattedDate = await formatDate(currentDate);

  // Display the formatted date in the HTML element
  document.getElementById('date').textContent = `Today is ${formattedDate}`;

}


export async function getGeolocationForLocalIpLat() {
  const apiKey = '4a256cd44a66ca'; // Replace with your ipinfo.io API key.
  const url = `https://ipinfo.io/json?token=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.loc) {
      const [latitude] = data.loc.split(',');
      return latitude;
    } else {
      throw new Error('Location not found');
    }
  } catch (error) {
    console.error('Error fetching geolocation:', error);
    return null;
  }
}

export async function getGeolocationForLocalIpLon() {
  const apiKey = '4a256cd44a66ca'; // Replace with your ipinfo.io API key.
  const url = `https://ipinfo.io/json?token=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.loc) {
      const [latitude, longitude] = data.loc.split(',');
      return longitude;
    } else {
      throw new Error('Location not found');
    }
  } catch (error) {
    console.error('Error fetching geolocation:', error);
    return null;
  }
}
