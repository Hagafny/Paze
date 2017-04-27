let Survey = require('../models/Survey');
let Answer = require('../models/Answer');

let baseFields = '_id name amountOfParticipants pazePoints'

let getById = (id, callback) => {
    Survey.findOne({ _id: id }, (err, survey) => {
        if (err) console.error(err);
        if (typeof callback == typeof Function)
            callback(err, survey);
    })
}

let save = (survey, callback) => {
    new Survey(survey).save((err, savedSurvey) => {
        if (err) console.error(err);
        else
            console.log(`survey ${savedSurvey.name} saved`);
        if (typeof callback == typeof Function)
            callback(err, savedSurvey);
    });
}

let getPublisherSurveys = (publisherId, callback) => {
    Survey.find({ publisherId: publisherId }, baseFields, (err, surveys) => {
        if (err) console.error(err);

        if (typeof callback == typeof Function)
            callback(err, surveys);
    })
}

let getParticipantSurveys = (participantId, callback) => {
    Answer.find({ participantId: participantId }, 'surveyId answers')
        .lean().populate('surveyId', baseFields).exec((err, surveys) => {
            if (err) console.error(err);

            if (typeof callback == typeof Function)
                callback(err, surveys);
        })
}

module.exports = {
    getById: getById,
    save: save,
    getPublisherSurveys: getPublisherSurveys,
    getParticipantSurveys: getParticipantSurveys
};