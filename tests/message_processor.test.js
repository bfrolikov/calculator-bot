const messageProcessor = require('../utils/message_processor');

describe('Validation testing', () => {
  test('should not match an empty sting', () => {
    expect(messageProcessor.validate('')).toBe(false);
  });
  test('should match correct string with area specifier', () => {
    expect(messageProcessor.validate('1 П 32 32 12 54')).toBe(true);
  });
  test('should match correct string without area specifier', () => {
    expect(messageProcessor.validate('1 32 32 12 54')).toBe(true);
  });
  test('should not match incorrect string', () => {
    expect(messageProcessor.validate('1 П32 32 12 54')).toBe(false);
  });
});

describe('Task 1', () => {
  test('should return sqrt where possible', () => {
    expect(messageProcessor.getResult('1 П 1 2 2')).toBe(3);
  });
  test('should return sqrt(number) where taking the root is not possible', () => {
    expect(messageProcessor.getResult('1 1 2 3')).toBe('Квадратный корень из 14');
  });
  test('should respond when there are not enough parameters', () => {
    expect(messageProcessor.getResult('1 1 3')).toBe('Не достаточно длин диагоналей. Их должно быть 3');
  });
});

describe('Task 2', () => {
  test('should check format', () => {
    expect(messageProcessor.getResult('2 Б')).toBe('Твоё сообщение не соответствует формату. Напиши "Помощь", чтобы узнать, как меня использовать');
  });
  test('should check length', () => {
    expect(messageProcessor.getResult('2 П 23')).toBe('Не хватает образующей');
  });
  test('should check area type', () => {
    expect(messageProcessor.getResult('2 23 23')).toBe('Укажи, какая площадь тебе нужна - боковых сторон или полная. Напиши "Помощь", чтобы узнать, как меня использовать');
  });
  test('should return full area', () => {
    expect(messageProcessor.getResult('2 П 11 19')).toBe('330π');
  });
  test('should return side area', () => {
    expect(messageProcessor.getResult('2 Б 11 19')).toBe('209π');
  });
});

describe('Task 3', () => {
  test('should check format', () => {
    expect(messageProcessor.getResult('3 Б')).toBe('Твоё сообщение не соответствует формату. Напиши "Помощь", чтобы узнать, как меня использовать');
  });
  test('should check length', () => {
    expect(messageProcessor.getResult('3 Б 23')).toBe('Не хватает образующей');
  });
  test('should check area type', () => {
    expect(messageProcessor.getResult('3 23 23')).toBe('Укажи, какая площадь тебе нужна - боковых сторон или полная. Напиши "Помощь", чтобы узнать, как меня использовать');
  });
  test('should return full area', () => {
    expect(messageProcessor.getResult('3 П 11 19')).toBe('660π');
  });
  test('should return side area', () => {
    expect(messageProcessor.getResult('3 Б 11 19')).toBe('418π');
  });
});

describe('Task 4', () => {
  test('should check format', () => {
    expect(messageProcessor.getResult('4 Б')).toBe('Твоё сообщение не соответствует формату. Напиши "Помощь", чтобы узнать, как меня использовать');
  });
  test('should check length', () => {
    expect(messageProcessor.getResult('4 Б 23')).toBe('Не хватает второго радиуса и образующей');
  });
  test('should check length', () => {
    expect(messageProcessor.getResult('4 Б 23 16')).toBe('Не хватает образующей');
  });
  test('should check area type', () => {
    expect(messageProcessor.getResult('4 23 23')).toBe('Укажи, какая площадь тебе нужна - боковых сторон или полная. Напиши "Помощь", чтобы узнать, как меня использовать');
  });
  test('should return full area', () => {
    expect(messageProcessor.getResult('4 П 17 9 14')).toBe('734π');
  });
  test('should return side area', () => {
    expect(messageProcessor.getResult('4 Б 17 9 14')).toBe('364π');
  });
});