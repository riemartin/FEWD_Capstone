import './styles/button.scss'; 
import './styles/container.scss';
import './styles/form.scss';
import './styles/header.scss'; 

import {geoApi, weatherbitApi, pixabayApi} from './js/eventListener'; 
import {counter} from './js/counterCountdown';
import {uiUpdater} from './js/ui';


export {geoApi, weatherbitApi, pixabayApi}; 
export {counter}; 
export {uiUpdater}; 

// Setup empty JS object to act as endpoint 
const travelData = {}; 

//EventListener
document.getElementById('submit').addEventListener('click', dataAggregator());

//Is already data saved in localStorage? 
document.getElementById('destination').value = localStorage.getItem('dest_server');
document.getElementById('traveldate').value = localStorage.getItem('date_server');

// Aggregate Data from API requests
async function dataAggregator (event) {
    
    // Get input from the form field and save into variables & save to local storage
    const destination = document.getElementById('destination').value;
    localStorage.setItem('dest_server', destination);    
    const traveldate_string = document.getElementById('traveldate').value.split('/');
    const traveldate = new Date (traveldate_string[2], traveldate_string[1], traveldate_string[0]); 
    localStorage.setItem('date_server', traveldate);  

    // Assign Values to JS Object
    travelData.destination = destination; 
    travelData.traveldate = traveldate;
    
    // Get Countdown
    const countdown = await counter(traveldate); 
    travelData.countdown = countdown; 

    // Get lat & long
    const geoApi = await geoApi(destination);

    travelData.lat = lat; 
    travelData.long = long; 
    travelData.ctry = ctry; 

    // Get Image
    const pixabayApi = await pixabayApi (destination); 
    travelData.img = img; 

    // Get weather
    const weatherbitApi = await weatherbitApi(lat, long); 

    travelData.weatherIcon = weatherIcon; 
    travelData.description = description; 
    travelData.temp = temp; 

    uiUpdater(travelData); 
}
