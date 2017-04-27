const surveyService = require('../../services/surveyService');
const answerService = require('../../services/answerService');

let getById = (req, res) => {
    let id = req.params.id;
    surveyService.getById(id, (err, survey) => {
        if (err)
            res.stats(404).json(err);
        else if (!survey)
            res.status(404).send("Invalid survey ID");
        else
            res.status(200).send(survey);
    })
}

let save = (req, res) => {
    surveyService.save(req.body, (err, savedSurvey) => {
        if (err)
            res.status(404).json(err);
        else
            res.status(200).send("Survey saved");
    })
}

let getAnswersForSurvey = (req, res) => {
    let surveyId = req.params.id;
    answerService.getAnswersForSurvey(surveyId, (err, answers) => {
        if (err)
            res.status(404).json(err);
        else
            res.status(200).send(answers);
    });
}

module.exports = {
    getById: getById,
    save: save,
    getAnswersForSurvey: getAnswersForSurvey
}