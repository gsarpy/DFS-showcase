let mongoose = require('mongoose');

let teamScoreSchema = new mongoose.Schema({
	TeamMateNumber: Number,
	choice: Number
});

let MentorSchema = new mongoose.Schema({
	teamID: { type: String},
	name: String,
	teamScore: [teamScoreSchema]
});

let Mentor = mongoose.model('Mentor', MentorSchema);
module.exports = Mentor;
