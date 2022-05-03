module.exports = [
  {
    input: undefined,
    expect: false
  },
  {
    input: ".",
    expect: false
  },
  {
    input:"Demo",
    expect: true
  },
  {
    input:"Demo..",
    expect: true
  },
  {
    input:"z.",
    expect: false
  },
  {
    input:"..",
    expect: false
  },
  {
    input:".._",
    expect: false
  },
  {
    input:"De_",
    expect:true
  },
  {
    input:"De/.mo",
    expect: false
  },
  {
    input:"De\lmo",
    expect: true
  },
  {
    input:"De\\mo",
    expect: false
  },
  {
    input:"Demo\\",
    expect: false
  },
  {
    input:"Demo_____1",
    expect: true
  },
  {
    input:"Demo123455367345531231264362352341234123123123123",
    expect: false
  },
  {
    input:"Demo@@3123@mail.com",
    expect: false
  },
  {
    input:"mail.com",
    expect: true
  },
  {
    input:"XZCZXCSDAFSAFAl__",
    expect: true
  },
  
  {
    input:"WEQ23652mail.com",
    expect: true
  },
  
  {
    input:"a14219407124am",
    expect: true
  },
  
  {
    input:"214219407124@mail.com",
    expect: false
  },
  
  {
    input:"QWUE.OW.Q.IN.ANDPIn@mail.com",
    expect: false
  },
  
  {
    input:"demo53266@mail.com",
    expect: false
  },
  
  {
    input:"De_1",
    expect: true
  },
  
  {
    input:"De_V",
    expect: true
  },
  
  {
    input:"Vs_",
    expect: true
  },
  
  {
    input:"A",
    expect: false
  },
  
];
