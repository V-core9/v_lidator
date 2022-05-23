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
    expect: true,
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
    input: 0,
    expect: false,
  },

];

static_data.forEach(item => {
  test('isNull  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await myVerifier.isNull(item.input)).toEqual(item.expect);
  });
});
