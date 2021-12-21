const v_rifier = require('../');

var testText01 = 'base test value demo sadsa dasd asda sdas dasdwqeq dsgvbdsv 213123 v1234 1t1%@#@%@$@%T#Y$&&*';

test('testText01 set', () => {
  expect(v_rifier.base(testText01)).toBe(true);
});
