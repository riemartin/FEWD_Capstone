var client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var d=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:h(f,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var g=null,m=0;function h(e,t){var n,r,o;if(t.singleton){var i=m++;n=g||(g=l(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=l(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=s(e,t),l=0;l<n.length;l++){var u=c(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(e,t,n){var r=n(1),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,"button{display:flex;align-items:center;justify-content:center;margin:auto;width:400px;height:100px;background:#3b4a6b;color:white;font-size:26px;font-family:'sans-serif';border:none;box-shadow:2px 4px 5px #444}#generate:hover{background-color:grey;color:black;font-size:40px}\n",""]),t.default=o},function(e,t,n){var r=n(1),o=n(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,'.container{background-color:whitesmoke;display:grid;grid-template-columns:600px 400px;grid-template-rows:200px 200px 100px 200px 100px 150px 600px;grid-row-gap:50px;grid-column-gap:50px;margin:auto;grid-template-areas:"header" "destination" "field_dest" "date"  "field_date" "button"  "result"}@media (min-width: 900px){.container{display:grid;grid-template-columns:600px 400px;grid-template-rows:200px 150px 150px 100px 600px;grid-row-gap:50px;grid-column-gap:50px;margin:auto;grid-template-areas:"header header" "destination field_dest" "date field_date" "button button"  "result result"}}.header{grid-area:header}.destination{grid-area:destination}.field_dest{grid-area:field_dest}.date{grid-area:date}.field_date{grid-area:field_date}.button{grid-area:button}.result{grid-area:result}\n',""]),t.default=o},function(e,t,n){var r=n(1),o=n(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,"#questions{display:flex;align-items:center;justify-content:center;font-size:36px;font-family:'sans serif'}input{display:block;align-items:center;justify-content:center;height:60px;width:320px;margin-top:40px;color:white;font:bold;background:grey;font-size:20px;font-family:'sans serif'}::placeholder{color:white;font:bold;font-family:sans-serif}:-ms-input-placeholder{color:white;font:bold;font-family:sans-serif}::-ms-input-placeholder{color:white;font:bold;font-family:sans-serif}\n",""]),t.default=o},function(e,t,n){var r=n(1),o=n(9);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,".header{display:flex;align-items:center;justify-content:center;font-size:120px;font-family:'sans serif';background-color:whitesmoke;border:black 30px double}\n",""]),t.default=o},function(e,t,n){"use strict";n.r(t),n.d(t,"geoApi",(function(){return r})),n.d(t,"weatherbitApi",(function(){return i})),n.d(t,"pixabayApi",(function(){return o})),n.d(t,"counter",(function(){return a})),n.d(t,"uiUpdater",(function(){return c}));n(2),n(4),n(6),n(8);async function r(e){const t=(await fetch("api.geonames.org/search?name=${destination}&username=${process.env.API_KEY}")).json();return{lat:t.main.lat[0].toString(),long:t.main.lng[0].toString(),ctry:t.main.countryName[0].toString()}}async function o(e){return(await fetch("https://pixabay.com/api/?key=${process.env.API_KEY_PIXABAY}&q=${destination}&category=places&image_type=photo")).json().hits[1]}async function i(e,t){if(countdown>7&&countdown<17){const e=(await fetch("https://api.weatherbit.io/v2.0/forecast/daily?=${lat}lon=${long}&key=${process.env.API_KEY}")).json(),t=countdown-1;e.main.weather.icon[t],e.main.weather.description[t].toString(),e.main.temp[t].toString()}else{const e=(await fetch("https://api.weatherbit.io/v2.0/current?lat=${lat}lon=${long}&key=${process.env.API_KEY}")).json();e.main.weather.icon,e.main.weather.description.toString(),e.main.temp.toString()}return{weatherIcon:weatherIcon,description:description,temp:temp}}function a(e){const t=new Date,n=t.getMonth()+"."+t.getDate()+"."+t.getFullYear();return Math.round(Math.abs((n.getTime()-e.getTime())/864e5))}async function c(e){document.getElementById("geo").innerHTML=`Your trip trip to <bold>${e.destination}</bold><br> \n    on the <bold>${e.traveldate}:</bold><br>\n    Only ${e.countdown} days left!`,document.getElementById("weather").innerHTML=`The weather will be ${e.description} wuth temperatures around ${e.temp}.\n    <img src=${e.img} alt="Destination">`}console.log(destination+traveldate+countdown+list);const s={};document.getElementById("submit").addEventListener("click",async function(e){const t=document.getElementById("destination").value;localStorage.setItem("dest_server",t);const n=document.getElementById("traveldate").value.split("/"),r=new Date(n[2],n[1],n[0]);localStorage.setItem("date_server",r),s.destination=t,s.traveldate=r;const o=await a(r);s.countdown=o;const i=await i(t);s.lat=lat,s.long=long,s.ctry=ctry;const l=await l(t);s.img=img;const u=await u(lat,long);s.weatherIcon=weatherIcon,s.description=description,s.temp=temp,c(s)}()),document.getElementById("destination").value=localStorage.getItem("dest_server"),document.getElementById("traveldate").value=localStorage.getItem("date_server")}]);