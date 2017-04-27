let Publisher = require('../models/Publisher');

let getById = (id, callback) => {
    Publisher.findOne({ _id: id }, (err, publisher) => {
        if (err) console.error(err);
        
        if (typeof callback == typeof Function)
            callback(err, publisher);
    })
}

let save = (publisher, callback) => {
    new Publisher(publisher).save((err, savedPublisher) => {
        if (err) console.error(err);
        else
            console.log(`publisher ${savedPublisher.name} saved`);
        
        if (typeof callback == typeof Function)
            callback(err, savedPublisher);
    });
}

let getByEmail = (email, callback) => {
     Publisher.findOne({ email: email }, (err, publisher) => {
        if (err) console.error(err);
        
        if (typeof callback == typeof Function)
            callback(err, publisher);
    })   
}

module.exports = {
    getById: getById,
    save: save,
    getByEmail: getByEmail
};