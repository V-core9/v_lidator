const {v_title} = require('../src');

const title = new v_title();

test('title is UNDEFINED', () => {
  expect(title.get()).toBe(undefined);
});

test('title.set to TEXT', () => {
  expect(title.set('YEA WTF Some Text')).toBe(true);
});

test('title.set to NUMBER', () => {
  expect(title.set(12335456787)).toBe(true);
});

test('title.set to NUMBER', () => {
  expect(title.set(95126984)).toBe(true);
});

test('title.set to ALMOST title_01', () => {
  expect(title.set("username123@mmm")).toBe(true);
});

test('title.set to ALMOST title_02', () => {
  expect(title.set("username123!mmm.com")).toBe(true);
});

test('title.set to OK title 01', () => {
  expect(title.set("user777@mmm.com")).toBe(true);
});


test('baseTest type', () => {
  expect(title.type()).toBe('v_title');
});
