const assertEqual = require('../assertEqual');
const tail = require('../tail');

let test = tail([1,2,3,4,5]);

assertEqual(test.length, 4);
assertEqual(test[0], 2);