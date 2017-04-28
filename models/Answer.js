let mongoose = require('mongoose');

let answerSchema = mongoose.Schema({
    participantId: {type: String, ref: "Participant", required: true},
    surveyId: {type: mongoose.Schema.Types.ObjectId, ref: 'Survey', required: true},
    publisherId: {type: mongoose.Schema.Types.ObjectId, ref: 'Publisher', required: true},
    answers: [mongoose.Schema.Types.Mixed],
});

answerSchema.index({ participantId: 1, surveyId: 1}, { unique: true });

module.exports = mongoose.model('Answer', answerSchema);  
