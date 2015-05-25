function VeryImportantInformation () {};

VeryImportantInformation.send = function(information) {
	jQuery.ajax({
			method: "POST", 
			url: 	"/important_information", 
			data: 	information
	});
}	

module.exports = VeryImportantInformation;

