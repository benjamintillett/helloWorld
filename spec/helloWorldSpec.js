var request = require('request');
// var request = require("request");

// var base_url = "http://localhost:3000/"

describe("hello World Server", function(){

	it("returns the correct status code", function(done) {
	  request("http://localhost:3000/", function(error, response, body){
	    expect(response.statusCode).toEqual(200);
	    done();
	  });
	});

	it("returns Hello World array",function(done) {
		request("http://localhost:3000?number=3",function(error, response, body){
			expect(body).toEqual(JSON.stringify(["Hello World", "Hello World", "Hello World"]));
			done();
		});	
	});

});


