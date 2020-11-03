# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @RAFH82/lotide`

**Require it:**

`const _ = require('@RAFH82/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first item in an array
* `middle(array)`: returns middle item in an array of odd length, and the middle two items in an array of even length
* `tail(array)`: returns the last item in an array
* `assertArraysEqual(array1, array2)`: compares two arrays for strict equality and logs output msg to console
* `eqArrays(array1, array2)`: returns boolean when comparing two arrays
* `assertObjectsEqual(object1, object2)`: compares two objects for strict equality and logs output msg to console
* `eqObjects(object1, object2)`: returns boolean when comparing two objects
* `map(array, callback)`: applys a callback function on an array, returns a new array
*  `flatten(array)`: flattens an array of arrays to one level deep. returns a new array
* `letterPositions(string)`: returns an object where the keys represent each letter of the string, and values are arrays representing the index of where those letters are located in the string
* `findKeyByValue(obj, val)`: searches an object keys for a specific value, then returns that key
* `findKey(object, callback)`: applys a callback function on every key of an object, and if it returns true, returns that key
* `countOnly(allItems, itemsToCount)`: iterates through an array (allItems) and counts the number of times an item exists in that array (itemsToCount) and returns an object of with the results
* `countLetters(string)`: interates through a string, and retuns an object dispalying how many times each letter was found
* `takeUntil(array, callback)`: iterates through an array and pushes each element to a new array until the callback function returns a true. returns the new array
* `without(source, itemsToRemove)`: iterates through an array and pushes each element that does not meet the specified criteria. returns new array
