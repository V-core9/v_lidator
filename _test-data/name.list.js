module.exports = [
  {
    input : "",
    expect: [{confirm: undefined, input_value: "", msg: "🤯 Name is too short.", suggest: "Minimum Length is [4]", type: "error"}, {confirm: undefined, input_value: "", msg: "🙋‍♂️ Name can only have letters, numbers, underscore and dot.", suggest: "Try removing special characters.", type: "error"}]
  },
  {
    input : "Slavko",
    expect: true
  },
  {
    input : "Sla Vu",
    expect: true
  },
  {
    input : "Sla. Vu",
    expect: [{confirm: undefined, input_value: "Sla. Vu", msg: "🙋‍♂️ Name can only have letters, numbers, underscore and dot.", suggest: "Try removing special characters.", type: "error"}]
  },
  {
    input : "Sla@Vu",
    expect: [{confirm: undefined, input_value: "Sla@Vu", msg: "🙋‍♂️ Name can only have letters, numbers, underscore and dot.", suggest: "Try removing special characters.", type: "error"}]
  },
  {
    input : "Sla",
    expect: [{confirm: undefined, input_value: "Sla", msg: "🤯 Name is too short.", suggest: "Minimum Length is [4]", type: "error"}]
  },
];
