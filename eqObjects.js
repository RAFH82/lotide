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
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    }
      else {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; // converts object into an array of keys and compares their lengths right off the hop
  }
  for (const key of Object.keys(object1)) { // converts object to array of keys a& iterates through each element (aka keys) of the object1 array 
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // for eack key, it checks to see if its value is an array in both objects
      if (!eqArrays(object1[key], object2[key])) { // satisfied that they key's values are both arrays, it then passes them into the eqArrays function to compare
        return false;
      }
    }
    if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    }
    else {
      if (object1[key] !== object2[key]) { // compares the objects key values against each other
        return false;
      }
    }
  } 
  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// assertEqual(eqObjects(ab, ba), true); // => true
// console.log(eqObjects(ab, ba));

// const abc = { a: "1", b: "2", c: "3" };

// assertEqual(eqObjects(ab, abc), false); // => false
// console.log(eqObjects(ab, abc));

const cd = { d: ["2", 3], c: 1 };
const dc = { c: 1, d: ["2", 3] };
// console.log(eqObjects(cd, dc));
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

console.log(eqObjects({ a: { z: {x: 2}, }, b: 2 }, { a: { z: {x: 2}, }, b: 2 })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false

console.log(eqObjects({ a: {b: {c: {d: 1, e: 2}, f: 5, j:{ k: 5}}}, x: 5}, { a: {b: {c: {d: 1, e: 2}, f: 5, j:{ k: 5}}}, x: 5})); // => true

