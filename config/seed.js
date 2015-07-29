// populates database with sample data upon start

'use strict';

var Item = require('../app/models/item.js');
var User = require('../app/models/user.js');

Item.find({}).remove(function() {
	Item.create({
		text : "example",
		done : false
	}, {
		text : "example2",
		done : true
	}, {
		text : "example3", 
		done : false
	});
});

User.find({}).remove(function() {
	User.create({
		name : "Guest",
		email : "example@gmail.com"
	});
});