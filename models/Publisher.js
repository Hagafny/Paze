let bcrypt = require('bcrypt-nodejs');
let mongoose = require('mongoose');

let publisherSchema = mongoose.Schema({
  email: {type: String, required: true, unique: true},
  name: {type: String, required: true, trim: true}
});

module.exports = mongoose.model('Publisher', publisherSchema);