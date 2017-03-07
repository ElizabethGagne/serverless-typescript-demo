var assert = require('assert');
var request = require('request');
var fs = require('fs');

describe('Hello', function() {
    this.timeout(5000);
    it('should call hello api', function(done) {

        // Build and request path
        var path = "https://" + process.env.API_ENDPOINT + "/hello";

        request.get(path, function (err, res, body){
            if(err){
                throw new Error("GET call failed: " + err);
            }

            assert.equal(200, res.statusCode, "Create Status Code != 200 (" + res.statusCode + ")");
            assert.equal('Go Serverless v1.0!', res.body);
            done();
        });
    });
});