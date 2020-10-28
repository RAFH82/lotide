const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = (string) => {
  const results = {};
  for (const letter of string) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return(results);
};

countLetters("lighthouse in the house");

assertEqual(countLetters('ryannn')['n'],3);