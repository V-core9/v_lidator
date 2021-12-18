const {name} = require('../src');

const f_name = new name();

test('f_name is UNDEFINED', () => {
  expect(f_name.get()).toBe(undefined);
});

test('f_name.set to TEXT', () => {
  expect(f_name.set('YEA WTF Some Text')).toBe(false);
});

test('f_name.set to NUMBER', () => {
  expect(f_name.set(12335456787)).toBe(false);
});

test('f_name.set to NUMBER', () => {
  expect(f_name.set(95126984)).toBe(false);
});

test('f_name.set to ALMOST f_name_01', () => {
  expect(f_name.set("username123@mmm")).toBe(false);
});

test('f_name.set to ALMOST f_name_02', () => {
  expect(f_name.set("username123!mmm.com")).toBe(false);
});

test('f_name.set to OK f_name 01', () => {
  expect(f_name.set("user777@mmm.com")).toBe(false);
});

test('f_name type', () => {
  expect(f_name.type()).toBe('name');
});
