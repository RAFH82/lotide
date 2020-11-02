const middle = (array) => {
  if (array.length <= 2) return [];
  let middle = '';
  let newArray = [];
  if (array.length % 2 === 1) {
    middle = (array.length - 1) /   2;
    newArray.push(array[middle]);
  } else if (array.length % 2 === 0) {
    middle = (array.length / 2);
    newArray.push(array[middle-1], array[middle]);
  }
  return(newArray);
}

module.exports = middle;