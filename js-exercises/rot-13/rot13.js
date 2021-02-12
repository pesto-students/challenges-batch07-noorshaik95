function rot13(args) {
  let decipheredText = '';
  const key = 13;
  for (let index = 0; index < args.length; index += 1) {
    if (/[A-Z]/g.test(args[index])) {
      decipheredText += String.fromCharCode(((args.charCodeAt(index) + key - 65) % 26) + 65);
    } else {
      decipheredText += args[index];
    }
  }
  return decipheredText;
}

export {
  rot13,
};
