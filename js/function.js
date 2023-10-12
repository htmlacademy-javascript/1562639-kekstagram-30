// Функция для проверки длины строки.

const getStringLength = (string1, length) => string1.length <= length;

getStringLength('проверяемая строка', 10);

// Функция для проверки, является ли строка палиндромом

const checkPalindrome = (string2) => {
  let stringWithoutSpaces = string2.replaceAll(' ', '');
  stringWithoutSpaces = stringWithoutSpaces.toLowerCase();

  let newString = '';

  for (let i = (stringWithoutSpaces.length - 1); i >= 0; i--) {
    newString += stringWithoutSpaces[i];
  }

  const test = stringWithoutSpaces === newString ? 'true' : 'false';

  return test;
};

checkPalindrome('Лёша на полке клопа нашёл ');


// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и
// возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN

const getIntegerNumber = (string3) => {
  let result = '';
  if (!Number.isNaN(string3)) {
    string3 = string3.toString();
    for (let i = 0; i <= string3.length - 1; i++) {
      const resultItem = parseInt(string3[i], 10);
      if (Number.isInteger(resultItem)) {
        result += resultItem;
      }
    }
  }
  const integerNumber = result.length > 0 ? Math.round(result) : 'NaN';

  return integerNumber;
};

getIntegerNumber(1.5);
