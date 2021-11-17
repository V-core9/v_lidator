const {title} = require('../src');

const vtitle = title;

test('title is UNDEFINED', () => {
  expect(vtitle.get()).toBe(undefined);
});

test('vtitle.set to TEXT', () => {
  expect(vtitle.set('YEA WTF Some Text')).toBe(true);
});

test('vtitle.set to TEXT', () => {
  expect(vtitle.set('YEA WTF')).toBe(true);
});

test('title.set to NUMBER', () => {
  expect(vtitle.set(12335456787)).toBe(true);
});

test('title.set to NUMBER', () => {
  expect(vtitle.set(95126984)).toBe(true);
});

test('title.set to ALMOST title_01', () => {
  expect(vtitle.set("username123@mmm")).toBe(true);
});

test('title.set to ALMOST title_02', () => {
  expect(vtitle.set("username123!mmm.com")).toBe(true);
});

test('title.set to OK title 01', () => {
  expect(vtitle.set("user777@mmm.com")).toBe(true);
});


test('baseTest type', () => {
  expect(vtitle.type()).toBe('v_lidator');
});
