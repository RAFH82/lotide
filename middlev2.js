const middle = (array) => {
  if (array.length <= 2) return [];
  let middle, newArray;
  middle = Math.floor(array.length / 2);
  newArray = array.length / 2 === 1 ? [array[middle]] : [array[middle-1]], [array[middle]];
  return(newArray);
}
