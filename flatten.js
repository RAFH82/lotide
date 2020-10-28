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

const flatten = (array) => {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 1) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  console.log(flattenedArray);
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
flatten([[1, 2], 3, 12, [6, 7]]);
flatten(["a", 1, ["a", 7, "f", 9]]);

// Ben's version
// const flatten = (arr) => {
//   let flattenedArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flattenedArr = flattenedArr.concat(arr[i]);
//     } else {
//       flattenedArr.push(arr[i]);
//     }
//   }
//   return flattenedArr;
// };

