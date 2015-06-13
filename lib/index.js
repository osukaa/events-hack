var Glue = require('glue');
var Manifest = require('./manifest');

var options = {
  relativeTo: __dirname
};

Glue.compose(Manifest.get('/'), options, function (err, server) {

    if (err) {
        throw err;
    }

    server.start(function () {

        console.log('Started the plot device.');
    });
});
