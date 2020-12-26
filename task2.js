function checkPalindrome(value) {
  const temp = String(value).split("").reverse().join("");

  return String(value) === temp;
}

module.exports = (input) => {
  return checkPalindrome(input);
};
