const v_rifier = require('../..');

let myVerifier = null;
(async () => {
  myVerifier = await v_rifier();
})();


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
    expect(await myVerifier.isBool(item.input)).toEqual(item.expect);
  });
});


static_data.forEach(item => {
  test('"bool"  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await myVerifier("bool", item.input)).toEqual(item.expect);
  });
});
