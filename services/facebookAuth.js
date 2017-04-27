var request = require('request');
var qs = require('querystring');
var createSendToken = require('./jwt.js');
var config = require('../config.js');;
var participantService = require('../services/participantService.js');

module.exports = function (req, res) {
    var accessTokenUrl = 'https://graph.facebook.com/oauth/access_token';
    var graphApiUrl = 'https://graph.facebook.com/me';

    var params = {
        client_id: req.body.clientId,
        redirect_uri: req.body.redirectUri,
        client_secret: config.FB_APP_SECRET,
        code: req.body.code
    };

    request.get({
        url: accessTokenUrl,
        qs: params
    }, function (err, response, accessToken) {
        accessToken = qs.parse(accessToken);
        request.get({
            url: graphApiUrl,
            qs: accessToken,
            json: true
        }, function (err, response, profile) {
            participantService.getByFbid(profile.id, (err, existingParticipant) => {
                if (existingParticipant)
                    return createSendToken(existingParticipant, res)

                var newParticipant = {
                    fbid: profile.id,
                    name: profile.name
                }

                participantService.save(newParticipant, (err, savedParticipant) => {
                    createSendToken(savedParticipant, res);
                })
            })
        })
    })
}