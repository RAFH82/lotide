const takeUntil = (array, callback) => {
  const result = [];
  for (element of array) {
    if (callback(element)) {
      break;
    } else {
      result.push(element);
    }
  }
  return result;
};

module.exports = takeUntil;