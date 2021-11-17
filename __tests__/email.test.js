const {email} = require('../src');

const vemail = email;

test('email is UNDEFINED', () => {
  expect(vemail.get()).toBe(undefined);
});

test('email.set to "YEA WTF Some Text"', () => {
  expect(vemail.set('YEA WTF Some Text')).toBe(false);
});

test('email.set to [12335456787]', () => {
  expect(vemail.set(12335456787)).toBe(false);
});

test('email.set to [95126984]', () => {
  expect(vemail.set(95126984)).toBe(false);
});

test('email.set to [username123@mmm]', () => {
  expect(vemail.set("username123@mmm")).toBe(false);
});

test('email.set to [username123!mmm.com]', () => {
  expect(vemail.set("username123!mmm.com")).toBe(false);
});

test('email.set to [user777@mmm.com]', () => {
  expect(vemail.set("user777@mmm.com")).toBe(true);
});

test('email.set to [@gmail.com]', () => {
  expect(vemail.set("@gmail.com")).toBe(false);
});

test('email.set to [1@live.co]', () => {
  expect(vemail.set("1@live.co")).toBe(true);
});

test('email.set to [1@live.co]', () => {
  expect(vemail.get()).toBe("1@live.co");
});

test('email type', () => {
  expect(vemail.type()).toBe('v_lidator');
});
