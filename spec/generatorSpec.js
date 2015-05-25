var generator = require("../app/generator");

describe("returns an array", function(){

	it("returns an array", function(){
		expect(generator.generateHelloWorlds(0)).toEqual([]);
	});

	it("returns the correct number of Hello Worlds",function(){
		var result = generator.generateHelloWorlds(3);
		expect(result.length).toEqual(3);
	});

	it("returns only HelloWorlds",function(){
		var result = generator.generateHelloWorlds(3);

		result.forEach(function(element){
			expect(element).toBe("Hello World");
		});
	});
});