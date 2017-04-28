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

let getAnswersForPublisher = (publisherId, callback) => {
    Answer.find({ publisherId: publisherId }).populate('surveyId').exec((err, answers) => {
        if (err) console.error(err);
        if (typeof callback == typeof Function) {
            var surveys = [];
            var answersLength = answers.length;
            for (var i = 0; i <  answersLength; i++) {
                if (!surveys[answers[i].surveyId._id]) {
                    surveys[answers[i].surveyId._id] = {
                        survey: answers[i].surveyId,
                        answersAmount: 1,
                        questionAmount: answers[i].surveyId.questions.length
                    };
                }
                else {
                    surveys[answers[i].surveyId._id].answersAmount++;
                }
            }
                    callback(err, surveys);
        }
    })
}

module.exports = {
    getById: getById,
    save: save,
    getAnswersForSurvey: getAnswersForSurvey,
    getAnswersForPublisher: getAnswersForPublisher
};