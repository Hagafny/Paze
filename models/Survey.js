var mongoose = require('mongoose');
var skipEmpty = require('mongoose-skip-empty');

var rangeSchema = mongoose.Schema({
    min: Number,
    max: Number
}, {_id: false});

var questionSchema = mongoose.Schema({
    content: String,
    type: Number,
    options: [String],

}, { _id: false });

var deliveryGroupSchema = mongoose.Schema({
    ageRange: rangeSchema,
    incomeRange: rangeSchema,
    location: String,
    gender: Number,
    hashtags: [String]
}, { _id: false }); 

var surveySchema = mongoose.Schema({
    publisherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    name: { type: String, required: true, trim: true },
    amountOfParticipants: { type: Number, required: true },
    questions: [questionSchema],
    deliveryGroup: deliveryGroupSchema,
    pazePoints: { type: Number, default: 0 }
});

surveySchema.methods.getAmountOfQuestions = function () {
    return this.questions.length;
}

module.exports = mongoose.model('Survey', surveySchema);
