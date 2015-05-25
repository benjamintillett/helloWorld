var Robot = require('../app/robot');

describe("Robot",function(){

	beforeEach(function() {
		robot = new Robot();
  	});

	it("should run 5 meters and stop",function(){
		robot.runMeters(5);

		waitsFor(function(){
			return robot.motion == "stopped";	
		},"The robot should stop", 5000);

		runs(function(){
			expect(robot.meters).toBe(5);	
		});
	});	

	it("can also be tested using clock mock", function(){
		jasmine.Clock.useMock();
		robot.runMeters(5);		

		jasmine.Clock.tick(5000);

		expect(robot.motion).toEqual("stopped");
		expect(robot.meters).toEqual(5);

	}); 

});