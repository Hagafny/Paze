let mongoose = require('mongoose');

let specificAnswerSchema = mongoose.Schema({
  content: {type: String, require: true},
  sentiment: Number
}, {_id: false});

let answerSchema = mongoose.Schema({
    participantId: {type: String, ref: "Participant", required: true},
    surveyId: {type: mongoose.Schema.Types.ObjectId, ref: 'Survey', required: true},
    publisherId: {type: mongoose.Schema.Types.ObjectId, ref: 'Publisher', required: true},
    answers: [specificAnswerSchema],
});

answerSchema.index({ participantId: 1, surveyId: 1}, { unique: true });

module.exports = mongoose.model('Answer', answerSchema);  
