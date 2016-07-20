var mongoose = require('mongoose');

//the data base is called client-email (or whatever you want it to be...this is what I use on my computer)
//the collection is emails ie db.emails.find()//
mongoose.connect("mongodb://localhost/client-email", function(err) {
		if(err) {
	     console.log("Failed connecting to Mongodb!");
		} else {
			console.log("Succnessfully connected to Mongo!");
		}
});


var emailSchema = new mongoose.Schema({
	name: String,
	email: String
});

var user = mongoose.model("Email", emailSchema);

module.exports = user;

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	
	app.post('/new', function(req, res) {
		new user({
			name: req.body.name,
			email: req.body.email
		}).save(function(err,doc) {
			if(err)  res.json(err);
			else res.send('Successfully inserted! Click back to get back to the page');
		});
	});
	
	
	 
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
	
	
};




