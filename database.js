'use strict'



let mongoose = require('mongoose');
const ENV = require('./config/env')[process.env.NODE_ENV || 'development']


mongoose.connect(ENV.db || 'mongodb://localhost/test-app', function(err) {
    if (err) {
        console.log('Failed when trying to connect to Mongodb!');
    } else {
        console.log('Successfully connected to Mongo');
    }
});
