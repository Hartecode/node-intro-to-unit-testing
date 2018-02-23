// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){

	it('should return fizz-buzz for multiples of 15', function(){
		const normalCases = [15, 30, 45];

		normalCases.forEach(function(inp){
			expect(fizzBuzzer(inp)).to.equal('fizz-buzz');
		});
	});

	it('should return fizz for multiples of 3', function(){
		const normalCases = [3, 6, 9, 12];

		normalCases.forEach(function(inp){
			expect(fizzBuzzer(inp)).to.equal('fizz');
		});
	});

	it('should return buzz for multiples of 5', function(){
		const normalCases = [5, 10, 20];

		normalCases.forEach(function(inp){
			expect(fizzBuzzer(inp)).to.equal('buzz');
		});
	});

	it('should return a number if not a multiples of 3, 5, 15', function(){
		const normalCases = [1, 2, 4, 7];

		normalCases.forEach(function(inp){
			expect(fizzBuzzer(inp)).to.equal(inp);
		});
	});

	it('should raise error if args not numbers', function(){
		const badInputs = [true, '5', 'Sean', false];
		badInputs.forEach(function(inp){
			expect(function() {
				fizzBuzzer(inp)
			}).to.throw(Error);
		});
	})
});