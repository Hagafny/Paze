let router = require('express').Router;
const publishers = router();
const handlers = require('./handlers');

publishers.get('/:id', handlers.getById);
publishers.post('/', handlers.save);

const publisherSurvies = router({ mergeParams: true });
publisherSurvies.get('/', handlers.getPublisherSurveys);

publishers.use('/:id/surveys', handlers.getPublisherSurveys);

module.exports = publishers; 