// Функция для проверки длины строки.

function getStringLength (string1, length) {
  if (string1.length <= length) {
    return true;
  }
  return false;
}

getStringLength('проверяемая строка', 10);

// Функция для проверки, является ли строка палиндромом

function checkPalindrome (string2) {
  let stringWithoutSpaces = string2.replaceAll(' ', '');
  stringWithoutSpaces = stringWithoutSpaces.toLowerCase();

  let newString = '';

  for (let i = (stringWithoutSpaces.length - 1); i >= 0; i--) {
    newString += stringWithoutSpaces[i];
  }

  if (stringWithoutSpaces === newString) {
    return true;
  }

  return false;
}

checkPalindrome('Лёша на полке клопа нашёл ');


// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и
// возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN

let result = '';

//let string3 = 'jdjfhik';

function getNumber (string3) {
  if (!Number.isNaN(string3)) {
    string3 = string3.toString();
    for (let i = 0; i <= string3.length - 1; i++) {
      const resultItem = parseInt(string3[i], 10);
      if (Number.isInteger(resultItem)) {
        result += resultItem;
      }
    }
  }
  if (result.length > 0) {
    return Math.round(result);
  }
  return NaN;
}

getNumber(1.5);
