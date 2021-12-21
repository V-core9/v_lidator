const v_rifier = require('../');


test('v_rifier.username to TEXT', () => {
  expect(v_rifier.username('YEA WTF Some Text')).toBe(false);
});

test('v_rifier.username to NUMBER', () => {
  expect(v_rifier.username(12335456787)).toBe(false);
});

test('v_rifier.username to NUMBER', () => {
  expect(v_rifier.username(95126984)).toBe(false);
});

test('v_rifier.username to ALMOST f_name_01', () => {
  expect(v_rifier.username("username123@mmm")).toBe(false);
});

test('v_rifier.username to ALMOST f_name_02', () => {
  expect(v_rifier.username("username123!mmm.com")).toBe(false);
});

test('v_rifier.username to OK f_name 01', () => {
  expect(v_rifier.username("user777@mmm.com")).toBe(false);
});

test('f_name set vvv321', () => {
  expect(v_rifier.username('vvv321')).toBe(true);
});

test('f_name set __231', () => {
  expect(v_rifier.username('__231')).toBe(false);
});

test('f_name set 11Z', () => {
  expect(v_rifier.username('11Z')).toBe(false);
});

test('f_name set 159WQWEXCZ', () => {
  expect(v_rifier.username('159WQWEXCZ')).toBe(false);
});

test('f_name set x159WQWEXCZ', () => {
  expect(v_rifier.username('x159WQWEXCZ')).toBe(true);
});
