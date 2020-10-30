
const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

const pythag = ( x, y ) => {
  return (Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
};

const result = input.map(element => {
  return pythag(element.x, element.y);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

