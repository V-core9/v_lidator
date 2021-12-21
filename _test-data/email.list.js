
const { $_email } = require("./$_email");


module.exports = [
  {
    input: '.',
    expect: $_email
  },
  {
    input: '..',
    expect: $_email
  },
  {
    input: 'Demo',
    expect: $_email
  },
  {
    input: 'DemoUser',
    expect: $_email
  },
  {
    input: '.._',
    expect: $_email
  },
  {
    input: 'De_',
    expect: $_email
  },
  {
    input: 'De/.mo',
    expect: $_email
  },
  {
    input: 'De\lmo',
    expect: $_email
  },
  {
    input: 'De\\mo',
    expect: $_email
  },
  {
    input: 'Demo\\',
    expect: $_email
  },
  {
    input: 'Demo_____1@mail.com',
    expect: $_email
  },
  {
    input: 'Demo123455367345531231264362352341234123123123123',
    expect: $_email
  },
  {
    input: 'Demo@@3123@mail.com',
    expect: $_email
  },
  {
    input: 'Demo12312312312@mail.com',
    expect: true
  },
  {
    input: 'XZCZXCSDAFSAFA@mail.com',
    expect: true
  },
  {
    input: 'WEQ23652@mail.com',
    expect: true
  },
  {
    input: '214219407124a@mail.com',
    expect: true
  },
  {
    input: '214219407124@mail.com',
    expect: $_email
  },
  {
    input: 'QWUE.OW.Q.IN.ANDPIn@mail.com',
    expect: true
  },
  {
    input: 'demo53266@mail.com',
    expect: true
  },
  {
    input: '@WEQ23652@mail.com',
    expect: $_email
  },
  {
    input: 'WEQ2365....2@mail.com',
    expect: $_email
  },
  {
    input: 'WEQ@23652@mail.com',
    expect: $_email
  },
  {
    input: 'WEQ23@@652@mail.com',
    expect: $_email
  },
  {
    input: 'WEQ23652+@mail.com',
    expect: $_email
  },
  {
    input: 'WEQ2+3652@mail.com',
    expect: $_email
  },
  {
    input: '@@+WEQ23652@mail.com',
    expect: $_email
  },
  {
    input: '+WEQ23652@mail.com',
    expect: $_email
  },
  {
    input: 'shouldWork11@mail+com',
    expect: $_email
  },
  {
    input: 'Demo',
    expect: $_email
  },
  
];

