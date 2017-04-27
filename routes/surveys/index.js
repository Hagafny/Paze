let router = require('express').Router;
const surveys = router();
const handlers = require('./handlers');


surveys.get('/:id', handlers.getById);
surveys.post('/', handlers.save);


const surveyAnswers = router({mergeParams: true});
surveyAnswers.get('/', handlers.getAnswersForSurvey);

surveys.use('/:id/answers', surveyAnswers);

module.exports = surveys; 