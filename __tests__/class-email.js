const v_rifier = require('../src/');

const mail = new v_rifier.email();

test('email is UNDEFINED', () => {
  expect(mail.get()).toBe(undefined);
});

test('email.set to "YEA WTF Some Text"', () => {
  expect(mail.set('YEA WTF Some Text')).toBe(false);
});

test('email.set to [12335456787]', () => {
  expect(mail.set(12335456787)).toBe(false);
});

test('email.set to [95126984]', () => {
  expect(mail.set(95126984)).toBe(false);
});

test('email.set to [username123@mmm]', () => {
  expect(mail.set("username123@mmm")).toBe(false);
});

test('email.set to [username123!mmm.com]', () => {
  expect(mail.set("username123!mmm.com")).toBe(false);
});

test('email.set to [user777@mmm.com]', () => {
  expect(mail.set("user777@mmm.com")).toBe(true);
});

test('email.set to [@gmail.com]', () => {
  expect(mail.set("@gmail.com")).toBe(false);
});

test('email.set to [1@live.co]', () => {
  expect(mail.set("1@live.co")).toBe(true);
});

test('email type', () => {
  expect(mail.type()).toBe('email');
});
