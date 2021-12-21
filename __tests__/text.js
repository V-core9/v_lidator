const v_rifier = require('../');


test('v_rifier.text to TEXT', () => {
  expect(v_rifier.text('YEA WTF Some Text')).toBe(true);
});

test('v_rifier.text to NUMBER', () => {
  expect(v_rifier.text(12335456787)).toBe(true);
});

test('v_rifier.text to NUMBER', () => {
  expect(v_rifier.text(95126984)).toBe(true);
});

test('v_rifier.text to ALMOST short_description_01', () => {
  expect(v_rifier.text("username123@mmm")).toBe(true);
});

test('v_rifier.text to ALMOST short_description_02', () => {
  expect(v_rifier.text("username123!mmm.com")).toBe(true);
});

test('v_rifier.text to OK short_description 01', () => {
  expect(v_rifier.text("user777@mmm.com")).toBe(true);
});
