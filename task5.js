function getIndex(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
    if (i === arr.length - 1) {
      return arr.length;
    }
  }
}

module.exports = (arr, num) => {
  return getIndex(arr, num);
};
