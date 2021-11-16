const email = require('../src/types/email');



test('email is UNDEFINED', () => {
  expect(email.get()).toBe(undefined);
});

test('email.set to TEXT', () => {
  expect(email.set('YEA WTF Some Text')).toBe(false);
});

test('email.set to NUMBER', () => {
  expect(email.set(12335456787)).toBe(false);
});

test('email.set to NUMBER', () => {
  expect(email.set(95126984)).toBe(false);
});

test('email.set to ALMOST email_01', () => {
  expect(email.set("username123@mmm")).toBe(false);
});

test('email.set to ALMOST email_02', () => {
  expect(email.set("username123!mmm.com")).toBe(false);
});

test('email.set to OK email 01', () => {
  expect(email.set("user777@mmm.com")).toBe(true);
});
