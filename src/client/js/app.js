// Personal API Key for OpenWeatherMap API

const { response } = require ("express");

var baseURL ='api.openweathermap.org/data/2.5/weather?zip='; 
var country =',us';
var apiKey ='&appid=67163477520e2727320fca73b260e7fd&units=imperial';
var d = new Date();
var newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
var data; 

const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const content = document.getElementById('content');
const button = document.getElementById('generate');
const zipBox = document.getElementById('zip');
const feelingsBox = document.getElementById('feelings');


/* Function called by event listener */

button.addEventListener('click', () => {
     
    button.innerHTML = 'Weather coming soon :)';
    const zip = zipBox.value;
    const feelings = feelingsBox.value;
    createRequest(event); 
});   

/* Function to GET Web API Data*/

async function createRequest(event){
    const getWeather = async (baseURL, country, zip, apiKey) =>{
       const apiresponse =  await fetch(baseURL+zip+country+apiKey);
    }
    const res = apiresponse.json();
    const temp = res.main.temp.toString();
    const city = res.name.toString();
    const list = { name: city, temperature: temp, date: newDate, feelings: feelings };
    
    data = await postData('/newData', list);
    getData('/all');
}

/* Function to POST data to Server */

const postData = async(url, getWeather) => {
    const response = await fetch(url, {
        method: 'Post',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(getWeather)
    });
    try {
        const newData = await response.json();
        return newData;

    } catch (error) {
        console.log('error:', error);
    }
};

/* Function to GET Project Data from Server Endpoint*/

const getData = async(url) => {
    const res = await fetch('getData');

    try {
        const data = await res.json();
        updateUI(data);
    } catch (error) {
        console.log('error', error);
    }
}; 
/* Update UI*/

function updateUI (data) {
    date.innerHTML = data.date;
    city.innerHTML = data.city;
    temp.innerHTML = data.temperature;
    content.innerHTML = data.feelings; 
}