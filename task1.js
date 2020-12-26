const numbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  getArabicNumber(romeNumber) {
    const rome = romeNumber.split("");

    return rome.reduce((acc, value, index) => {
      if (this[rome[index]] < this[rome[index + 1]]) {
        acc -= this[rome[index]];
        return acc;
      } else {
        acc += this[rome[index]];
        return acc;
      }
    }, 0);
  },
};

module.exports = (input) => {
  return numbers.getArabicNumber(input);
};
