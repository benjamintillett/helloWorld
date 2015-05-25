
function JQuery(){
	this.ajax = function(){
		return 1;
	};
};

jQuery = new JQuery();

var VeryImportantInformation = require('../app/veryImportantInformation.js');

describe('very important information',function() {
	it('should be sent', function(){
		spyOn(jQuery,'ajax');
		var information = {"i am": Math.random()};
		VeryImportantInformation.send(information);

		expect(1).toEqual(1);
		expect(jQuery.ajax).toHaveBeenCalledWith({
			method: "POST", 
			url: 	"/important_information", 
			data: 	information
		});
	});
});