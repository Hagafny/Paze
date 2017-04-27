let router = require('express').Router;
const participants = router();
const handlers = require('./handlers');

participants.get('/:id', handlers.getById);
participants.post('/', handlers.save);

const participantsSurvies = router({mergeParams: true});
participantsSurvies.get('/', handlers.getParticipantSurveys);

participants.use('/:id/surveys', handlers.getParticipantSurveys);

module.exports = participants; 