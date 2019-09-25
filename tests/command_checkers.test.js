const commandCheckers = require('../utils/command_checkers');

describe('command checks testing', () => {
  test('finds hello in a string', () => {
    expect(commandCheckers.checkHello('Привет, бот')).toBeTruthy();
  });
  test('doesnt find hello in an incorrect string', () => {
    expect(commandCheckers.checkHello('бот')).toBeFalsy();
  });
  test('finds help in a string', () => {
    expect(commandCheckers.checkHelp('Помощь, бот')).toBeTruthy();
  });
  test('doesnt find help in an incorrect string', () => {
    expect(commandCheckers.checkHelp('бот')).toBeFalsy();
  });
});
