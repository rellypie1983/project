// grab the mongoose module
var mongoose = require('mongoose');


var emailSchema = new mongoose.Schema({
	name:String,
	email:String
});

var user = mongoose.model("Email", emailSchema);

module.exports = user;