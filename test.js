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

it("should return 10", () => {
	expect( Add("1,2,3,4")).toBe(10);
});

it("should return 10", () => {
	expect( Add("1,2\n,3,4")).toBe(10);
});

it("should return 10", () => {
	expect( Add("1,-2,2,3,4")).toBe(10);
});

it("should return 4", () => {
	expect( Add("-1,-2,-3,4")).toBe(4);
});