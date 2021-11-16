const last_name = require('../src/types/last_name');



test('last_name is UNDEFINED', () => {
  expect(last_name.get()).toBe(undefined);
});

test('last_name.set to TEXT', () => {
  expect(last_name.set('YEA WTF Some Text')).toBe(true);
});

test('last_name.set to NUMBER', () => {
  expect(last_name.set(12335456787)).toBe(false);
});

test('last_name.set to NUMBER', () => {
  expect(last_name.set(95126984)).toBe(false);
});

test('last_name.set to ALMOST last_name_01', () => {
  expect(last_name.set("username123@mmm")).toBe(false);
});

test('last_name.set to ALMOST last_name_02', () => {
  expect(last_name.set("username123!mmm.com")).toBe(false);
});

test('last_name.set to OK last_name 01', () => {
  expect(last_name.set("user777@mmm.com")).toBe(false);
});
