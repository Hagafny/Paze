'use strict';

const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const app = express();
const apiAiModule = require('./apiaiModule');

app.set('port', (process.env.PORT || 5000));

//verify request came from facebook
app.use(bodyParser.json({
	verify: apiAiModule.verifyRequestSignature
}));

//serve static files in the public directory
app.use(express.static('public'));

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}))

// Process application/json
app.use(bodyParser.json());

// Index route
app.get('/', function (req, res) {
	res.send('Hello world, I am a chat bot')
})

// for Facebook verification
app.get('/webhook/', apiAiModule.webhookGet);
app.post('/webhook/', apiAiModule.webhookPost);

// Spin up the server
app.listen(app.get('port'), function () {
	console.log('running on port', app.get('port'))
})
