const $_ = require('../src/base/$_');

var baseTest = new $_();


test('baseTest', () => {
  expect(baseTest.get()).toBe(undefined);
});


var testText01 = 'base test value demo';
test('testText01 set', () => {
  expect(baseTest.set(testText01)).toBe(true);
});

test('baseTest get', () => {
  expect(baseTest.get()).toBe(testText01);
});


test('baseTest type', () => {
  expect(baseTest.type()).toBe('$_');
});
