const v_rifier = require('../');

test('f_name is UNDEFINED', () => {
  expect(v_rifier.name()).toBe(false);
});

test('v_rifier.name to TEXT', () => {
  expect(v_rifier.name('YEA WTF Some Text')).toBe(false);
});

test('v_rifier.name to NUMBER', () => {
  expect(v_rifier.name(12335456787)).toBe(false);
});

test('v_rifier.name to NUMBER', () => {
  expect(v_rifier.name(95126984)).toBe(false);
});

test('v_rifier.name to ALMOST f_name_01', () => {
  expect(v_rifier.name("username123@mmm")).toBe(false);
});

test('v_rifier.name to ALMOST f_name_02', () => {
  expect(v_rifier.name("username123!mmm.com")).toBe(false);
});

test('v_rifier.name to OK f_name 01', () => {
  expect(v_rifier.name("user777@mmm.com")).toBe(false);
});
