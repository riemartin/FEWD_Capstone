export function uiUpdater (travelData) {

   // const button = document.getElementById('generate');
   // button.remove();  

    // display Geo Data
    document.getElementById('geo').innerHTML= 
    `<div id="geo" class="result">You trip to <bold> ${travelData.destination}</bold> 
    on the <bold>${travelData.traveldate_string}:</bold><br>
    Only ${travelData.countdown} days left!</div>`; 

    // display Weather Data
    document.getElementById('weather').innerHTML=`The weather will be ${travelData.description} with temperatures around ${travelData.temp} Degrees!<br>
    <img src=${travelData.img} alt="Destination">`; 
}