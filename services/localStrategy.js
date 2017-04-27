var publisherService = require('../services/publisherService.js');
var LocalStrategy = require('passport-local').Strategy;

var strategyOptions = {
    usernameField: 'email'
};

exports.login = new LocalStrategy(strategyOptions, (email, password, done) => {
    publisherService.getByEmail(email, function (err, publisher) {
        if (err) return done(err);

        if (!publisher) {
            return done(null, false, {
                message: 'Wrong email/password'
            });
        }

        publisher.comparePasswords(password, function (err, isMatch) {
            if (err) return done(err);

            if (!isMatch)
                return done(null, false, { message: 'Wrong email/password' });

            return done(null, publisher);

        });
    })
});

exports.register = new LocalStrategy(
    strategyOptions, function (email, password, done) {
        publisherService.getByEmail(email, function (err, publisher) {
            if (err) return done(err);

            if (publisher) {
                return done(null, false, {
                    message: 'Email already exists'
                });
            }

            var publisher = {
                email: email,
                password: password,
                name: "testy"
            };

            publisherService.save(publisher, (err, savedPublisher) => {
                done(null, newUser);
            })
        })
    });