const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
const arr2 = [2, 1, 4, 3, 9, 6];

function checkArr(arr1, arr2) {
  const arr1Copy = arr1;
  const res = [];

  arr2.forEach((el) => {
    for (let i = 0; i < arr1Copy.length; i++) {
      if (el === arr1Copy[i]) {
        res.push(arr1Copy[i]);
        arr1Copy.splice(i, 1);

        i -= 1;
      }
    }
  });

  res.push(...arr1Copy.sort((a, b) => a - b));
  console.log(arr1Copy);
  console.log(res);
  return res;
}

checkArr(arr1, arr2);

module.exports = (arr1, arr2) => {
  return checkArr(arr1, arr2);
};
