module.exports = [
  {
    input: undefined,
    confirm: '',
    expect: false
  },
  {
    input: '.',
    confirm: ',',
    expect: false
  },
  {
    input: 'Demo',
    confirm: 'Demo',
    expect: false
  },
  {
    input: 'DemoUser',
    confirm: 'Demo',
    expect: false
  },
  {
    input: '.',
    confirm: '.',
    expect: false
  },
  {
    input: '..',
    confirm: '..',
    expect: false
  },
  {
    input: '.._',
    confirm: '.._',
    expect: false
  },
  {
    input: 'De_',
    confirm: 'De_',
    expect: false
  },
  {
    input: 'De/.mo',
    confirm: 'De/.mo',
    expect: false
  },
  {
    input: 'Delmo',
    confirm: 'Delmo',
    expect: false
  },
  {
    input: 'De\\mo',
    confirm: 'De\\mo',
    expect: false
  },
  {
    input: 'Demo\\',
    confirm: 'Demo\\',
    expect: false
  },
  {
    input: 'Demo_____1@mail.com',
    confirm: 'Demo_____1@mail.com',
    expect: true
  },
  {
    input: 'Demo123455367345531231264362352341234123123123123',
    confirm: 'Demo123455367345531231264362352341234123123123123',
    expect: false
  },
  {
    input: 'Demo@@3123@mail.com',
    confirm: 'Demo@@3123@mail.com',
    expect: true
  },
  {
    input: 'Demo12312312312@mail.com',
    confirm: 'Demo12312312312@mail.com',
    expect: true
  },
  {
    input: 'XZCZXCSDAFSAFA@mail.com',
    confirm: 'XZCZXCSDAFSAFA@mail.com',
    expect: true
  },
  {
    input: 'WEQ23652@mail.com',
    confirm: 'WEQ23652@mail.com',
    expect: true
  },
  {
    input: '214219407124a@mail.com',
    confirm: '214219407124a@mail.com',
    expect: true
  },
  {
    input: '214219407124@mail.com',
    confirm: '214219407124@mail.com',
    expect: true
  },
  {
    input: 'QWUE.OW.Q.IN.ANDPIn@mail.com',
    confirm: 'QWUE.OW.Q.IN.ANDPIn@mail.com',
    expect: true
  },
  {
    input: 'demo53266@mail.com',
    confirm: 'De_X',
    expect: false
  },
  {
    input: 'De_33',
    confirm: 'De_33',
    expect: false
  },
  {
    input: 'De_44',
    confirm: 'De_44',
    expect: false
  },
  {
    input: 'De_55',
    confirm: 'De_55',
    expect: false
  },
  {
    input: 'De_66123123123123123sdfasfdavcxvsdfwerwdfvxcvxvsfdserwefsdvxv',
    confirm: 'De_66123123123123123sdfasfdavcxvsdfwerwdfvxcvxvsfdserwefsdvxv',
    expect: false
  },
  {
    input: 'De_777777777777777777777777777777777777777777777777777777777777777777777777',
    confirm: 'De_777777777777777777777777777777777777777777777777777777777777777777777777',
    expect: false
  },
  {
    input: 'De_8',
    confirm: 'De_8',
    expect: false
  },
  {
    input: 'De_39',
    confirm: 'De_39',
    expect: false
  },
  {
    input: 'De_48',
    confirm: 'De_48',
    expect: false
  },
  {
    input: 'De_556',
    confirm: 'De_665',
    expect: false
  }
]
