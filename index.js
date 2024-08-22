const readline = require("readline");
const StringCalculator = require("./StringCalculator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculator = new StringCalculator();

const promptUser = () => {
  rl.question("Enter a string of numbers: ", (input) => {
    try {
      const result = calculator.add(input);
      console.log(`The result is: ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    } finally {
      rl.close();
    }
  });
};

promptUser();
