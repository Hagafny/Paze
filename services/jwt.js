var moment = require('moment');
var jwt = require('jwt-simple');

module.exports = function (publisher, res) {
    var payload = {
        sub: publisher.id,
        exp: moment().add(10, 'days').unix()
    };

    var token = jwt.encode(payload, "shhh...");

    res.status(200).send({
        publisher: publisher.toJSON(),
        token: token
    });
}