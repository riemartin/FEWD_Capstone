export function uiUpdater (travelData) {

    // display Geo Data
    const geo_result = document.getElementById('geo').innerHTML= 
    `<div id=geo class=result>Your trip trip to <bold> ${travelData.destination}</bold><br> 
    on the <bold>${travelData.traveldate_string}:</bold><br>
    Only ${travelData.countdown} days left!</div>`; 

    // display Weather Data
    const weather_result = document.getElementById('weather').innerHTML=`The weather will be ${travelData.description} with temperatures around ${travelData.temp}.
    <img src=${travelData.img} alt="Destination">`; 
}