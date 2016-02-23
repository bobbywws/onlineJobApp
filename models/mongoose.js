// Require mongoose
var mongoose = require('mongoose');

var applicantsSchema = mongoose.Schema({
	name    : String,
	bio     : String,
	skills  : String,
	exp     : Number,
	why     : String,
});

module.exports = mongoose.model('Applicant', applicantsSchema);
