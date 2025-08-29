var isPalindrome = function (x) {
  const convertX = x.toString();
  let j = convertX.length - 1;
  for (let i = 0; i < convertX.length / 2; i++) {
    if (convertX[i] !== convertX[j]) {
      return false;
    }
    j--;
  }
  return true;
};

