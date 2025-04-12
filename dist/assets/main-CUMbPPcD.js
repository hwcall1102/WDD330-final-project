(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function p(e,n,t,o){n.innerHTML=e}async function m(e){return await(await fetch(e)).text()}async function E(){const e=await m("../partials/header.html"),n=await m("../partials/footer.html"),t=document.querySelector("#main-header"),o=document.querySelector("#main-footer");p(e,t),p(n,o)}async function C(){async function e(o){const r={weekday:"long",year:"numeric",month:"long",day:"numeric"};return o.toLocaleDateString("en-US",r)}const t=await e(new Date);document.getElementById("date").textContent=`Today is ${t}`}async function f(){const n="https://ipinfo.io/json?token=4a256cd44a66ca";try{const o=await(await fetch(n)).json();if(o.loc){const[r]=o.loc.split(",");return r}else throw new Error("Location not found")}catch(t){return console.error("Error fetching geolocation:",t),null}}async function y(){const n="https://ipinfo.io/json?token=4a256cd44a66ca";try{const o=await(await fetch(n)).json();if(o.loc){const[r,i]=o.loc.split(",");return i}else throw new Error("Location not found")}catch(t){return console.error("Error fetching geolocation:",t),null}}const H=document.querySelector("#current-temp"),h=document.querySelector("#weather-icon"),v=document.querySelector("#description"),k=document.querySelector("#high"),A=document.querySelector("#humidity"),O=document.querySelector("#day-one"),w=document.querySelector("#icon-one"),j=document.querySelector("#fore-one"),D=document.querySelector("#day-two"),g=document.querySelector("#icon-two"),I=document.querySelector("#fore-two"),R=document.querySelector("#day-three"),L=document.querySelector("#icon-three"),B=document.querySelector("#fore-three"),x="cb467b1eb003fad255f28a2c2646b6fa";async function _(){try{const e=await f(),n=await y(),t=`//api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${n}&appid=${x}&units=imperial`,o=await fetch(t);if(o.ok){const r=await o.json();console.log(r),J(r)}else throw Error(await o.text())}catch(e){console.log(e)}try{const e=await f(),n=await y(),t=`//api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${n}&appid=${x}&units=imperial`,o=await fetch(t);if(o.ok){const r=await o.json();console.log(r),G(r)}else throw Error(await o.text())}catch(e){console.log(e)}}function J(e){H.innerHTML=`${e.main.temp.toFixed(0)}&deg; F`;const n=`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`;h.setAttribute("SRC",n);let t=e.weather[0].description;const o=t.charAt(0).toUpperCase()+t.slice(1);h.setAttribute("alt",e.weather[0].description),v.textContent=`${o}`,k.innerHTML=`${e.main.temp_max.toFixed(0)}&deg; / ${e.main.temp_min.toFixed(0)}&deg; F`,A.innerHTML=`Humidity: ${e.main.humidity}%`}function G(e){O.innerHTML=`${l(e.list[3].dt)}  `,j.innerHTML=`${e.list[5].main.temp_max.toFixed(0)}&deg; / ${e.list[2].main.temp_min.toFixed(0)}&deg; F`;const n=`https://openweathermap.org/img/wn/${e.list[3].weather[0].icon}@2x.png`;w.setAttribute("SRC",n),w.setAttribute("alt",e.list[3].weather[0].description),D.innerHTML=`${l(e.list[11].dt)}  `,I.innerHTML=`${e.list[13].main.temp_max.toFixed(0)}&deg; / ${e.list[9].main.temp_min.toFixed(0)}&deg; F`;const t=`https://openweathermap.org/img/wn/${e.list[10].weather[0].icon}@2x.png`;g.setAttribute("SRC",t),g.setAttribute("alt",e.list[11].weather[0].description),R.innerHTML=`${l(e.list[19].dt)}  `,B.innerHTML=`${e.list[21].main.temp_max.toFixed(0)}&deg; / ${e.list[17].main.temp_min.toFixed(0)}&deg; F`;const o=`https://openweathermap.org/img/wn/${e.list[19].weather[0].icon}@2x.png`;L.setAttribute("SRC",o),L.setAttribute("alt",e.list[18].weather[0].description)}function l(e){let t=new Date(e*1e3).toLocaleString("en-us",{weekday:"long"});return t.charAt(0).toUpperCase()+t.slice(1)}var K=document.querySelectorAll(".card");[...K].forEach(e=>{e.addEventListener("click",function(){e.classList.toggle("is-flipped")})});const S=document.querySelector("#weather .card"),T=document.getElementById("weather"),P=new MutationObserver(()=>{S.classList.contains("is-flipped")?T.classList.add("is-flipped"):T.classList.remove("is-flipped")});P.observe(S,{attributes:!0,attributeFilter:["class"]});const q="pk.eyJ1IjoiaGF5ZGVuYzAyOTMiLCJhIjoiY205OWkyZHo4MGJxbzJvcTlwd3JjbmZjdyJ9.yMS97aQ2FN8lBDwa2JjcOg";mapboxgl.accessToken=q;let b,u;function U(e){b=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v12",center:e,zoom:13}),u=new MapboxDirections({accessToken:q,unit:"metric",profile:"mapbox/driving",interactive:!1}),b.addControl(u,"top-left"),u.setOrigin(e)}async function N(){return new Promise((e,n)=>{navigator.geolocation.getCurrentPosition(t=>{const o=[t.coords.longitude,t.coords.latitude];U(o),e()},t=>{n("Failed to get user location")},{enableHighAccuracy:!0})})}async function Q(){try{await N()}catch(e){alert(e)}}const $=document.getElementById("quoteText"),F=document.getElementById("author");let a=[],c=-1;async function M(){if(c<a.length-1){c++,d(a[c]);return}const e="https://quotes-api12.p.rapidapi.com/quotes",n={method:"GET",headers:{"x-rapidapi-key":"23b94f4ddcmsh01f0e08854ba502p132f2ejsnc396f3ee0e31","x-rapidapi-host":"quotes-api12.p.rapidapi.com"}};try{const o=await(await fetch(e,n)).json();a.push(o),c++,d(o)}catch(t){console.error("Error fetching quote:",t),$.textContent="Failed to load quote.",F.textContent=""}}function W(){c!=0?(c--,d(a[c])):alert("You're at the first quote.")}function d(e){$.innerHTML=`"${e.quote}"`,F.innerHTML=`– ${e.author}`}E();C();_();Q();document.getElementById("nextBtn").addEventListener("click",M);document.getElementById("prevBtn").addEventListener("click",W);M();
