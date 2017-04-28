const publisherService = require('../../services/publisherService');
const answerService = require('../../services/answerService');

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
    answerService.getAnswersForPublisher(publisherId, (err, surveys) => {
        var newSurveys = [];
        for (var key in surveys) {
            newSurveys.push(surveys[key]);
        }

        if (err)
            res.status(404).json(err);
        else {
            publisherService.getById(publisherId, (err2, publisher) => {
                if (err2)
                    res.status(404).json(err2);
                else {
                    var sendObj = {
                        publisher: publisher,
                        surveys: newSurveys
                    }

                    res.status(200).send(sendObj);
                }
            })
        }

    })
}

module.exports = {
    getById: getById,
    save: save,
    getPublisherSurveys: getPublisherSurveys
}