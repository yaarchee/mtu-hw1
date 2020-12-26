class History {
  constructor() {
    this.values = [];
  }

  push(el) {
    this.values.push(el);
  }

  pop() {
    return this.values.pop();
  }
}

const correctValue = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const checkCorrect = (str) => {
  const history = new History();

  for (let symbol of str) {
    if (correctValue[symbol]) {
      history.push(symbol);
    } else {
      const poppedBracket = history.pop();

      if (correctValue[poppedBracket] !== symbol) {
        return false;
      }
    }
  }
  return history.values.length === 0;
};

module.exports = (input) => {
  return checkCorrect(input);
};
