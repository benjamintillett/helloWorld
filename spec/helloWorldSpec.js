var request = require('request');
// var request = require("request");

// var base_url = "http://localhost:3000/"

describe("hello World Server", function(){

	 	it("knows 1 is not 2", function(){
	 		expect(1).toEqual(1);
	 	});

	it("should respond with hello world", function(done) {
	  request("http://localhost:3000/", function(error, response, body){
	    console.log(error);
	    expect(body).toEqual("hello world");
	    done();
	  });
	});

});






// describe("Hello World Server", function() {
//   describe("GET /", function() {
//     it("returns status code 200", function(done) {
//       request.get(base_url, function(error, response, body) {
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//     });
//   });
// });