let mongoose = require('mongoose');
 
let participantSchema = mongoose.Schema({
  fbid: {type: String, required: true}, 
  name: {type: String, required: true, trim: true},
  age: Number,
  picture: String,
  status: Number,
  gender: Number,
  income: Number,
  
  active: Boolean,
  surveyId: Number,
  questionNum: Number,
  answers: [String]
  
  location: String,
  hashtags: [String]
});

module.exports = mongoose.model('Participant', participantSchema);