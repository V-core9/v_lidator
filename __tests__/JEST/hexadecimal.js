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
    expect: true,
  },

  {
    input: "X123",
    expect: false,
  },

  {
    input: "123456789",
    expect: true,
  },

  {
    input: "FF00ca",
    expect: true,
  },


  {
    input: "ABC",
    expect: true,
  },


];

static_data.forEach(item => {
  test('isHexadecimal  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await myVerifier.isHexadecimal(item.input)).toEqual(item.expect);
  });
});


static_data.forEach(item => {
  test('"hexadecimal"  ?? [ ' + item.input + ' ]\n', async () => {
    expect(await myVerifier("hexadecimal", item.input)).toEqual(item.expect);
  });
});
