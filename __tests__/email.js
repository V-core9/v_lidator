const v_rifier = require('../');

const email = new v_rifier.email();

test('email is UNDEFINED', () => {
  expect(email.get()).toBe(undefined);
});

test('email.set to "YEA WTF Some Text"', () => {
  expect(email.set('YEA WTF Some Text')).toBe(false);
});

test('email.set to [12335456787]', () => {
  expect(email.set(12335456787)).toBe(false);
});

test('email.set to [95126984]', () => {
  expect(email.set(95126984)).toBe(false);
});

test('email.set to [username123@mmm]', () => {
  expect(email.set("username123@mmm")).toBe(false);
});

test('email.set to [username123!mmm.com]', () => {
  expect(email.set("username123!mmm.com")).toBe(false);
});

test('email.set to [user777@mmm.com]', () => {
  expect(email.set("user777@mmm.com")).toBe(true);
});

test('email.set to [@gmail.com]', () => {
  expect(email.set("@gmail.com")).toBe(false);
});

test('email.set to [1@live.co]', () => {
  expect(email.set("1@live.co")).toBe(false);
});

test('email type', () => {
  expect(email.type()).toBe('email');
});
