let mongoose = require('mongoose');

let Team = new mongoose.Schema({
  mentor: {
    type: String,
    trim: true
  },
  score: {
    type: Integer,
  },
  school_name: {
    type: String,
    trim: true,
  },
  team_name: {
    type: String,
    trim: true,
  }
});

let TeamSchema = mongoose.model('Team', TeamSchema);
module.exports = TeamSchema;
