const v_rifier = require('../');


test('v_rifier.title to TEXT', () => {
  expect(v_rifier.title('YEA WTF Some Text')).toBe(true);
});

test('v_rifier.title to NUMBER', () => {
  expect(v_rifier.title(12335456787)).toBe(true);
});

test('v_rifier.title to NUMBER', () => {
  expect(v_rifier.title(95126984)).toBe(true);
});

test('v_rifier.title to ALMOST title_01', () => {
  expect(v_rifier.title("username123@mmm")).toBe(true);
});

test('v_rifier.title to ALMOST title_02', () => {
  expect(v_rifier.title("username123!mmm.com")).toBe(true);
});

test('v_rifier.title to OK title 01', () => {
  expect(v_rifier.title("user777@mmm.com")).toBe(true);
});
