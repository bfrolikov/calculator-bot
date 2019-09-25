/* eslint-disable brace-style */
/* eslint-disable no-else-return */
const areaCalculators = require('./area_calculators');
const commandCheckers = require('./command_checkers');

const regExp = /^\d{1,2}(\s+(П|п|Б|б))?(\s+\d{1,3})+/;

const validate = (message) => {
  const matchResult = message.match(regExp);
  if (!matchResult)
    return false;
  return true;
};

const calculateArea = (terms, calculator) => {
  const full = terms[1] === 'П' || terms[1] === 'п';
  const side = terms[1] === 'Б' || terms[1] === 'б';
  if (full)
    return calculator(terms, 1);
  else if (side)
    return calculator(terms, 0);
  else
    return 'Укажи, какая площадь тебе нужна - боковых сторон или полная. Напиши "Помощь", чтобы узнать, как меня использовать';
};


const getResult = (message) => {
  if (commandCheckers.checkHello(message))
    return 'Привет! Я Бот-Устный Счёт на службе ШКАФА. Я считаю ответы на задания устного счета (с 1 по 7) для пропащих душ (учеников МВ 11 класса). Напиши "Помощь", чтобы узнать, как мной пользоваться';
  if (commandCheckers.checkHelp(message))
    return 'Все просто. Чтобы вычислить ответ на задание, тебе нужно написать мне сообщение в таком формате:\n Сначала номер задания (от 1 до 7), потом, если в задании требуется (в первом не надо), какая площадь тебе нужна: полная (П или п) или боковой поверхности (Б или б). Затем идут числа из задания в том порядке, которые они указаны на листочке.\n Например, сообщение "6 п 19 11" вычислит полную площадь правильной треугольной пирамиды со стороной основания 19 и высотой 11 (это задание 6). Да, и все данные указываются через пробелы';
  if (!validate(message))
    return 'Твоё сообщение не соответствует формату. Напиши "Помощь", чтобы узнать, как меня использовать';
  const terms = message.split(/\s+/);
  const taskNumber = terms[0];
  switch (taskNumber) {
    case '1': {
      const termsFilter = terms.filter((term) => term !== 'П' && term !== 'п' && term !== 'Б' && term !== 'б');
      if (termsFilter.length < 4)
        return 'Не достаточно длин диагоналей. Их должно быть 3';
      const a = Number(termsFilter[1]);
      const b = Number(termsFilter[2]);
      const c = Number(termsFilter[3]);
      const squareSum = a * a + b * b + c * c;
      const sumSqrt = Math.sqrt(squareSum);
      if (sumSqrt === Math.floor(sumSqrt))
        return Math.floor(sumSqrt);
      else
        return `Квадратный корень из ${squareSum}`;
    }
    case '2': {
      const full = terms[1] === 'П' || terms[1] === 'п';
      const side = terms[1] === 'Б' || terms[1] === 'б';
      if ((full || side) && terms.length === 3)
        return 'Не хватает образующей';
      else
        return calculateArea(terms, areaCalculators.coneArea);
    }
    case '3': {
      const full = terms[1] === 'П' || terms[1] === 'п';
      const side = terms[1] === 'Б' || terms[1] === 'б';
      if ((full || side) && terms.length === 3)
        return 'Не хватает образующей';
      else
        return calculateArea(terms, areaCalculators.cylinderArea);
    }
    case '4': {
      const full = terms[1] === 'П' || terms[1] === 'п';
      const side = terms[1] === 'Б' || terms[1] === 'б';
      if (full || side) {
        if (terms.length === 3)
          return 'Не хватает второго радиуса и образующей';
        else if (terms.length === 4)
          return 'Не хватает образующей';
      }
      return calculateArea(terms, areaCalculators.truncatedConeArea);
    }
    case '5': {
      const full = terms[1] === 'П' || terms[1] === 'п';
      const side = terms[1] === 'Б' || terms[1] === 'б';
      if (full || side) {
        if (terms.length === 3)
          return 'Не хватает второй стороны основания и апофемы';
        else if (terms.length === 4)
          return 'Не хватает апофемы';
      }
      return calculateArea(terms, areaCalculators.truncatedPyramidArea);
    }
    case '6': {
      const full = terms[1] === 'П' || terms[1] === 'п';
      const side = terms[1] === 'Б' || terms[1] === 'б';
      if ((full || side) && terms.length === 3)
        return 'Не хватает апофемы';
      else
        return calculateArea(terms, areaCalculators.pyramidArea);
    }
    case '7': {
      const full = terms[1] === 'П' || terms[1] === 'п';
      const side = terms[1] === 'Б' || terms[1] === 'б';
      if ((full || side) && terms.length === 3)
        return 'Не хватает высоты';
      else
        return calculateArea(terms, areaCalculators.prismArea);
    }
    default:
      return `Я могу считать только задания с первого по седьмое, а ты ввел(а) ${taskNumber}`;
  }
};


module.exports = { validate, getResult };
