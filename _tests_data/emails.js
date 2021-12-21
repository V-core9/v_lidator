module.exports = [
  {
    mail: undefined,
    expect: false
  },
  {
    mail: "YEA WTF Some Text",
    expect: false
  },
  {
    mail: 12335456787,
    expect: false
  },
  {
    mail: 95126984,
    expect: false
  },
  {
    mail: "username123@mmm",
    expect: false
  },
  {
    mail: "username123!mmm.com",
    expect: false
  },
  {
    mail: "user777@mmm.com",
    expect: true
  },
  {
    mail: "@gmail.com",
    expect: false
  },
  {
    mail: "1@live.co",
    expect: false
  },
  {
    mail: "shouldWork11@mail+com",
    expect: false
  },
  {
    mail: "+WEQ23652@mail.com",
    expect: false
  },
  {
    mail: "@@+WEQ23652@mail.com",
    expect: false
  },
  {
    mail: "WEQ2+3652@mail.com",
    expect: false
  },
  {
    mail: "WEQ23652+@mail.com",
    expect: false
  },
  {
    mail: "WEQ23@@652@mail.com",
    expect: false
  },
  {
    mail: "WEQ@23652@mail.com",
    expect: false
  },
  {
    mail: "WEQ2365....2@mail.com",
    expect: false
  },
  {
    mail: "@WEQ23652@mail.com",
    expect: false
  },
  {
    mail: "demo53266@mail.com",
    expect: true
  },
  {
    mail: "QWUE.OW.Q.IN.ANDPIn@mail.com",
    expect: true
  },
  {
    mail: "214219407124@mail.com",
    expect: false
  },
  {
    mail: "214219407124a@mail.com",
    expect: true
  },
  {
    mail: "WEQ23652@mail.com",
    expect: true
  },
  {
    mail: "XZCZXCSDAFSAFA@mail.com",
    expect: true
  },
  {
    mail: "Demo@@3123@mail.com",
    expect: false
  },
  {
    mail: "Demo123455367345531231264362352341234123123123123",
    expect: false
  },
  {
    mail: "111111",
    expect: false
  },
  {
    mail: "Demo_____1@mail.com",
    expect: false
  },
  {
    mail: "Demo\\",
    expect: false
  },
  {
    mail: "De\\mo",
    expect: false
  },
  {
    mail: "De\lmo",
    expect: false
  },
  {
    mail: "De/.mo",
    expect: false
  },
  {
    mail: "De_",
    expect: false
  },
  {
    mail: ".",
    expect: false
  },
  {
    mail: "..",
    expect: false
  },
  {
    mail: ".._",
    expect: false
  },
  {
    mail: "95126984",
    expect: false
  },
  {
    mail: "DemoUser",
    expect: false
  },
  {
    mail: "etasda.@gmail.com",
    expect: false
  },
  {
    mail: "etasda@gmail.com",
    expect: true
  },
  {
    mail: "etas@da@gmail.com",
    expect: false
  },
  {
    mail: "+WEQ23652@mail.com",
    expect: false
  },
];
