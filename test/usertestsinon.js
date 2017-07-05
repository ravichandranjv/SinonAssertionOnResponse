var assert=require('assert');
var request = require('supertest');
var sinon     = require('sinon');
var spy=sinon.spy();
describe('simple test of about route with params',function(){
	var server;
	beforeEach(function () {
  		server = require('../server').server;
	});

it ('matches the response JSON when the about page is called',function(done){
	var getSpy=sinon.spy(server,'get');
	const expectedJson = {"data":{"username":"hellojv"}};

 	request(server)
    	.get('/about/jv')
    	.expect(200)
    	.end(function (err, response) {
	 sinon.assert.match(response.body, expectedJson);	
	done();
	});
});

});