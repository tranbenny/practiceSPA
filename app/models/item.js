var mongoose = require('mongoose');

module.exports = mongoose.model('Item', {
	value : {type : String, default : ''}
});