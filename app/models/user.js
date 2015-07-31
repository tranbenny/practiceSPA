var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name : String,
	email : String, 
	toDoItems : {
		text : String,
		done : Boolean
	}
});

module.exports = mongoose.model('User', UserSchema);