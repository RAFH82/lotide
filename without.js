
const without = (source, itemsToRemove) => {
  let newArray = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      newArray.push(element);
    }
  }
  console.log(newArray);
};

module.exports = without;