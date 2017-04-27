const publisherService = require('../../services/publisherService');
const surveyService = require('../../services/surveyService');

let getById = (req, res) => {
    let id = req.params.id;
    publisherService.getById(id, (err, publisher) => {
        if (err)
            res.status(404).json(err);
        else if (!publisher)
            res.status(404).send("Invalid publisher ID");
        else
            res.status(200).send(publisher);
    })
}

let save = (req, res) => {
    publisherService.save(req.body, (err, savedPublisher) => {
        if (err)
            res.status(404).json(err);
        else
            res.status(200).send("Publisher saved");
    })
}

let getPublisherSurveys = (req, res) => {
    let publisherId = req.params.id;
    surveyService.getPublisherSurveys(publisherId, (err, surveys) => {
        if (err)
            res.status(404).json(err);
        else
            res.status(200).send(surveys);
    })
}

module.exports = {
    getById: getById,
    save: save,
    getPublisherSurveys: getPublisherSurveys
}