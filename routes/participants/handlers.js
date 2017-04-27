const participantService = require('../../services/participantService');
const surveyService = require('../../services/surveyService');

let getById = (req, res) => {
    let id = req.params.id;
    participantService.getById(id, (err, participant) => {
        if (err)
            res.status(404).json(err);
        else if (!participant)
            res.status(404).send("Invalid participant ID");
        else
            res.status(200).send(participant);
    })
}

let save = (req, res) => {
    participantService.save(req.body, (err, savedParticipant) => {
        if (err)
            res.status(404).json(err);
        else
            res.status(200).send("Participant saved");
    })
}

let getParticipantSurveys = (req, res) => {
    let participantId = req.params.id;
    surveyService.getParticipantSurveys(participantId, (err, surveys) => {
        if (err)
            res.status(404).json(err);
        else {
            participantService.getById(participantId, (err2, participant) => {
                if (err2)
                    res.status(404).json(err2);
                else {
                    var sendObj = {
                        participant: participant,
                        surveys: surveys
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
    getParticipantSurveys: getParticipantSurveys
}