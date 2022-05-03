module.exports = [
  {
    input: undefined,
    expect: false
  },
  {
    input: '.',
    expect: false
  },
  {
    input: 'Wiley_Denesik@hotmail.com',
    expect: true
  },
  {
    input: '..',
    expect: false
  },
  {
    input: 'Demo',
    expect: false
  },
  {
    input: 'DemoUser',
    expect: false
  },
  {
    input: '.._',
    expect: false
  },
  {
    input: 'De_',
    expect: false
  },
  {
    input: 'De/.mo',
    expect: false
  },
  {
    input: 'De\lmo',
    expect: false
  },
  {
    input: 'De\\mo',
    expect: false
  },
  {
    input: 'Demo\\',
    expect: false
  },
  {
    input: 'Demo_____1@mail.com',
    expect: true
  },
  {
    input: 'Demo123455367345531231264362352341234123123123123',
    expect: false
  },
  {
    input: 'Demo@@3123@mail.com',
    expect: false
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
    expect: false
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
    expect: false
  },
  {
    input: 'WEQ2365....2@mail.com',
    expect: false
  },
  {
    input: 'WEQ@23652@mail.com',
    expect: false
  },
  {
    input: 'WEQ23@@652@mail.com',
    expect: false
  },
  {
    input: 'WEQ23652+@mail.com',
    expect: false
  },
  {
    input: 'WEQ2+3652@mail.com',
    expect: false
  },
  {
    input: '@@+WEQ23652@mail.com',
    expect: false
  },
  {
    input: '+WEQ23652@mail.com',
    expect: false
  },
  {
    input: 'shouldWork11@mail+com',
    expect: false
  },
  {
    input: 'Demo',
    expect: false
  },
  {
    input: 'slavko_.@gmail.com',
    expect: false
  },
  {
    input: 'slavko_@gmail.com',
    expect: true
  },
  {
    input: 'slavko.@gmail.com',
    expect: false
  },
  
  {
    input: 'slavko@.gmail.com',
    expect: false
  },
  {
    input: 'slavko_@_gmail.com',
    expect: false
  },
  {
    input: 'slavko_@^gmail.com',
    expect: false
  },
  {
    input: 'slavko_@&%com',
    expect: false
  },
  {
    input: 'slavko_@111.com',
    expect: true
  },
  {
    input: 'slavko@v-core9.com',
    expect: true
  },
  
];

