const regExp = /^\d{1,2}(\s+(П|п|Б|б))?(\s+\d{1,3})+/;
const validate = (message) => {
  const matchResult = message.match(regExp);
  if (!matchResult)
    return false;
  return true;
};

const getResult = (message) => {
  if (!validate(message))
    return 'Ваше сообщение не соответствует формату';
  const terms = message.split(/\s+/);
  const taskNumber = terms[0];
  switch (taskNumber) {
    case '1': {
      const termsFilter = terms.filter(term => term !== 'П' && term !== 'п' && term !== 'Б' && term !== 'б');
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
        // eslint-disable-next-line no-else-return
        return `Квадратный корень из ${squareSum}`;
    }
    case '2':
      break;
    case '3':
      break;
    case '4':
      break;
    case '5':
      break;
    case '6':
      break;
    case '7':
      break;
    default:
      return -1;
  }
};


module.exports = { validate, getResult };
