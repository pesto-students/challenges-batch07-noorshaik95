function sumFibs(num) {
  let sumOfOddFibs = 0;
  let firstNum = 1;
  let secondNum = 1;
  let fibnonacciNumber = 0;
  if (num === 1 || num === 2) {
    return 1;
  }
  while (fibnonacciNumber <= num) {
    if (fibnonacciNumber % 2) {
      sumOfOddFibs += fibnonacciNumber;
    }
    secondNum = firstNum;
    firstNum = fibnonacciNumber;
    fibnonacciNumber = firstNum + secondNum;
  }
  return sumOfOddFibs;
}

function cacheFunction(toBeCachedFn) {
  const cacheMap = {};
  return function (parameter) {
    if (parameter in cacheMap) {
      return cacheMap[parameter];
    }
    cacheMap[parameter] = toBeCachedFn(parameter);
    return cacheMap[parameter];
  };
}

export { sumFibs, cacheFunction };
