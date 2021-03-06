// Setup empty JS object to act as endpoint for all routes
const TravelData = {}; 

// Express to run server and routes
var express = require('express')

// Start up an instance of app
var app = express();

// Dependencies
var bodyParser = require('body-parser'); 
const fetch = require('node-fetch'); 

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Here we are configuring express to use body-parser as middle-ware.
var bodyParser = require('body-parser'); 

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('./dist'));

// Spin up the server
const port = 8081;
const server = app.listen(port, listening)

// Callback to debug
function listening(){
    console.log("server running"); 
}

// Initialize all route 

app.get('/all', function (req, res) {
   res.send('./dist/index.html'); 
}); 

// Post Route

app.post('/save', function (req, res) {
    const newTravel= {
        destination: req.body.destination, 
        traveldate: req.body.traveldate,
        countdown: req.body.countdown, 
        temperature: req.body.temp,
        img: req.body.img
    }; 
    
    TravelData = newTravel;
    console.log(TravelData);
});