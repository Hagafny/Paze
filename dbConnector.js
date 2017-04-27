const config = require('./config');
var mongoose = require('mongoose');

let connect = (callback) => {
    var options = {
        server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
        replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
    };

    //var local = 'mongodb://localhost/pazetest';
    var mongodbUri = config.MONGODB_URL;

    mongoose.connect(mongodbUri, options);
    var conn = mongoose.connection;

    conn.on('error', console.error.bind(console, 'connection error:'));

    conn.once('open', function () {
        callback();
    });

}

module.exports = connect;