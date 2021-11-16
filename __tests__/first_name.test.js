const {first_name} = require('../src');



test('first_name is UNDEFINED', () => {
  expect(first_name.get()).toBe(undefined);
});

test('first_name.set to TEXT', () => {
  expect(first_name.set('YEA WTF Some Text')).toBe(true);
});

test('first_name.set to NUMBER', () => {
  expect(first_name.set(12335456787)).toBe(true);
});

test('first_name.set to NUMBER', () => {
  expect(first_name.set(95126984)).toBe(true);
});

test('first_name.set to ALMOST first_name_01', () => {
  expect(first_name.set("username123@mmm")).toBe(false);
});

test('first_name.set to ALMOST first_name_02', () => {
  expect(first_name.set("username123!mmm.com")).toBe(false);
});

test('first_name.set to OK first_name 01', () => {
  expect(first_name.set("user777@mmm.com")).toBe(false);
});

test('first_name type', () => {
  expect(first_name.type()).toBe('v_first_name');
});
