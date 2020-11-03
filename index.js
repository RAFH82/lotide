// all utility functions
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const without = require('./without.js');
const takeUntil = require('./takeUntil');
const map = require('./map');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');

// object containting exports
module.exports = {

  head:   head,
  tail:   tail,
  middle: middle,
  without: without,
  takeUntil: takeUntil,
  map: map,
  flatten: flatten,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  countOnly: countOnly,
  countLetters: countLetters,
  assertObjectsEqual: assertObjectsEqual,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,

};