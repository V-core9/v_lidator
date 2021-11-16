const {short_description} = require('../src');


test('short_description is UNDEFINED', () => {
  expect(short_description.get()).toBe(undefined);
});

test('short_description.set to TEXT', () => {
  expect(short_description.set('YEA WTF Some Text')).toBe(true);
});

test('short_description.set to NUMBER', () => {
  expect(short_description.set(12335456787)).toBe(true);
});

test('short_description.set to NUMBER', () => {
  expect(short_description.set(95126984)).toBe(true);
});

test('short_description.set to ALMOST short_description_01', () => {
  expect(short_description.set("username123@mmm")).toBe(true);
});

test('short_description.set to ALMOST short_description_02', () => {
  expect(short_description.set("username123!mmm.com")).toBe(true);
});

test('short_description.set to OK short_description 01', () => {
  expect(short_description.set("user777@mmm.com")).toBe(true);
});


test('short_description type', () => {
  expect(short_description.type()).toBe('v_short_description');
});
