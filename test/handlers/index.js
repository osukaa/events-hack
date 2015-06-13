var Code = require('code');   // assertion library
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var expect = Code.expect;

var Index = require('../../lib/handlers/index');

lab.experiment('index handler', function () {

    lab.test('returns ok', function (done) {

        Index({ 'dummy': 'test' }, function (response) {

            expect(response).to.exist();
            expect(response).to.match(/ok/);
            done();
        });
    });
});
