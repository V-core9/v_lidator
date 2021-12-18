const {name} = require('../src');

const l_name = new name();


test('l_name is UNDEFINED', () => {
  expect(l_name.get()).toBe(undefined);
});

test('l_name.set to TEXT', () => {
  expect(l_name.set('YEA WTF Some Text')).toBe(true);
});

test('l_name.set to NUMBER', () => {
  expect(l_name.set(12335456787)).toBe(false);
});

test('l_name.set to NUMBER', () => {
  expect(l_name.set(95126984)).toBe(false);
});

test('l_name.set to ALMOST l_name_01', () => {
  expect(l_name.set("username123@mmm")).toBe(false);
});

test('l_name.set to ALMOST l_name_02', () => {
  expect(l_name.set("username123!mmm.com")).toBe(false);
});

test('l_name.set to OK l_name 01', () => {
  expect(l_name.set("user777@mmm.com")).toBe(false);
});

test('l_name type', () => {
  expect(l_name.type()).toBe('name');
});
