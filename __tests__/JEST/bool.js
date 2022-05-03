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
    expect: false,
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
    expect: true,
  },

  {
    input: true,
    expect: true,
  },

  {
    input: 0,
    expect: false,
  },
  
];

static_data.forEach(item => {
  test('isBool  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await v_rifier.isBool(item.input)).toEqual(item.expect);
  });
});
