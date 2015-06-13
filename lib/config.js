var Confidence = require('confidence');

var criteria = {
  env: process.env.NODE_ENV
};

var config = {
  projectName: 'events-hack',
  port: 8080
};

var store = new Confidence.Store(config);

exports.get = function (key) {

    return store.get(key, criteria);
};

exports.meta = function (key) {

    return store.meta(key, criteria);
};
