class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /[\n,]/;

    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(\[.*?\]|\D)\n/);
      if (delimiterMatch) {
        const customDelimiter = delimiterMatch[1];
        if (customDelimiter.startsWith("[") && customDelimiter.endsWith("]")) {
          const delimiters = customDelimiter.slice(1, -1).split("][");
          const escapedDelimiters = delimiters.map((d) =>
            d.replace(/[\[\]\\^$.*+?()|{}]/g, "\\$&")
          );
          delimiter = new RegExp(escapedDelimiters.join("|"), "g");
        } else {
          delimiter = new RegExp(
            customDelimiter.replace(/[\[\]\\^$.*+?()|{}]/g, "\\$&"),
            "g"
          );
        }

        numbers = numbers.slice(delimiterMatch[0].length);
      }
    }

    const numberArray = numbers
      .split(delimiter)
      .map((num) => parseInt(num, 10))
      .filter((num) => !isNaN(num));

    const negativeNumbers = numberArray.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        `Negative numbers not allowed: ${negativeNumbers.join(",")}`
      );
    }

    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
