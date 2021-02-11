import { isString } from 'util';

function abbreviateString(str) {
  if (!isString(str)) {
    throw new Error(`TypeError: Expected string, got ${typeof str}`);
  }
  const splittedStringArray = str.split(' ');
  if (splittedStringArray.length === 1) {
    return splittedStringArray[0];
  }
  const lastWord = splittedStringArray[splittedStringArray.length - 1];
  return `${splittedStringArray[0]} ${lastWord[0].toUpperCase()}.`;
}

export { abbreviateString };
