module.exports = [
  {
    input : "Slavko",
    expect: [{confirm: undefined, input_value: "Slavko", msg: "🙋‍♂️ Number can only have numbers and dot.", suggest: "Try removing special characters.", type: "error"}]
  },
  {
    input : "Sla Vu",
    expect: [{confirm: undefined, input_value: "Sla Vu", msg: "🙋‍♂️ Number can only have numbers and dot.", suggest: "Try removing special characters.", type: "error"}]
  },
  {
    input : "Sla. Vu",
    expect: [{confirm: undefined, input_value: "Sla. Vu", msg: "🙋‍♂️ Number can only have numbers and dot.", suggest: "Try removing special characters.", type: "error"}]
  },
  {
    input : "Sla@Vu",
    expect: [{confirm: undefined, input_value: "Sla@Vu", msg: "🙋‍♂️ Number can only have numbers and dot.", suggest: "Try removing special characters.", type: "error"}]
  },
  {
    input : "Sla",
    expect: [{confirm: undefined, input_value: "Sla", msg: "🙋‍♂️ Number can only have numbers and dot.", suggest: "Try removing special characters.", type: "error"}]
  },
];
