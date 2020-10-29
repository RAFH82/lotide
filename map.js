const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];


const results1 = (map(words, word => word[0]));
const results2 = (map(words, word => word.length));



assertArraysEqual(map(words, word => word[0]), results1);
assertArraysEqual(map(words, word => word.length), results2);

