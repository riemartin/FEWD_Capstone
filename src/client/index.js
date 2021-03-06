import './styles/button.scss'; 
import './styles/container.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/result.scss'; 

import {geoApi, weatherbitApi, pixabayApi} from './js/eventListener'; 
import {counter} from './js/counterCountdown';
import {uiUpdater} from './js/ui';


export {geoApi, weatherbitApi, pixabayApi}; 
export {counter}; 
export {uiUpdater}; 

// Setup empty JS object to act as endpoint 
let travelData = {}; 

//EventListener
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('generate').addEventListener('click', dataAggregator);
});

//Is already data saved in localStorage? 
document.getElementById('destination').value = localStorage.getItem('dest_server');
document.getElementById('traveldate').value = localStorage.getItem('date_server');

// Aggregate Data from API requests
async function dataAggregator (event) {
    
    // Get input from the form field and save into variables & save to local storage
    const destination = document.getElementById('destination').value;
    localStorage.setItem('dest_server', destination);   

    const traveldate_string = document.getElementById('traveldate').value;
    travelData.traveldate_string = traveldate_string
    const traveldate_split = traveldate_string.split('/');
    const traveldate_st = traveldate_split[2] + '-' + traveldate_split[1] + '-' + traveldate_split[0]; 
    const traveldate = new Date(traveldate_st); 
    localStorage.setItem('date_server', traveldate_string);  

    // Assign Values to JS Object
    travelData.destination = destination; 
    travelData.traveldate = traveldate;
    
    // Get Countdown
    const countdown = counter(traveldate); 
    
    travelData.countdown = countdown + 1; 

    // Get lat & long
    const geoApiRes = await geoApi(destination);

    travelData.lat = geoApiRes.lat; 
    console.log(travelData.lat); 

    travelData.long = geoApiRes.long; 
    console.log(travelData.long);  

    travelData.ctry = geoApiRes.ctry; 
   
    // Get Image
    const pixabayApiRes = await pixabayApi (destination); 
    console.log(pixabayApiRes); 
    travelData.img = pixabayApiRes.webformatURL; 

    // Get weather
    const weatherbitApiRes = await weatherbitApi(travelData.lat, travelData.long, travelData.countdown); 

    travelData.weather = weatherbitApiRes; 
    travelData.temp = JSON.stringify(weatherbitApiRes.temp); 
    travelData.description = weatherbitApiRes.weather.description; 
    
    async function postData (list = {destination: travelData.destination, traveldate: travelData.traveldate, countdown: travelData.countdown,
    description: travelData.description, temperature: travelData.temp, img: travelData.img}) {
        const postDataRes = await fetch('http://localhost:8081/save'); 
        const newTravel = await postDataRes.json();
        return newTravel; 
    }; 

    uiUpdater(travelData); 
}
