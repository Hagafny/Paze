const routes = require('express').Router();
const participants = require('./participants');
const publishers = require('./publishers');
const surveys = require('./surveys');
const answers = require('./answers');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/participants', participants);
routes.use('/publishers', publishers);
routes.use('/surveys', surveys);
routes.use('/answers', answers);

module.exports = routes;