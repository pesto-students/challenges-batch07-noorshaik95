function duplicateLetters(args) {
  const lettersMap = {};
  for (const letter of args) {
    if (!lettersMap[letter]) {
      lettersMap[letter] = 1;
    } else {
      lettersMap[letter] += 1;
    }
  }
  const largestDuplicateValue = Object.values(lettersMap).sort().reverse()[0];
  return largestDuplicateValue > 1 ? largestDuplicateValue : false;
}

export {
  duplicateLetters,
};
