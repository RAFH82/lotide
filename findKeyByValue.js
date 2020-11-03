const findKeyByValue = (obj, val) => {
  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    } 
  }
  return undefined;
};

module.exports = findKeyByValue;