function letterCombinations(input_digit) {
  //Complete the function
	function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }

  const digitToLetters = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  const combinations = [];

  function backtrack(index, currentCombination) {
    if (index === digits.length) {
      combinations.push(currentCombination);
      return;
    }

    const currentDigit = digits[index];
    const letters = digitToLetters[currentDigit];

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      backtrack(index + 1, currentCombination + letter);
    }
  }

  backtrack(0, "");

  return combinations.sort();
}

// Example usage
const input = "23";
const combinations = letterCombinations(input);
console.log(combinations); // Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

}

module.exports = letterCombinations;
