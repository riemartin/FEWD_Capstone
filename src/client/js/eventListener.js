export async function geoApi (destination) {

    // Build url for Geonames API request
    const geonames_url =`http://api.geonames.org/searchJSON?name=${destination}&username=riema`; 

    // Call API
    const apiRes =  await fetch (geonames_url); 
    const res = await apiRes.json();

    // Save returned Data from API
    const lat = res.geonames[0].lat; 
    const long = res.geonames[0].lng;
    const ctry = res.geonames[0].countryName;

    console.log(lat); 
    console.log(long);

    // Return required values
    return {lat, long, ctry};   

};   


export async function pixabayApi (destination) {
    const pixabay_url = `https://pixabay.com/api/?key=18495402-9d414a90be0c31a451b166133&q=${destination}&category=places&image_type=photo`; 
 
    // Call API
    const pixabayApiRes =  await fetch (pixabay_url); 
    const pixabayres = await pixabayApiRes.json();
    const img = pixabayres.hits[0,1]; 
     
    return img;
 }; 

export async function weatherbitApi (lat, long, countdown) {


    const weatherNW_url =`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=bb96717fa2134fb987f415ad4d5d5123`; 
    const weatherNW_url_test ='https://api.weatherbit.io/v2.0/current?lat=53.5625&lon=9.9573&key=bb96717fa2134fb987f415ad4d5d5123';
    const weatherFC_url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${long}&key=bb96717fa2134fb987f415ad4d5d5123`; 
    const weatherFC_url_test = `https://api.weatherbit.io/v2.0/forecast/daily?lat=53.5625&lon=9.9573&key=bb96717fa2134fb987f415ad4d5d5123`;

    console.log(countdown); 
    //const weatherRes = await fetch (weatherNW_url); 
    //const res = await weatherRes.json();
    //const weather = res.data[0]; 
    //console.log(weather); 
    //return weather; 

    if (countdown > 7 && countdown < 17) {
        const weatherRes = await fetch (weatherFC_url); 
        const res = await weatherRes.json();
        console.log(res); 

        // Save returned Data for the traveldate from API
        const i = countdown - 1; 
        console.log(i + "if"); 
        const weather = res.data[i]; 

        return weather;

    } else if (countdown < 7) {
        const weatherRes = await fetch (weatherNW_url); 
        const res = await weatherRes.json();
        console.log(res); 

        // Save returned Data from API
        const i = countdown - 1;
        console.log(i + "else if");  
        const weather = res.data[i]; 
        
        return weather;  
 
    } else {
        const weatherRes = await fetch (weatherNW_url); 
        const res = await weatherRes.json();
        console.log(res); 

        // Save returned Data from API
        const weather = res.data[0]; 
        console.log("else");
 
        return weather; 
    }
 };     
