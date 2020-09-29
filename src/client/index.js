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
document.querySelector('button').addEventListener ('click', dataAggregator());

// Aggregate Data from API requests
async function dataAggregator (event) {
    
    // Get input from the form field and save into variables
    const destination = document.getElementById('destination').value;    
    const traveldate = document.getElementById('traveldate').value; 

    // Assign Values to JS Object
    travelData.destination = destination; 
    travelData.traveldate = traveldate; 
    
    // Get Countdown
    const countdown = await counter (traveldate); 
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
