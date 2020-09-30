export async function geoApi (destination) {

    // Build url for Geonames API request
    const geonames_url ='api.geonames.org/search?name=${destination}&username=${process.env.API_KEY}'; 

    // Call API
    const apiRes =  await fetch (geonames_url); 
    const res = apiRes.json();

    // Save returned Data from API
    const lat = res.main.lat[0].toString(); 
    const long = res.main.lng[0].toString();
    const ctry = res.main.countryName[0].toString();

    // Return required values
    return {lat, long, ctry};   

};   

export async function pixabayApi (destination) {
    const pixabay_url = 'https://pixabay.com/api/?key=${process.env.API_KEY_PIXABAY}&q=${destination}&category=places&image_type=photo'; 
 
    // Call API
    const pixabayApiRes =  await fetch (pixabay_url); 
    const pixabayres = pixabayApiRes.json();
    const img = pixabayres.hits[0,1]; 
     
    return img;
 }; 

export async function weatherbitApi (lat, long) {

    const weatherNW_url ='https://api.weatherbit.io/v2.0/current?lat=${lat}lon=${long}&key=${process.env.API_KEY}'; 
    const weatherFC_url = 'https://api.weatherbit.io/v2.0/forecast/daily?=${lat}lon=${long}&key=${process.env.API_KEY}'; 

    // Call API: If Traveldate is more than 7 days away but less than 16 days --> use Forecast API
    if (countdown > 7 && countdown < 17) {
        const weatherRes = await fetch (weatherFC_url); 
        const res = weatherRes.json();

        // Save returned Data for the traveldate from API
        const i = countdown - 1
        const weatherIcon = res.main.weather.icon[i]; 
        const description = res.main.weather.description[i].toString();
        const temp = res.main.temp[i].toString();

    } else {
        const weatherRes = await fetch (weatherNW_url); 
        const res = weatherRes.json();

        // Save returned Data from API
        const weatherIcon = res.main.weather.icon; 
        const description = res.main.weather.description.toString();
        const temp = res.main.temp.toString();
    }
    return {weatherIcon, description, temp}; 
 };     