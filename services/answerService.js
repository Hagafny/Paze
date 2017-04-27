let Answer = require('../models/Answer');

let getById = (id, callback) => {
    Answer.findOne({ _id: id }, (err, answer) => {
        if (err) console.error(err);
        if (typeof callback == typeof Function)
            callback(err, answer);
    })
}

let save = (answer, callback) => {
    new Answer(answer).save((err, savedAnswer) => {
        if (err) console.error(err);
        else
            console.log(`answer ${savedAnswer._id} saved`);
        
        if (typeof callback == typeof Function)
            callback(err, savedAnswer);
    });
}

let getAnswersForSurvey = (surveyId, callback) => {
    Answer.find({ surveyId: surveyId }, (err, answers) => {
        if (err) console.error(err);
        if (typeof callback == typeof Function)
            callback(err, answers);
    })
}

module.exports = {
    getById: getById,
    save: save,
    getAnswersForSurvey: getAnswersForSurvey
};