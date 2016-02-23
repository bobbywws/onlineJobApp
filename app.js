// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose"), Schema = mongoose.Schema;
var logger = require("morgan");

// Create Express App Object \\
var app = express();

// Connect Mongo \\
mongoose.connect('mongodb://localhost/BobbyCorp');

// Application Configuration \\
app.use(logger("dev)"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res) {
	res.sendFile('index.html', {root : './public/html'});
});

var controller = require("./controllers/controller.js");

app.get("/api/applicants", controller.getApps)
app.get("/api/applicants/:appID", controller.getApps)

app.post("/api/applicants", controller.createApp);

// displays a list of applicants
app.get('/applicants', function(req, res){
	console.log(req.body);
	res.sendFile('applicants.html', {root : './public/html'});
});

// creates and applicant
app.post('/applicant', function(req, res){
	// Here is where you need to get the data
	// from the post body and store it in the database
	res.sendFile("html/applicants.html", {root : "./public"});
		console.log(req.body);
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});