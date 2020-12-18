var addToHead = document.querySelector("head");
var cssLink = document.createElement("link");
addToHead.appendChild(cssLink);
cssLink.setAttribute("rel", "stylesheet");
cssLink.setAttribute("href", "css/style.css");
var wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
var bodY = document.querySelector("body");
bodY.appendChild(wrapper);
