let myVerifier = require('../..')();


const undefinedVariable = undefined;

const static_data = [

  {
    input: undefinedVariable,
    expect: false,
  },

  {
    input: undefined,
    expect: false,
  },

  {
    input: 111,
    expect: true,
  },

  {
    input: null,
    expect: false,
  },

  {
    input: "",
    expect: false,
  },

  {
    input: false,
    expect: false,
  },

  {
    input: true,
    expect: false,
  },

  {
    input: 0,
    expect: false,
  },


  {
    input: "Fa",
    expect: false,
  },

  {
    input: "X123",
    expect: false,
  },

  {
    input: "123456789",
    expect: false,
  },

  {
    input: "FF00ca",
    expect: false,
  },


  {
    input: "ABC",
    expect: false,
  },


  {
    input: 72875,
    expect: false,
  },


  {
    input: 8080,
    expect: true,
  },

  {
    input: 8000,
    expect: true,
  },

  {
    input: 443,
    expect: true,
  },

  {
    input: 9000,
    expect: true,
  },

  {
    input: 6060,
    expect: true,
  },
];

static_data.forEach(item => {
  test('Specific .isPort  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await myVerifier.isPort(item.input)).toEqual(item.expect);
  });
});


test('confirming all ports', async () => {
  for (let i = -10000; i < 100000; i++) {
    if (0 < i && i < 65536) {
      expect(await myVerifier.isPort(i)).toEqual(true);
    } else {
      expect(await myVerifier.isPort(i)).toEqual(false);
    }
  }
});
