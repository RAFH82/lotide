const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};


const tail = (array) => {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

let test = tail([1,2,3,4,5]);

assertEqual(test.length, 4);
assertEqual(test[0], 2);

let test2 = tail([1]);
let test3 = tail([]);

console.log(test2);
console.log(test3);

