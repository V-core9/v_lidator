module.exports = [
  {
    input: "Slavko",
    expect: false
  },
  {
    input: "Sla Vu",
    expect: false
  },
  {
    input: "Sla. Vu",
    expect: false
  },
  {
    input: "Sla@Vu",
    expect: false
  },
  {
    input: "Sla",
    expect: false
  },
  {
    input: 1234567890123456,
    expect: true
  },
  {
    input: 1651570537967,
    expect: true
  },
  {
    input: 12345678901234567890,
    expect: true
  },
  {
    input: 123456789012345678901234567890.12345678901234567890,
    expect: true
  },
  {
    input: true,
    expect: false
  },
  {
    input: false,
    expect: false
  },
];
