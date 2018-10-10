const Add = require( "./StringCalculator");

it("should return zero on an empty string", () => {
	expect( Add("")).toBe(0);
});

it("should return 5", () => {
	expect( Add("5")).toBe(5);
});

it("should return 10", () => {
	expect( Add("7,3")).toBe(10);
});