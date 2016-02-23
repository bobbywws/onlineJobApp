var Applicant = require("../models/mongoose.js");

function createApp (req, res) {
	var applicant = new Applicant({
		name   : req.body.name,
		bio    : req.body.bio,
		skills : req.body.skills.split(", "),
		exp    : +req.body.exp,
		why    : req.body.why,
	})
	applicant.save(function(err, savedApplicant) {
		res.send(savedApplicant)
	})
};

function getApps (req, res) {
	// Get one
	if(req.params.appID) {
		Applicant.findOne({_id : req.params.appID}, function(err, doc) {
			res.send(doc)
		})
	}
	// Get many
	else {
		Applicant.find({}, function(err, doc) {
			res.send(doc)
		})
	}
};

module.exports = {
	createApp : createApp,
	getApps : getApps
};