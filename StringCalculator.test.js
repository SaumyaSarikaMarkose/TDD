const StringCalculator = require("./StringCalculator");

test("should return 0 for an empty string", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("")).toBe(0);
});

test("should return the number itself for a single number", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1")).toBe(1);
});

test("should return the sum of two numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1,5")).toBe(6);
});

test("should return the sum of multiple numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1,2,3")).toBe(6);
  expect(calculator.add("1,2,3,4,5")).toBe(15);
});

test("should handle new lines between numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1\n2,3")).toBe(6);
});

test("should support different delimiters", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//;\n1;2")).toBe(3);
  expect(calculator.add("//|\n1|2|3")).toBe(6);
});

test("should throw an error when negative numbers are provided", () => {
  const calculator = new StringCalculator();
  expect(() => calculator.add("1,-2,3")).toThrow(
    "Negative numbers not allowed: -2"
  );
  expect(() => calculator.add("1,-2,-3")).toThrow(
    "Negative numbers not allowed: -2,-3"
  );
});

test("should support different delimiters", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//;\n1;2")).toBe(3);
  expect(calculator.add("//|\n1|2|3")).toBe(6);
});

test("should handle multiple character delimiters", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//[***]\n1***2***3")).toBe(6);
});

test("should handle multiple delimiters", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//[;][|]\n1;2|3")).toBe(6);
});
