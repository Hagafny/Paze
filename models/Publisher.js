let bcrypt = require('bcrypt-nodejs');
let mongoose = require('mongoose');

let publisherSchema = mongoose.Schema({
  email: {type: String, required: true, unique: true},
  name: {type: String, required: true, trim: true},
  password: String
});

publisherSchema.methods.toJSON = function () {
    var publisher = this.toObject();
    delete publisher.password;
    return publisher;
}

publisherSchema.methods.comparePasswords = (password, callback) => {
    bcrypt.compare(password, this.password, callback);
}

publisherSchema.pre('save', function (next) {
    var publisher = this;
    if (!publisher.isModified('password')) return next();

    bcrypt.genSalt(10,  (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(publisher.password, salt, null,  (err, hash) => {
            if (err) return next(err);
            publisher.password = hash;
            next();
        })
    })
})



module.exports = mongoose.model('Publisher', publisherSchema);