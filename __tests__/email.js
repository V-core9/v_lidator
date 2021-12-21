const v_rifier = require('../');

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
  expect(mail.set("1@live.co")).toBe(false);
});

test('email type', () => {
  expect(mail.type()).toBe('email');
});

test('email.set to [shouldWork11@mail+com]', () => {
  expect(mail.set("shouldWork11@mail+com")).toBe(false);
});

test('email.set to [+WEQ23652@mail.com]', () => {
  expect(mail.set("+WEQ23652@mail.com")).toBe(false);
});

test('email.set to [@@+WEQ23652@mail.com]', () => {
  expect(mail.set("@@+WEQ23652@mail.com")).toBe(false);
});

test('email.set to [WEQ2+3652@mail.com]', () => {
  expect(mail.set("WEQ2+3652@mail.com")).toBe(false);
});

test('email.set to [WEQ23652+@mail.com]', () => {
  expect(mail.set("WEQ23652+@mail.com")).toBe(false);
});

test('email.set to [WEQ23@@652@mail.com]', () => {
  expect(mail.set("WEQ23@@652@mail.com")).toBe(false);
});

test('email.set to [WEQ@23652@mail.com]', () => {
  expect(mail.set("WEQ@23652@mail.com")).toBe(false);
});

test('email.set to [WEQ2365....2@mail.com]', () => {
  expect(mail.set("WEQ2365....2@mail.com")).toBe(false);
});

test('email.set to [@WEQ23652@mail.com]', () => {
  expect(mail.set("@WEQ23652@mail.com")).toBe(false);
});

test('email.set to [demo53266@mail.com]', () => {
  expect(mail.set("demo53266@mail.com")).toBe(true);
});

test('email.set to [QWUE.OW.Q.IN.ANDPIn@mail.com]', () => {
  expect(mail.set("QWUE.OW.Q.IN.ANDPIn@mail.com")).toBe(true);
});

test('email.set to [214219407124@mail.com]', () => {
  expect(mail.set("214219407124@mail.com")).toBe(false);
});

test('email.set to [214219407124a@mail.com]', () => {
  expect(mail.set("214219407124a@mail.com")).toBe(true);
});

test('email.set to [WEQ23652@mail.com]', () => {
  expect(mail.set("WEQ23652@mail.com")).toBe(true);
});

test('email.set to [XZCZXCSDAFSAFA@mail.com]', () => {
  expect(mail.set("XZCZXCSDAFSAFA@mail.com")).toBe(true);
});

test('email.set to [Demo@@3123@mail.com]', () => {
  expect(mail.set("Demo@@3123@mail.com")).toBe(false);
});

test('email.set to [Demo123455367345531231264362352341234123123123123]', () => {
  expect(mail.set("Demo123455367345531231264362352341234123123123123")).toBe(false);
});

test('email.set to [111111]', () => {
  expect(mail.set("111111")).toBe(false);
});

test('email.set to [Demo_____1@mail.com]', () => {
  expect(mail.set("Demo_____1@mail.com")).toBe(false);
});

test('email.set to [Demo\\]', () => {
  expect(mail.set("Demo\\")).toBe(false);
});

test('email.set to [De\\mo]', () => {
  expect(mail.set("De\\mo")).toBe(false);
});

test('email.set to [De\lmo]', () => {
  expect(mail.set("De\lmo")).toBe(false);
});

test('email.set to [De/.mo]', () => {
  expect(mail.set("De/.mo")).toBe(false);
});

test('email.set to [De_]', () => {
  expect(mail.set("De_")).toBe(false);
});

test('email.set to [.._]', () => {
  expect(mail.set(".._")).toBe(false);
});

test('email.set to [.]', () => {
  expect(mail.set(".")).toBe(false);
});

test('email.set to [..]', () => {
  expect(mail.set("..")).toBe(false);
});

test('email.set to [DemoUser]', () => {
  expect(mail.set("DemoUser")).toBe(false);
});


const mail2 = new v_rifier.email('etasda@gmail.com');
test('email2.get', () => {
  expect(mail2.get()).toBe('etasda@gmail.com');
});

const mail3 = new v_rifier.email('etasda.@gmail.com');
test('email3.get', () => {
  expect(mail3.get()).toBe('etasda.@gmail.com');
});

const mail4 = new v_rifier.email('etas@da@gmail.com');
test('email4.get', () => {
  expect(mail4.get()).toBe(undefined);
});

const mail5 = new v_rifier.email('+WEQ23652@mail.com');
test('email5.get', () => {
  expect(mail5.get()).toBe(undefined);
});
