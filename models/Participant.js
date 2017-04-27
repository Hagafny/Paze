let mongoose = require('mongoose');
 
let participantSchema = mongoose.Schema({
  fbid: {type: String, required: true}, 
  name: {type: String, required: true, trim: true},
  age: Number,
  gender: Number,
  income: Number,
  location: String,
  hashtags: [String]
});

module.exports = mongoose.model('Participant', participantSchema);