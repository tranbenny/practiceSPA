// all CRUD operations
// GET : get all items
// POST : add new items
// GET + ID : get single item
// PUT: update an item
// DELETE : delete an item

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

	app.get('/api/items/:item_id', function(req, res) {
		Item.findById(req.params.item_id, function(err, item) {
			if (err) {
				res.send(err);
			}
			res.json(item);
		});
	});

	app.put('/api/items/:item_id', function(req, res) {
		Item.findById(req.params.item_id, function(err, item) {
			if (err) {
				res.send(err);
			}
			if (item.done) {
				item.done = false;
			} else {
				item.done = true;
			}
			item.save(function(err) {
				if (err) {
					res.send(err);
				}
				res.json({ message : 'task done!'})
			});
		})
	});	

	app.delete('/api/items/:item_id', function(req, res) {
		Item.remove({
			_id : req.params.item_id
		}, function(err, item) {
			if (err) {
				res.send(err);
			}
			res.send({message: "Successfully deleted"});
		});
	});

	// route to handle all the angular routes
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});

}