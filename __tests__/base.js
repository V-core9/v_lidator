const {base} = require('../src/');

var baseTest = new base();


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
  expect(baseTest.type()).toBe('base');
});
