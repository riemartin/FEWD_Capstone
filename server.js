// Setup empty JS object to act as endpoint for all routes
const projectData = {}; 

// Express to run server and routes
var express = require('express')

// Start up an instance of app
var app = express();

// Dependencies
var bodyParser = require('body-parser'); 

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Here we are configuring express to use body-parser as middle-ware.
var bodyParser = require('body-parser'); 

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const port = 8000;
const server = app.listen(port, listening)

// Callback to debug
function listening(){
    console.log("server running"); 
}

// Initialize all route with a callback function

app.get('/all', function (req, res) {
    res.send(JSON.stringify(projectData))
}); 

// Post Route

app.post('/newData', function (req, res) {
    let data = request.body;
    projectData["city"]= data.name; 
    projectData["temperature"]= data.temp;
    projectData["date"]= data.date;
    projectData["feelings"]= data.feelings;
})
  