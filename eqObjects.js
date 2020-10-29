const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; // converts object into an array of keys and compares their lengths
  }
  for (const key of Object.keys(object1)) { // iterates through each element (aka keys) of the object1 array 
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // for eack key, it checks to see if its value is an array in both objects
      if (!eqArrays(object1[key], object2[key])) { // satisfied that they key's values are both arrays, it then passes them into the eqArrays function to compare
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) { // compares the objects key values against each other
        return false;
      }
    }
  } 
  return true;
};
// Array.isArray([1, 2, 3]);
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// assertEqual(eqObjects(ab, ba), true); // => true
// console.log(eqObjects(ab, ba));

// const abc = { a: "1", b: "2", c: "3" };

// assertEqual(eqObjects(ab, abc), false); // => false
// console.log(eqObjects(ab, abc));

const cd = { d: ["2", 3], c: 1 };
const dc = { c: 1, d: ["2", 3] };
assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false


