const v_rifier = require('../data/v_rifier');

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
  test('isPort  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await v_rifier.isPort(item.input)).toEqual(item.expect);
  });
});
