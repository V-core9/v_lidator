module.exports = [
  {
    input: undefined,
    expect: false
  },

  {
    input: 'Slavko',
    expect: false
  },

  {
    input: 'Sla Vu',
    expect: false
  },

  {
    input: 'Sla. Vu',
    expect: false
  },

  {
    input: 'Sla@Vu',
    expect: false
  },

  {
    input: 'Sla',
    expect: false
  },

  {
    input: 11,
    expect: true
  },

  {
    input: -115483,
    expect: true
  },

  {
    input: '11-',
    expect: false
  },

  {
    input: -2147483648, // min integer allowed : -2147483648
    expect: true
  },

  {
    input: -2147483649,
    expect: false
  },

  {
    input: 2147483647, //max integer 2147483647
    expect: true
  },
  {
    input: 2147483648,
    expect: false
  },

  {
    input: -1154830000,
    expect: true
  },

  {
    input: -9999999999,
    expect: false
  },

  {
    input: 99999999999,
    expect: false
  },
  {
    input: true,
    expect: false
  },
  {
    input: false,
    expect: false
  }
]
