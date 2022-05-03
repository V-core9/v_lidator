module.exports = [
  {
    input: undefined,
    expect: false
  },
  {
    input : "",
    expect:false
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
    expect: false
  },
  {
    input : "Sla@Vu",
    expect:false
  },
  {
    input : "Sla",
    expect: true
  },
];
