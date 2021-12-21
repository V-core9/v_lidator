const { $_password } = require("./$_password");


module.exports = [
  {
    input: '.',
    confirm: ",",
    expect: $_password.minConfirmErr,
  },
  {
    input: "Demo",
    confirm: "Demo",
    expect: $_password.minErr
  },
  {
    input: 'DemoUser',
    confirm: "Demo",
    expect: $_password.confirmErr
  },
  {
    input: '.',
    confirm: ".",
    expect: $_password.minErr
  },
  {
    input: '..',
    confirm: "..",
    expect: $_password.minErr
  },
  {
    input: '.._',
    confirm: ".._",
    expect: $_password.minErr
  },
  {
    input: 'De_',
    confirm: "De_",
    expect: $_password.minErr
  },
  {
    input: 'De/.mo',
    confirm: "De/.mo",
    expect: $_password.formatErr
  },
  {
    input: 'De\lmo',
    confirm: "De\lmo",
    expect: $_password.minErr
  },
  {
    input: 'De\\mo',
    confirm: "De\\mo",
    expect: $_password.minFormatErr
  },
  {
    input: 'Demo\\',
    confirm: "Demo\\",
    expect: $_password.minFormatErr
  },
  {
    input: 'Demo_____1@mail.com',
    confirm: "Demo_____1@mail.com",
    expect: true
  },
  {
    input: 'Demo123455367345531231264362352341234123123123123',
    confirm: "Demo123455367345531231264362352341234123123123123",
    expect: $_password.maxErr
  },
  {
    input: 'Demo@@3123@mail.com',
    confirm: "Demo@@3123@mail.com",
    expect: true
  },
  {
    input: 'Demo12312312312@mail.com',
    confirm: "Demo12312312312@mail.com",
    expect: true
  },
  {
    input: 'XZCZXCSDAFSAFA@mail.com',
    confirm: "XZCZXCSDAFSAFA@mail.com",
    expect: true
  },
  {
    input: 'WEQ23652@mail.com',
    confirm: "WEQ23652@mail.com",
    expect: true
  },
  {
    input: '214219407124a@mail.com',
    confirm: "214219407124a@mail.com",
    expect: true
  },
  {
    input: '214219407124@mail.com',
    confirm: "214219407124@mail.com",
    expect: true
  },
  {
    input: 'QWUE.OW.Q.IN.ANDPIn@mail.com',
    confirm: "QWUE.OW.Q.IN.ANDPIn@mail.com",
    expect: true
  },
  {
    input: 'demo53266@mail.com',
    confirm: "De_X",
    expect: $_password.confirmErr
  },
  {
    input: 'De_33',
    confirm: "De_33",
    expect: $_password.minErr
  },
  {
    input: 'De_44',
    confirm: "De_44",
    expect: $_password.minErr

  },
  {
    input: 'De_55',
    confirm: "De_55",
    expect: $_password.minErr
  },
  {
    input: 'De_66123123123123123sdfasfdavcxvsdfwerwdfvxcvxvsfdserwefsdvxv',
    confirm: "De_66123123123123123sdfasfdavcxvsdfwerwdfvxcvxvsfdserwefsdvxv",
    expect: $_password.maxErr
  },
  {
    input: 'De_777777777777777777777777777777777777777777777777777777777777777777777777',
    confirm: "De_777777777777777777777777777777777777777777777777777777777777777777777777",
    expect: $_password.maxErr
  },
  {
    input: 'De_8',
    confirm: "De_8",
    expect: $_password.minErr
  },
  {
    input: 'De_39',
    confirm: "De_39",
    expect: $_password.minErr
  },
  {
    input: 'De_48',
    confirm: "De_48",
    expect: $_password.minErr
  },
  {
    input: 'De_556',
    confirm: "De_665",
    expect: $_password.confirmErr

  }
];


