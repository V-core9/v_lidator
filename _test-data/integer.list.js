module.exports = [
  {
    input : "Slavko",
    expect: [{"confirm": undefined, "input_value": "Slavko", "msg": "🙋‍♂️ Integer can only have numbers.", "suggest": "Try removing special characters.", "type": "error"}]
  },
  {
    input : "Sla Vu",
    expect: [{"confirm": undefined, "input_value": "Sla Vu", "msg": "🙋‍♂️ Integer can only have numbers.", "suggest": "Try removing special characters.", "type": "error"}]
  },
  {
    input : "Sla. Vu",
    expect: [{confirm: undefined, input_value: "Sla. Vu", msg: "🙋‍♂️ Integer can only have numbers.", suggest: "Try removing special characters.", type: "error"}]
  },
  {
    input : "Sla@Vu",
    expect: [{confirm: undefined, input_value: "Sla@Vu", msg: "🙋‍♂️ Integer can only have numbers.", suggest: "Try removing special characters.", type: "error"}]
  },
  {
    input : "Sla",
    expect: [{"confirm": undefined, "input_value": "Sla", "msg": "🙋‍♂️ Integer can only have numbers.", "suggest": "Try removing special characters.", "type": "error"}]
  },
];
