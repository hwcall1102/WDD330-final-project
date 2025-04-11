(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();function p(e,r,t,o){r.innerHTML=e}async function m(e){return await(await fetch(e)).text()}async function q(){const e=await m("../partials/header.html"),r=await m("../partials/footer.html"),t=document.querySelector("#main-header"),o=document.querySelector("#main-footer");p(e,t),p(r,o)}async function F(){async function e(o){const n={weekday:"long",year:"numeric",month:"long",day:"numeric"};return o.toLocaleDateString("en-US",n)}const t=await e(new Date);document.getElementById("date").textContent=`Today is ${t}`}async function f(){const r="https://ipinfo.io/json?token=4a256cd44a66ca";try{const o=await(await fetch(r)).json();if(o.loc){const[n]=o.loc.split(",");return n}else throw new Error("Location not found")}catch(t){return console.error("Error fetching geolocation:",t),null}}async function y(){const r="https://ipinfo.io/json?token=4a256cd44a66ca";try{const o=await(await fetch(r)).json();if(o.loc){const[n,i]=o.loc.split(",");return i}else throw new Error("Location not found")}catch(t){return console.error("Error fetching geolocation:",t),null}}const b=document.querySelector("#current-temp"),h=document.querySelector("#weather-icon"),M=document.querySelector("#description"),S=document.querySelector("#high"),E=document.querySelector("#humidity"),H=document.querySelector("#day-one"),k=document.querySelector("#fore-one"),j=document.querySelector("#day-two"),C=document.querySelector("#fore-two"),D=document.querySelector("#day-three"),I=document.querySelector("#fore-three"),g="cb467b1eb003fad255f28a2c2646b6fa";async function O(){try{const e=await f(),r=await y(),t=`//api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${r}&appid=${g}&units=imperial`,o=await fetch(t);if(o.ok){const n=await o.json();console.log(n),v(n)}else throw Error(await o.text())}catch(e){console.log(e)}try{const e=await f(),r=await y(),t=`//api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${r}&appid=${g}&units=imperial`,o=await fetch(t);if(o.ok){const n=await o.json();console.log(n),A(n),await console.log(n)}else throw Error(await resonse.text())}catch(e){console.log(e)}}function v(e){b.innerHTML=`${e.main.temp.toFixed(0)}&deg; F`;const r=`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`;h.setAttribute("SRC",r);let t=e.weather[0].description;const o=t.charAt(0).toUpperCase()+t.slice(1);h.setAttribute("alt",e.weather[0].description),M.textContent=`${o}`,S.innerHTML=`${e.main.temp_max.toFixed(0)}&deg; / ${e.main.temp_min.toFixed(0)}&deg; F`,E.innerHTML=`Humidity: ${e.main.humidity}%`}function A(e){H.innerHTML=`${l(e.list[1].dt)}:  `,k.innerHTML=`${e.list[1].main.temp_max.toFixed(0)}&deg;/${e.list[0].main.temp_min.toFixed(0)}&deg; F`,j.innerHTML=`${l(e.list[9].dt)}:  `,C.innerHTML=`${e.list[9].main.temp_max.toFixed(0)}&deg;/${e.list[8].main.temp_min.toFixed(0)}&deg; F`,D.innerHTML=`${l(e.list[17].dt)}:  `,I.innerHTML=`${e.list[17].main.temp_max.toFixed(0)}&deg;/${e.list[16].main.temp_min.toFixed(0)}&deg; F`}function l(e){let t=new Date(e*1e3).toLocaleString("en-us",{weekday:"long"});return t.charAt(0).toUpperCase()+t.slice(1)}const x="pk.eyJ1IjoiaGF5ZGVuYzAyOTMiLCJhIjoiY205OWkyZHo4MGJxbzJvcTlwd3JjbmZjdyJ9.yMS97aQ2FN8lBDwa2JjcOg";mapboxgl.accessToken=x;let w,u;function B(e){w=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v12",center:e,zoom:13}),u=new MapboxDirections({accessToken:x,unit:"metric",profile:"mapbox/driving",interactive:!1}),w.addControl(u,"top-left"),u.setOrigin(e)}async function _(){return new Promise((e,r)=>{navigator.geolocation.getCurrentPosition(t=>{const o=[t.coords.longitude,t.coords.latitude];B(o),e()},t=>{r("Failed to get user location")},{enableHighAccuracy:!0})})}async function J(){try{await _()}catch(e){alert(e)}}const L=document.getElementById("quoteText"),T=document.getElementById("author");let c=[],a=-1;async function $(){if(a<c.length-1){a++,d(c[a]);return}const e="https://quotes-api12.p.rapidapi.com/quotes",r={method:"GET",headers:{"x-rapidapi-key":"23b94f4ddcmsh01f0e08854ba502p132f2ejsnc396f3ee0e31","x-rapidapi-host":"quotes-api12.p.rapidapi.com"}};try{const o=await(await fetch(e,r)).json();c.push(o),a++,d(o)}catch(t){console.error("Error fetching quote:",t),L.textContent="Failed to load quote.",T.textContent=""}}function G(){a!=0?(a--,d(c[a])):alert("You're at the first quote.")}function d(e){L.innerHTML=`"${e.quote}"`,T.innerHTML=`– ${e.author}`}q();F();O();J();document.getElementById("nextBtn").addEventListener("click",$());document.getElementById("prevBtn").addEventListener("click",G());$();
