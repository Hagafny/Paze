let Participant = require('../models/Participant');

let getById = (id, callback) => {
    Participant.findOne({ _id: id }, (err, participant) => {
        if (err) console.error(err);
        
        if (typeof callback == typeof Function)
            callback(err, participant);
    })
}

let getByFbid = (fbid, callback) => {
    Participant.findOne({ fbid: fbid }, (err, participant) => {

        if(!participant) {
            console.log("NOT MYU FAULT");
        }

        if (err) console.error(err);
        
        if (typeof callback == typeof Function)
            callback(err, participant);
    })
}

let save = (participant, callback) => {
    new Participant(participant).save((err, savedParticipant) => {
        if (err) console.error(err);
        else
            console.log(`participant ${savedParticipant.name} saved`);

        if (typeof callback == typeof Function)
            callback(err, savedParticipant);
    });
}

let getParticpantsByDeliveryGroup = (deliveryGroup, callback) => {
    let query = Participant.find();

    if (deliveryGroup.gender)
        query.where('gender').equals(deliveryGroup.gender);

    if (deliveryGroup.ageRange)
        query.where('age').gte(deliveryGroup.ageRange.min).lte(deliveryGroup.ageRange.max);

    if (deliveryGroup.incomeRange)
        query.where('age').gte(deliveryGroup.incomeRange.min).lte(deliveryGroup.incomeRange.max);

    if (deliveryGroup.location)
        query.where('location').equals(deliveryGroup.location);

    if (deliveryGroup.hashtags.length != 0)
        query.where('hashtags').in(deliveryGroup.hashtags);

    query.select('_id');

    query.exec((err, participants) => {
        if (err) console.error(err);
        if (typeof callback == typeof Function)
            callback(err, participants);
    });
}

module.exports = {
    getById: getById,
    getByFbid: getByFbid,
    save: save,
    getParticpantsByDeliveryGroup: getParticpantsByDeliveryGroup
};