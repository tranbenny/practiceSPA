var Item = require('./models/item');

module.exports = function(app) {
	app.get('/api/items', function(req, res) {
		Item.find(function(err, items) {
			if (err) {
				res.send(err);
			}
			res.json(items);
		});
	});

	app.post('/api/items', function(req, res) {
		Item.create({
			text : req.body.text,
			done : false
		}, function(err, item) {
			if (err) {
				res.send(err);
			}
			Item.find(function(err, items) {
				if (err) {
					res.send(err);
				}
				res.json(items);
			})
		});
	});

	// route to handle all the angular routes
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});

}