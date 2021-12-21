


module.exports = [
  {
    input: ".",
    expect: [{ confirm: undefined, input_value: ".", msg: "🤯 Username is too short.", suggest: "Minimum Length is [4]", type: "error" }, { confirm: undefined, input_value: ".", msg: "🙋‍♂️ Username can only have letters, numbers, underscore and dot.", suggest: "Try removing special characters.", type: "error" }],
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
    expect: [{ confirm: undefined, input_value: "z.", msg: "🤯 Username is too short.", suggest: "Minimum Length is [4]", type: "error" }]
  },
  {
    input:"..",
    expect: [{ confirm: undefined, input_value: "..", msg: "🤯 Username is too short.", suggest: "Minimum Length is [4]", type: "error" }, { confirm: undefined, input_value: "..", msg: "🙋‍♂️ Username can only have letters, numbers, underscore and dot.", suggest: "Try removing special characters.", type: "error" }]
  },
  {
    input:".._",
    expect: [{ confirm: undefined, input_value: ".._", msg: "🤯 Username is too short.", suggest: "Minimum Length is [4]", type: "error" }, { confirm: undefined, input_value: ".._", msg: "🙋‍♂️ Username can only have letters, numbers, underscore and dot.", suggest: "Try removing special characters.", type: "error" }]
  },
  {
    input:"De_",
    expect: [{confirm: undefined, input_value: "De_", msg: "🤯 Username is too short.", suggest: "Minimum Length is [4]", type: "error"}]
  },
  {
    input:"De/.mo",
    expect: [{confirm: undefined, input_value: "De/.mo", msg: "🙋‍♂️ Username can only have letters, numbers, underscore and dot.", suggest: "Try removing special characters.", type: "error"}]
  },
  {
    input:"De\lmo",
    expect: true
  },
  {
    input:"De\\mo",
    expect: [{confirm: undefined, input_value: "De\\mo", msg: "🙋‍♂️ Username can only have letters, numbers, underscore and dot.", suggest: "Try removing special characters.", type: "error"}]
  },
  {
    input:"Demo\\",
    expect: [{confirm: undefined, input_value: "Demo\\", msg: "🙋‍♂️ Username can only have letters, numbers, underscore and dot.", suggest: "Try removing special characters.", type: "error"}]
  },
  {
    input:"Demo_____1",
    expect: true
  },
  {
    input:"Demo123455367345531231264362352341234123123123123",
    expect: [{confirm: undefined, input_value: "Demo123455367345531231264362352341234123123123123", msg: "💥 Username exceeded allowed maximum.", suggest: "Maximum Length is [32]", type: "error"}]
  },
  {
    input:"Demo@@3123@mail.com",
    expect: [{confirm: undefined, input_value: "Demo@@3123@mail.com", msg: "🙋‍♂️ Username can only have letters, numbers, underscore and dot.", suggest: "Try removing special characters.", type: "error"}]
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
    expect: [{confirm: undefined, input_value: "214219407124@mail.com", msg: "🙋‍♂️ Username can only have letters, numbers, underscore and dot.", suggest: "Try removing special characters.", type: "error"}]
  },
  
  {
    input:"QWUE.OW.Q.IN.ANDPIn@mail.com",
    expect: [{confirm: undefined, input_value: "QWUE.OW.Q.IN.ANDPIn@mail.com", msg: "🙋‍♂️ Username can only have letters, numbers, underscore and dot.", suggest: "Try removing special characters.", type: "error"}]
  },
  
  {
    input:"demo53266@mail.com",
    expect: [{ confirm: undefined, input_value: "demo53266@mail.com", msg: "🙋‍♂️ Username can only have letters, numbers, underscore and dot.", suggest: "Try removing special characters.", type: "error" }]
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
    input:"De_",
    expect: [{ "confirm": undefined, "input_value": "De_", "msg": "🤯 Username is too short.", "suggest": "Minimum Length is [4]", "type": "error" }]
  },
  
  {
    input:"A",
    expect: [{ "confirm": undefined, "input_value": "A", "msg": "🤯 Username is too short.", "suggest": "Minimum Length is [4]", "type": "error" }]
  },
  
];
