var Code = require('code');   // assertion library
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var expect = Code.expect;

var Hapi = require('hapi');
var Index = require('../../lib/routes/index');

lab.experiment('index route', function () {

    lab.test('registers correctly', function (done) {

        var server = new Hapi.Server({ 'minimal': true });
        server.connection({ 'port': 8080 });
        server.register({
          register: Index
        }, function (err) {

            expect(err).to.not.exist();
            done();
        });
    });
});
