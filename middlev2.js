const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (actual, expected) => {
  if (middle(actual)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = (array) => {
  if (array.length <= 2) return [];
  let middle, newArray;
  middle = Math.floor(array.length / 2);
  newArray = array.length / 2 === 1 ? [array[middle]] : [array[middle-1]], [array[middle]];
  return(newArray);
}

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3]))// => [2]
assertArraysEqual([1, 2, 3, 4, 5], [3]) // => [3]

console.log(middle([1, 2, 3, 4]))// => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]