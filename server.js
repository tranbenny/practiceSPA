// server.js

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


// config

var db = require('./config/db');

var port = process.env.PORT || 9000;

// connecting to a mongoDB database
// mongoose.connect(db.url);

app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

// routes
require('./app/routes')(app);

app.listen(port);
console.log("Listening on port " + port);

exports = module.exports = app;