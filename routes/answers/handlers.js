const answerService = require('../../services/answerService');

let getById = (req, res) => {
    let id = req.params.id;
    answerService.getById(id, (answer) => {
        if (err)
            res.status(404).json(err);
        else if (!answer)
            res.status(404).send("Invalid answer ID");
        else
            res.status(200).send(answer);
    })
}

let save = (req, res) => {
    answerService.save(req.body, (err, savedAnswer) => {
        if (err)
            res.status(404).json(err);
        else
            res.status(200).send("Answer saved");
    })
}

module.exports = {
    getById: getById,
    save: save
}