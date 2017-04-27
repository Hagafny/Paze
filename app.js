'use strict';

const express = require('express');
const app = express();
const crypto = require('crypto');
const bodyParser = require('body-parser');
const apiAiModule = require('./apiaiModule');

const passport = require('passport');
//const facebookAuth = require('./services/facebookAuth.js');
//const localStrategy = require('./services/localStrategy.js');
const cognitiveServices = require('cognitive-services');

// 4321c78c46b963e82ea468ca0e207bb661d1bf61
const routes = require('./routes');

apiAiModule.textAnalytic = new cognitiveServices.textAnalytics({
    API_KEY: '59020ee40ddf870004a4ea1f'
});

require('./dbConnector')(() => {
    console.log('mongo connected!');
})

app.set('port', (process.env.PORT || 5000));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
});

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}))

// Process application/json
app.use(bodyParser.json());

//serve static files in the public directory
app.use(express.static('public'));

// Index route
app.get('/', function (req, res) {
	res.send('Hello world, I am a chat bot')
})

// for Facebook verification
app.get('/webhook/', apiAiModule.webhookGet);
app.post('/webhook/', apiAiModule.webhookPost);

app.use('/api', routes);

// Spin up the server
app.listen(app.get('port'), function () {
	console.log('running on port', app.get('port'))
})