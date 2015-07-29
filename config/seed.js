// populates database with sample data upon start

'use strict';

var Item = require('../app/models/item.js');

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