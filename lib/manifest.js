var Confidence = require('confidence');
var Config = require('./config');

var criteria = {
  env: process.env.NODE_ENV
};

var manifest = {
  server: {
    debug: {
      request: ['error']
    }
  },
  connections: [{
    port: Config.get('/port')
  }],
  plugins: {
    './routes/index': {}
  }
};

var store = new Confidence.Store(manifest);

exports.get = function (key) {

    return store.get(key, criteria);
};

exports.meta = function (key) {

    return store.meta(key, criteria);
};
