const letterPositions = (string) => {
  const results = {};
  for (const letter of string) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(string.indexOf(letter));
      } else {
        results[letter] = [string.indexOf(letter)];
      }
    }
  }
  return results;
};

module.exports = letterPositions;