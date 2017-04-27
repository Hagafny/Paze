const answers = require('express').Router();
const handlers = require('./handlers');

answers.get('/:id', handlers.getById);
answers.post('/', handlers.save);

module.exports = answers; 