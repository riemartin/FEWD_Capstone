import './styles/button.css'; 
import './styles/container.css';
import './styles/form.css';
import './css/header.css'; 

import {geoApi, weatherbitApi} from './js/eventListener'; 


export {clickEvent}; 


button.addEventListener ('click', () => {
    geoApi();
    weatherbitApi(); 
}); 
